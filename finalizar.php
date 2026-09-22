<?php

header('Content-Type: application/json');

$servidor = "localhost";
$usuario = "root";
$senha = "root";
$banco = "projeto";

$conexao = new mysqli($servidor, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    echo json_encode([
        "sucesso" => false,
        "erro" => "Erro na conexão: " . $conexao->connect_error
    ]);
    exit;
}

/* Recebe os dados enviados pelo JavaScript */
$dados = json_decode(file_get_contents("php://input"), true);

if (!$dados) {
    echo json_encode([
        "sucesso" => false,
        "erro" => "Nenhum dado foi recebido."
    ]);
    exit;
}


/* =========================
   1. RECEBER OS DADOS
   ========================= */

$nome = trim($dados["nome"] ?? "");
$cpf = trim($dados["cpf"] ?? "");

$total = $dados["total"] ?? 0;
$formaPagamento = $dados["forma_pagamento"] ?? "";
$itens = $dados["itens"] ?? [];


/* Verifica nome e CPF */

if ($nome === "" || $cpf === "") {
    echo json_encode([
        "sucesso" => false,
        "erro" => "Nome e CPF são obrigatórios."
    ]);
    exit;
}


/* =========================
   2. LIMPAR O CPF
   ========================= */

/*
   Remove pontos, traços e outros caracteres.
   Exemplo:
   123.456.789-00
   vira:
   12345678900
*/

$cpf = preg_replace('/\D/', '', $cpf);


/* =========================
   3. PROCURAR O CLIENTE
   ========================= */

$sqlCliente = "SELECT id_cliente
               FROM clientes
               WHERE cpf = ?";

$stmtCliente = $conexao->prepare($sqlCliente);

if (!$stmtCliente) {
    echo json_encode([
        "sucesso" => false,
        "erro" => "Erro ao procurar cliente: " . $conexao->error
    ]);
    exit;
}

$stmtCliente->bind_param("s", $cpf);
$stmtCliente->execute();

$resultadoCliente = $stmtCliente->get_result();


/* =========================
   4. VERIFICAR SE O CLIENTE EXISTE
   ========================= */

if ($resultadoCliente->num_rows > 0) {

    /*
       Cliente já existe.
       Pegamos o ID dele.
    */

    $linhaCliente = $resultadoCliente->fetch_assoc();

    $idCliente = $linhaCliente["id_cliente"];

} else {

    /*
       Cliente ainda não existe.
       Vamos criar um novo cliente.
    */

    $resultadoNovoCliente = $conexao->query(
        "SELECT COALESCE(MAX(id_cliente), 0) + 1 AS novo_id
         FROM clientes"
    );

    $linhaNovoCliente = $resultadoNovoCliente->fetch_assoc();

    $idCliente = $linhaNovoCliente["novo_id"];


    /* Salva o novo cliente */

    $sqlNovoCliente = "INSERT INTO clientes
                       (id_cliente, nome, cpf)
                       VALUES (?, ?, ?)";

    $stmtNovoCliente = $conexao->prepare($sqlNovoCliente);

    if (!$stmtNovoCliente) {
        echo json_encode([
            "sucesso" => false,
            "erro" => "Erro ao preparar cadastro do cliente: " . $conexao->error
        ]);
        exit;
    }

    $stmtNovoCliente->bind_param(
        "iss",
        $idCliente,
        $nome,
        $cpf
    );

    if (!$stmtNovoCliente->execute()) {
        echo json_encode([
            "sucesso" => false,
            "erro" => "Erro ao cadastrar cliente: " . $stmtNovoCliente->error
        ]);
        exit;
    }

    $stmtNovoCliente->close();
}

$stmtCliente->close();

/* =========================
   5. CALCULAR DESCONTO DO PIX
   ========================= */

$idDesconto = null;
$valorDesconto = 0;
$totalFinal = (float)$total;

if (strtoupper($formaPagamento) === "PIX") {

    $sqlDesconto = "SELECT
                        id_desconto,
                        tipo_desconto,
                        valor,
                        valor_minimo
                    FROM desconto
                    WHERE forma_pagamento = 'PIX'
                    AND ativo = TRUE
                    AND valor_minimo <= ?
                    ORDER BY valor_minimo DESC
                    LIMIT 1";

    $stmtDesconto = $conexao->prepare($sqlDesconto);

    if (!$stmtDesconto) {

        echo json_encode([
            "sucesso" => false,
            "erro" => "Erro ao procurar desconto: " . $conexao->error
        ]);

        exit;
    }

    $stmtDesconto->bind_param("d", $total);
    $stmtDesconto->execute();

    $resultadoDesconto = $stmtDesconto->get_result();

    if ($resultadoDesconto->num_rows > 0) {

        $desconto = $resultadoDesconto->fetch_assoc();

        $idDesconto = $desconto["id_desconto"];

        $tipoDesconto = $desconto["tipo_desconto"];

        $valor = (float)$desconto["valor"];


        /* Calcula o desconto */

        if ($tipoDesconto === "PORCENTAGEM") {

            $valorDesconto = $total * ($valor / 100);

        } elseif ($tipoDesconto === "VALOR_FIXO") {

            $valorDesconto = $valor;
        }


        /* Impede que o valor fique negativo */

        if ($valorDesconto > $total) {

            $valorDesconto = $total;
        }


        /* Calcula o total final */

        $totalFinal = $total - $valorDesconto;
    }

    $stmtDesconto->close();
}

/* =========================
   5. CRIAR O ID DO PEDIDO
   ========================= */

$resultado = $conexao->query(
    "SELECT COALESCE(MAX(id_pedidos), 0) + 1 AS novo_id
     FROM pedidos"
);

$linha = $resultado->fetch_assoc();

$idPedido = $linha["novo_id"];


/* =========================
   6. SALVAR O PEDIDO
   ========================= */

$sqlPedido = "INSERT INTO pedidos
              (id_pedidos, valor_total, data_pedido, id_cliente, id_desconto)
              VALUES (?, ?, CURDATE(), ?, ?)";

$stmtPedido = $conexao->prepare($sqlPedido);

if (!$stmtPedido) {
    echo json_encode([
        "sucesso" => false,
        "erro" => "Erro ao preparar pedido: " . $conexao->error
    ]);
    exit;
}


/*
   i = inteiro
   d = número decimal
   i = inteiro

   idPedido = i
   total = d
   idCliente = i
*/

$stmtPedido->bind_param(
    "idii",
    $idPedido,
    $totalFinal,
    $idCliente,
    $idDesconto
);


if (!$stmtPedido->execute()) {
    echo json_encode([
        "sucesso" => false,
        "erro" => "Erro ao salvar pedido: " . $stmtPedido->error
    ]);
    exit;
}


/* =========================
   7. SALVAR OS PRODUTOS
   ========================= */

foreach ($itens as $item) {

    $idProduto = $item["id_produto"];
    $quantidade = $item["quantidade"];


    /* Criar ID do item */

    $resultadoItem = $conexao->query(
        "SELECT COALESCE(MAX(id_item), 0) + 1 AS novo_id
         FROM item_pedido"
    );

    $linhaItem = $resultadoItem->fetch_assoc();

    $idItem = $linhaItem["novo_id"];


    /* Inserir item */

    $sqlItem = "INSERT INTO item_pedido
                (id_item, id_pedido, id_produto, quantidade)
                VALUES (?, ?, ?, ?)";

    $stmtItem = $conexao->prepare($sqlItem);

    if (!$stmtItem) {
        echo json_encode([
            "sucesso" => false,
            "erro" => "Erro ao preparar item: " . $conexao->error
        ]);
        exit;
    }

    $stmtItem->bind_param(
        "iiii",
        $idItem,
        $idPedido,
        $idProduto,
        $quantidade
    );


    if (!$stmtItem->execute()) {
        echo json_encode([
            "sucesso" => false,
            "erro" => "Erro ao salvar item: " . $stmtItem->error
        ]);
        exit;
    }

    $stmtItem->close();
}


/* =========================
   8. SALVAR O PAGAMENTO
   ========================= */

$resultadoPagamento = $conexao->query(
    "SELECT COALESCE(MAX(id_pagamento), 0) + 1 AS novo_id
     FROM pagamento"
);

$linhaPagamento = $resultadoPagamento->fetch_assoc();

$idPagamento = $linhaPagamento["novo_id"];


$sqlPagamento = "INSERT INTO pagamento
                 (id_pagamento, id_pedido, forma_pagamento, valor)
                 VALUES (?, ?, ?, ?)";

$stmtPagamento = $conexao->prepare($sqlPagamento);

if (!$stmtPagamento) {
    echo json_encode([
        "sucesso" => false,
        "erro" => "Erro ao preparar pagamento: " . $conexao->error
    ]);
    exit;
}


$stmtPagamento->bind_param(
    "iisd",
    $idPagamento,
    $idPedido,
    $formaPagamento,
    $totalFinal
);


if (!$stmtPagamento->execute()) {
    echo json_encode([
        "sucesso" => false,
        "erro" => "Erro ao salvar pagamento: " . $stmtPagamento->error
    ]);
    exit;
}


/* =========================
   9. RESPOSTA PARA O JAVASCRIPT
   ========================= */

echo json_encode([
    "sucesso" => true,
    "id_pedido" => $idPedido,
    "id_cliente" => $idCliente,
    "id_desconto" => $idDesconto,
    "valor_original" => $total,
    "valor_desconto" => $valorDesconto,
    "valor_final" => $totalFinal
]);


/* =========================
   10. FECHAR CONEXÃO
   ========================= */

$stmtPedido->close();
$stmtPagamento->close();
$conexao->close();

?>