const PHOTOS = {
"agua_mineral":"img/agua mineral.webp",
  "cha_gelado":"img/chá gelado.jpeg",
  "harumaki":"img/harumaki.avif",
  "hossomaki_salmao":"img/hossomaki salmao.webp",
  "hotroll_branco":"img/hot-roll branco.jpg",
  "hotroll_cream_close":"img/hot roll cream close.avif",
  "hotroll_cream_corte":"img/hot roll cream corte.jpg",
  "hotroll_salmao":"img/hot roll salmão.jpg",
  "maki_kani":"img/maki kani.jpg",
  "missoshiru":"img/missoshiru.avif",
  "mochi":"img/mochi.jpg",
  "niguiri_salmao":"img/neguiri salmão.jpg",
  "refrigerante_lata":"img/refrigerante Lata.jpg",
  "rolinho_doce":"img/rolinho doce.jpg",
  "sashimi_atum":"img/sashimi atum.jpg",
  "sorvete_matcha":"img/sorvete matcha.jpg",
  "suco_natural":"img/suco natural.jpg",
  "sunomono":"img/somonomo.jpg",
  "temaki_atum":"img/temaki atum.jpg",
  "temaki_cream":"img/temaki cream.jpg",
  "temaki_misto":"img/temaki misto.avif",
  "temaki_salmao":"img/temaki salmão.jpg",
  "uramaki_philadelphia":"img/uramaki philadelphia.jpg",
  "yakisoba_camarao":"img/yakisoba camarao.webp",
  "yakisoba_carne":"img/yakisoba carne.jpg",
  "yakisoba_tofu":"img/yakisoba tofu.jpg",
  
};


  const CATEGORIES = [
    { id:'sushi', label:'Sushi', kanji:'寿' },
    { id:'temaki', label:'Temaki', kanji:'巻' },
    { id:'entradas', label:'Entradas', kanji:'膳' },
    { id:'bebidas', label:'Bebidas', kanji:'飲' },
    { id:'sobremesas', label:'Sobremesas', kanji:'甘' },
  ];

  const ITEMS = [
    { id:1, cat:'sushi', name:'Niguiri Salmão', desc:'Fatia de salmão fresco sobre arroz temperado, com gengibre e wasabi', price:8.90, photo:'niguiri_salmao' },
    { id:2, cat:'sushi', name:'Sashimi de Atum', desc:'Fatias generosas de atum fresco fatiado na hora', price:24.90, photo:'sashimi_atum' },
    { id:3, cat:'sushi', name:'Uramaki Philadelphia', desc:'Salmão, cream cheese, avocado e tobiko, com gengibre', price:28.90, photo:'uramaki_philadelphia' },
    { id:4, cat:'sushi', name:'Hot Roll Salmão', desc:'Empanado e selado na hora, com molho especial da casa', price:26.90, photo:'hotroll_salmao' },
    { id:5, cat:'sushi', name:'Hot Roll Cream Cheese', desc:'Recheio cremoso, salmão e pepino, empanado crocante', price:27.90, photo:'hotroll_cream_corte' },
    { id:6, cat:'sushi', name:'Hot Roll Especial', desc:'Empanado, recheio cremoso com molho tarê', price:25.90, photo:'hotroll_cream_close' },
    { id:7, cat:'sushi', name:'Uramaki Empanado', desc:'Massa empanada crocante com recheio cremoso', price:24.90, photo:'hotroll_branco' },
    { id:8, cat:'sushi', name:'Maki de Kani', desc:'6 unidades, kani (siri) com molho da casa', price:19.90, photo:'maki_kani' },
    { id:9, cat:'sushi', name:'Hossomaki Salmão', desc:'Enrolado fino, coberto com fatias de salmão fresco', price:22.90, photo:'hossomaki_salmao' },

    { id:10, cat:'temaki', name:'Temaki Salmão', desc:'Cone de alga com arroz e salmão fresco picado', price:22.90, photo:'temaki_salmao' },
    { id:11, cat:'temaki', name:'Temaki Atum', desc:'Cone de alga com arroz e atum fresco picado', price:23.90, photo:'temaki_atum' },
    { id:12, cat:'temaki', name:'Temaki Misto', desc:'Salmão e peixe branco, servido com sunomono', price:23.90, photo:'temaki_misto' },
    { id:13, cat:'temaki', name:'Temaki Cream Cheese', desc:'Salmão cremoso com cream cheese e cebolinha', price:24.90, photo:'temaki_cream' },

    { id:14, cat:'entradas', name:'Missoshiru', desc:'Tradicional sopa de missô com tofu e alga wakame', price:9.90, photo:'missoshiru' },
    { id:15, cat:'entradas', name:'Sunomono', desc:'Salada de pepino japonesa com gergelim', price:12.90, photo:'sunomono' },
    { id:16, cat:'entradas', name:'Harumaki', desc:'Rolinho primavera crocante recheado com legumes', price:14.90, photo:'harumaki' },
    { id:17, cat:'entradas', name:'Yakisoba de Camarão', desc:'Macarrão oriental salteado com camarões e legumes', price:32.90, photo:'yakisoba_camarao' },
    { id:18, cat:'entradas', name:'Yakisoba de Tofu', desc:'Macarrão oriental salteado com tofu grelhado e legumes', price:26.90, photo:'yakisoba_tofu' },
    { id:19, cat:'entradas', name:'Yakisoba de Carne', desc:'Macarrão oriental salteado com carne e pimentões', price:27.90, photo:'yakisoba_carne' },

    { id:20, cat:'bebidas', name:'Refrigerante Lata', desc:'Lata 350ml, sabores variados', price:6.00, photo:'refrigerante_lata' },
    { id:21, cat:'bebidas', name:'Água Mineral 510ml', desc:'Água mineral natural sem gás, gelada', price:5.00, photo:'agua_mineral' },
    { id:22, cat:'bebidas', name:'Chá Gelado', desc:'Chá gelado com limão e hortelã', price:7.50, photo:'cha_gelado' },
    { id:23, cat:'bebidas', name:'Suco Natural', desc:'Suco de frutas cítricas natural, feito na hora', price:8.50, photo:'suco_natural' },

    { id:24, cat:'sobremesas', name:'Mochi Sortido', desc:'Docinho japonês macio, recheios variados', price:11.90, photo:'mochi' },
    { id:25, cat:'sobremesas', name:'Sorvete de Matcha', desc:'Sorvete artesanal de chá verde japonês', price:13.90, photo:'sorvete_matcha' },
    { id:26, cat:'sobremesas', name:'Rolinho Doce', desc:'Massa crocante recheada com doce de leite e chocolate', price:10.90, photo:'rolinho_doce' },
  ];

  let activeCategory = 'sushi';
  let cart = {};
  let selectedPaymentMethod = null;
  let selectedCardType = null;

  const money = v => 'R$ ' + v.toFixed(2).replace('.', ',');

  function goTo(id){
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(id === 'screen-menu' || id === 'screen-start') closeCart();
    window.scrollTo(0,0);
  }

  function renderTabs(){
    const wrap = document.getElementById('tabs');
    wrap.innerHTML = CATEGORIES.map(c => `
      <button class="tab ${c.id===activeCategory?'active':''}" onclick="selectCategory('${c.id}')">
        <span class="kanji-mini">${c.kanji}</span> ${c.label}
      </button>
    `).join('');
  }

  function selectCategory(id){
    activeCategory = id;
    renderTabs();
    renderMenu();
  }

  function renderMenu(){
    const grid = document.getElementById('menu-grid');
    const items = ITEMS.filter(i => i.cat === activeCategory);
    grid.innerHTML = items.map(i => `
      <div class="item-card" onclick="openProductModal(${i.id})">
        <img class="item-photo" src="${PHOTOS[i.photo]}" alt="${i.name}" loading="lazy">
        <div class="item-body">
          <div class="item-name">${i.name}</div>
          <div class="item-desc">${i.desc}</div>
          <div class="item-row">
            <span class="item-price">${money(i.price)}</span>
           <button class="add-btn" onclick="event.stopPropagation(); addToCart(${i.id})" aria-label="Adicionar ${i.name}">+</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function openProductModal(id){

  const item = ITEMS.find(i => i.id === id);

  if(!item) return;

  document.getElementById('product-modal-image').src =
    PHOTOS[item.photo];

  document.getElementById('product-modal-image').alt =
    item.name;

  document.getElementById('product-modal-name').textContent =
    item.name;

  document.getElementById('product-modal-description').textContent =
    item.desc;

  document.getElementById('product-modal-price').textContent =
    money(item.price);

  document.getElementById('product-modal-add').onclick = function(){

    addToCart(item.id);

    closeProductModal();

  };

  document.getElementById('product-modal').classList.add('open');
}


function closeProductModal(event){

  if(event && event.target !== event.currentTarget){
    return;
  }

  document.getElementById('product-modal').classList.remove('open');
}

  function addToCart(id){
    cart[id] = (cart[id] || 0) + 1;
    renderCartBadge();
    renderCart();
    openCart();
  }

  function changeQty(id, delta){
    if(!cart[id]) return;
    cart[id] += delta;
    if(cart[id] <= 0) delete cart[id];
    renderCartBadge();
    renderCart();
  }

  function removeFromCart(id){
    delete cart[id];
    renderCartBadge();
    renderCart();
  }

  function cartCount(){ return Object.values(cart).reduce((a,b) => a+b, 0); }

  function cartTotal(){
    return Object.entries(cart).reduce((sum,[id,qty]) => {
      const item = ITEMS.find(i => i.id === Number(id));
      return sum + (item ? item.price * qty : 0);
    }, 0);
  }

  function pixDiscount(){
  const total = cartTotal();

  if(total >= 100){
    return total * 0.10;
  }

  if(total >= 50){
    return total * 0.05;
  }

  return 0;
}

function pixTotal(){
  return cartTotal() - pixDiscount();
}

  function renderCartBadge(){
    const badge = document.getElementById('cart-badge');
    const n = cartCount();
    badge.style.display = n > 0 ? 'flex' : 'none';
    badge.textContent = n;
  }

  function renderCart(){
    const wrap = document.getElementById('cart-items');
    const entries = Object.entries(cart);
    if(entries.length === 0){
      wrap.innerHTML = '<p class="cart-empty">Seu carrinho está vazio.<br>Adicione itens do cardápio.</p>';
    } else {
      wrap.innerHTML = entries.map(([id, qty]) => {
        const item = ITEMS.find(i => i.id === Number(id));
        return `
          <div class="cart-item">
            <img class="thumb" src="${PHOTOS[item.photo]}" alt="${item.name}">
            <div class="cart-item-info">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-price">${money(item.price * qty)}</div>
              <div class="qty-row">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
                <span class="qty-val">${qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">remover</button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
    document.getElementById('cart-total').textContent = money(cartTotal());
    document.getElementById('checkout-btn').disabled = entries.length === 0;
  }

  function openCart(){
    document.getElementById('cart-panel').classList.add('open');
    document.getElementById('cart-backdrop').classList.add('open');
  }
  function closeCart(){
    document.getElementById('cart-panel').classList.remove('open');
    document.getElementById('cart-backdrop').classList.remove('open');
  }

  function goToPayment(){
    if(cartCount() === 0) return;
    closeCart();
    renderPaymentSummary();
    selectedPaymentMethod = null;
    selectedCardType = null;
    document.querySelectorAll('.pay-method').forEach(b => b.classList.remove('selected'));
    document.getElementById('payment-detail').innerHTML = '';
    document.getElementById('confirm-btn').disabled = true;
    goTo('screen-payment');
  }

  function renderPaymentSummary(){
    const wrap = document.getElementById('payment-summary');
    const entries = Object.entries(cart);
    const rows = entries.map(([id, qty]) => {
      const item = ITEMS.find(i => i.id === Number(id));
      return `<div class="summary-row"><span>${qty}x ${item.name}</span><span>${money(item.price*qty)}</span></div>`;
    }).join('');
    wrap.innerHTML = rows + `<div class="summary-total"><span>Total</span><span class="val">${money(cartTotal())}</span></div>`;
  }

  function selectMethod(method){
    selectedPaymentMethod = method;
    selectedCardType = null;
    document.querySelectorAll('.pay-method').forEach(b => {
      b.classList.toggle('selected', b.dataset.method === method);
    });
    renderPaymentDetail();
    updateConfirmState();
  }

  function selectCardType(type){
    selectedCardType = type;
    renderPaymentDetail();
    updateConfirmState();
  }

  function updateConfirmState(){
    const ready = selectedPaymentMethod === 'pix'
      || selectedPaymentMethod === 'dinheiro'
      || (selectedPaymentMethod === 'cartao' && selectedCardType);
    document.getElementById('confirm-btn').disabled = !ready;
  }

  function renderPaymentDetail(){
    const wrap = document.getElementById('payment-detail');

    if(selectedPaymentMethod === 'pix'){

  const total = cartTotal();
  const desconto = pixDiscount();
  const totalFinal = pixTotal();

  let informacaoDesconto = '';

  if(desconto > 0){

    const porcentagem = total >= 100 ? 10 : 5;

    informacaoDesconto = `
      <div class="detail-sub">
        Desconto PIX: <strong>${porcentagem}%</strong>
      </div>

      <div class="detail-sub">
        Economia: <strong>${money(desconto)}</strong>
      </div>
    `;

  } else {

    informacaoDesconto = `
      <div class="detail-sub">
        Compras a partir de R$ 50,00 no PIX ganham desconto.
      </div>
    `;
  }

  wrap.innerHTML = `
    <div class="detail-card">

      <div class="detail-title">
        Escaneie o QR Code para pagar
      </div>

      <div class="detail-sub" style="margin-bottom:1rem;">
        Abra o app do seu banco, escolha Pix Copia e Cola ou câmera,
        e aponte para o código
      </div>

      <div class="qr-wrap">
        <div class="qr-frame">${fakeQR()}</div>
      </div>

      <div class="detail-sub">
        Total: <strong>${money(total)}</strong>
      </div>

      ${informacaoDesconto}

      <div class="detail-sub">
        Valor a pagar:
        <strong style="color:var(--gold)">
          ${money(totalFinal)}
        </strong>
      </div>

    </div>`;


    } else if(selectedPaymentMethod === 'cartao'){
      const chosen = selectedCardType
        ? `
          <div class="terminal-icon">💳</div>
          <div class="detail-title">Aproxime, insira ou passe o cartão na maquininha</div>
          <div class="detail-sub">Cartão de ${selectedCardType === 'debito' ? 'Débito' : 'Crédito'} — Valor: <strong style="color:var(--gold)">${money(cartTotal())}</strong></div>
        `
        : `<div class="detail-sub" style="margin-bottom:.2rem;">Selecione o tipo de cartão</div>`;
      wrap.innerHTML = `
        <div class="detail-card">
          <div class="card-methods">
            <button class="card-type-btn ${selectedCardType==='debito'?'selected':''}" onclick="selectCardType('debito')">Débito</button>
            <button class="card-type-btn ${selectedCardType==='credito'?'selected':''}" onclick="selectCardType('credito')">Crédito</button>
          </div>
          ${chosen}
        </div>`;
    } else if(selectedPaymentMethod === 'dinheiro'){
      wrap.innerHTML = `
        <div class="detail-card">
          <div class="terminal-icon">💵</div>
          <div class="detail-title">Dirija-se ao caixa para pagar em dinheiro</div>
          <div class="detail-sub">Valor a pagar: <strong style="color:var(--gold)">${money(cartTotal())}</strong></div>
        </div>`;
    } else {
      wrap.innerHTML = '';
    }
  }

  function fakeQR(){
    const size = 21, cell = 6, dim = size * cell;
    let seed = 1337;
    const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    let modules = '';
    for(let r = 0; r < size; r++){
      for(let c = 0; c < size; c++){
        const inFinder = (r < 7 && c < 7) || (r < 7 && c >= size - 7) || (r >= size - 7 && c < 7);
        if(inFinder) continue;
        if(rnd() > 0.55){
          modules += `<rect x="${c*cell}" y="${r*cell}" width="${cell}" height="${cell}" fill="#141010"/>`;
        }
      }
    }
    const finder = (x, y) => `
      <rect x="${x}" y="${y}" width="${7*cell}" height="${7*cell}" fill="#141010"/>
      <rect x="${x+cell}" y="${y+cell}" width="${5*cell}" height="${5*cell}" fill="#fff"/>
      <rect x="${x+2*cell}" y="${y+2*cell}" width="${3*cell}" height="${3*cell}" fill="#141010"/>
    `;
    return `<svg width="${dim}" height="${dim}" viewBox="0 0 ${dim} ${dim}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${dim}" height="${dim}" fill="#fff"/>
      ${modules}
      ${finder(0,0)}
      ${finder((size-7)*cell,0)}
      ${finder(0,(size-7)*cell)}
    </svg>`;
  }

 async function confirmOrder(){

  if(!selectedPaymentMethod) return;

  const nome = document.getElementById('cliente-nome').value.trim();
  const cpf = document.getElementById('cliente-cpf').value.trim();

  // Verifica se nome e CPF foram preenchidos
  if(!nome || !cpf){
    alert('Digite seu nome e CPF antes de confirmar o pedido.');
    return;
  }

  // Pega os produtos do carrinho
  const itens = Object.entries(cart).map(([id, quantidade]) => ({
    id_produto: Number(id),
    quantidade: quantidade
  }));

  // Monta os dados que serão enviados para o PHP
  const dadosPedido = {
    nome: nome,
    cpf: cpf,
    total: cartTotal(),
    forma_pagamento: selectedPaymentMethod,
    itens: itens
  };

  try {

    const resposta = await fetch('finalizar.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosPedido)
    });

    const resultado = await resposta.json();

    if(!resultado.sucesso){
      alert('Erro ao finalizar pedido: ' + resultado.erro);
      return;
    }

    // Usa o verdadeiro ID do pedido vindo do banco
    document.getElementById('order-number').textContent =
      '#' + resultado.id_pedido;

    goTo('screen-confirm');

  } catch(erro) {

    console.error(erro);

    alert('Não foi possível conectar ao servidor.');
  }
}

  function resetOrder(){
    cart = {};
    selectedPaymentMethod = null;
    renderCartBadge();
    renderCart();
    goTo('screen-start');
  }

  renderTabs();
  renderMenu();
  renderCart();
