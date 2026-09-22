
create DATABASE projeto;
USE projeto;

CREATE TABLE produto (
    id_produto INT PRIMARY KEY NOT NULL,
    nome VARCHAR(45) NOT NULL,
    descricao VARCHAR(45) NOT NULL,
    preco DOUBLE NOT NULL,
    categoria VARCHAR(45) NOT NULL
);

CREATE TABLE desconto (
    id_desconto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    tipo_desconto ENUM('PORCENTAGEM','VALOR_FIXO') NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    codigo VARCHAR(20) UNIQUE,
    valor_minimo DECIMAL(10,2),
    data_inicio DATE,
    data_fim DATE,
    ativo BOOLEAN DEFAULT TRUE
);
CREATE TABLE pedidos (
    id_pedidos INT PRIMARY KEY NOT NULL,
    valor_total DOUBLE NOT NULL,
    data_pedido DATE NOT NULL,
    id_desconto INT,
    
    FOREIGN KEY (id_desconto)
	REFERENCES desconto(id_desconto)
);

CREATE TABLE item_pedido (
    id_item INT PRIMARY KEY NOT NULL,
    id_pedido INT NOT NULL,
    id_produto INT NOT NULL,

    FOREIGN KEY (id_pedido)
	REFERENCES pedidos(id_pedidos),

    FOREIGN KEY (id_produto)
	REFERENCES produto(id_produto)
);

CREATE TABLE pagamento (
    id_pagamento INT PRIMARY KEY NOT NULL,
    id_pedido INT NOT NULL,
    forma_pagamento VARCHAR(45) NOT NULL,
    valor DOUBLE NOT NULL,

    FOREIGN KEY (id_pedido)
	REFERENCES pedidos(id_pedidos)
);
ALTER TABLE item_pedido
ADD quantidade INT NOT NULL;

INSERT INTO produto
(id_produto, nome, descricao, preco, categoria)
VALUES
(1, 'Niguiri Salmão', 'Fatia de salmão fresco', 8.90, 'sushi'),
(2, 'Niguiri Atum', 'Fatia de atum', 9.90, 'sushi'),
(3, 'Sashimi Salmão', '5 fatias de salmão', 24.90, 'sushi'),
(4, 'Uramaki Philadelphia', 'Salmão e cream cheese', 28.90, 'sushi');

select * from pedidos;