'use strict';

const solutions = {
  voce: [
    { id:'auto', title:'Seguro auto', icon:'car', description:'Para ir e vir com mais tranquilidade, em todos os seus caminhos.', detail:'Seu carro faz parte da sua rotina. A gente ajuda a encontrar uma proteção alinhada ao seu veículo e à forma como você usa.', features:['Opções para colisão, roubo e furto','Responsabilidade civil e danos a terceiros','Possibilidades de assistência e serviços'] },
    { id:'residencial', title:'Seguro residencial', icon:'home', description:'Cuidado com o seu lar e com tudo o que faz dele o seu lugar.', detail:'Do apartamento à casa, vamos conversar sobre o seu imóvel e avaliar opções de proteção para o patrimônio e a sua rotina.', features:['Proteção para o imóvel e seus bens','Coberturas adicionais para diferentes imprevistos','Opções de assistência para a casa'] },
    { id:'vida', title:'Seguro de vida', icon:'heart', description:'Uma escolha de hoje que cuida de quem caminha com você.', detail:'Seus planos e as pessoas que você ama merecem atenção. Orientamos a escolha de um seguro de vida de acordo com suas prioridades.', features:['Necessidades da família e dos beneficiários','Capitais e coberturas adequados ao seu perfil','Possíveis coberturas para situações em vida'] },
    { id:'saude', title:'Saúde e odontológico', icon:'health', description:'Mais cuidado para você, sua família e o seu sorriso.', detail:'Entenda as opções de saúde e assistência odontológica disponíveis para seu perfil, com orientação para comparar as características de cada produto.', features:['Modalidades de contratação disponíveis','Rede de atendimento e abrangência','Condições, carências e regras de utilização'] },
    { id:'portateis', title:'Equipamentos portáteis', icon:'device', description:'Seu trabalho, suas conexões e sua rotina mais protegidos.', detail:'Celular, notebook e outros equipamentos acompanham você. Avaliamos quais produtos de proteção estão disponíveis para o seu dispositivo.', features:['Elegibilidade e valor do equipamento','Opções para roubo e danos previstos','Franquias, limites e condições do produto'] }
  ],
  empresa: [
    { id:'empresarial', title:'Seguro empresarial', icon:'building', description:'Você cuida de crescer. A gente ajuda a cuidar do seu negócio.', detail:'Cada negócio tem seus próprios riscos. Nossa conversa começa pela sua atividade, pelo seu patrimônio e pelo dia a dia da empresa.', features:['Proteção patrimonial para a atividade','Coberturas adicionais conforme o negócio','Condições de assistência e responsabilidade civil'] },
    { id:'frotas', title:'Frotas e veículos pesados', icon:'truck', description:'Proteção para os veículos que colocam o seu negócio em movimento.', detail:'Avaliamos opções para veículos da empresa, frotas e veículos pesados considerando sua operação e as características de utilização.', features:['Perfil dos veículos e da operação','Opções de cobertura e assistência','Necessidades de responsabilidade civil'] },
    { id:'grupo', title:'Vida em grupo', icon:'users', description:'Mais cuidado com as pessoas que fazem sua empresa acontecer.', detail:'Converse com a DuoMais sobre soluções de vida em grupo que considerem o perfil dos colaboradores e as necessidades da sua empresa.', features:['Perfil do grupo e elegibilidade','Coberturas e capitais por modalidade','Condições de contratação e movimentação'] },
    { id:'condominio', title:'Seguro condomínio', icon:'building', description:'Cuidado com o patrimônio compartilhado e com a vida em comunidade.', detail:'Orientação para avaliar a proteção do condomínio e as coberturas compatíveis com as características do empreendimento.', features:['Características e uso do condomínio','Coberturas patrimoniais e adicionais','Responsabilidade civil e assistências previstas'] }
  ],
  planos: [
    { id:'consorcio', title:'Consórcio', icon:'key', description:'Uma conversa sobre o caminho até o seu próximo imóvel ou veículo.', detail:'Vamos entender seu objetivo e apresentar as características das opções de consórcio, para você avaliar se essa modalidade combina com seus planos.', features:['Objetivo e valor da carta de crédito','Prazo, parcelas e taxa de administração','Regras de contemplação por sorteio ou lance'], note:'A contemplação segue as regras do grupo e não tem data garantida. Condições e custos devem ser avaliados no contrato.' },
    { id:'previdencia', title:'Previdência privada', icon:'plan', description:'Seus planos para o futuro começam com atenção ao presente.', detail:'Converse com a nossa equipe sobre seus objetivos de longo prazo e conheça as características dos produtos de previdência disponíveis.', features:['Objetivos e horizonte de planejamento','Modalidades e características dos planos','Taxas, tributação e condições de resgate'], note:'Condições e riscos variam conforme o plano escolhido. Avalie o regulamento e as informações do produto antes de contratar.' }
  ]
};
const categoryNames = {voce:'Para você',empresa:'Para sua empresa',planos:'Para seus planos'};
const optionNames = {auto:'Seguro auto',residencial:'Seguro residencial',vida:'Seguro de vida',saude:'Saúde e odontológico',portateis:'Equipamentos portáteis',empresarial:'Seguro empresarial',frotas:'Frotas e veículos pesados',grupo:'Vida em grupo',condominio:'Seguro condomínio',consorcio:'Consórcio',previdencia:'Previdência privada'};
const icon = (name, extra = '') => `<svg class="icon ${extra}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const grid = document.getElementById('product-grid');
const tabs = [...document.querySelectorAll('[data-category]')];
let selectedProduct = null;
let lastModalTrigger = null;

function renderProducts(category) {
  grid.setAttribute('aria-labelledby', `tab-${category}`);
  grid.dataset.count = solutions[category].length;
  grid.innerHTML = solutions[category].map((product, index) => `<article class="product-card"><div class="product-card-top"><span class="product-icon">${icon(product.icon)}</span><span class="product-number">0${index + 1} /</span></div><h3>${product.title}</h3><p>${product.description}</p><button data-product="${product.id}" data-product-category="${category}" aria-label="Saiba mais sobre ${product.title}">Conhecer solução <span class="card-arrow">${icon('arrow-up')}</span></button></article>`).join('');
  tabs.forEach(tab => { const active = tab.dataset.category === category; tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; });
}
tabs.forEach((tab,index) => {
  tab.addEventListener('click', () => renderProducts(tab.dataset.category));
  tab.addEventListener('keydown', event => {
    let targetIndex;
    if(event.key === 'ArrowRight') targetIndex = (index + 1) % tabs.length;
    if(event.key === 'ArrowLeft') targetIndex = (index + tabs.length - 1) % tabs.length;
    if(event.key === 'Home') targetIndex = 0;
    if(event.key === 'End') targetIndex = tabs.length - 1;
    if(targetIndex !== undefined) { event.preventDefault(); renderProducts(tabs[targetIndex].dataset.category); tabs[targetIndex].focus(); }
  });
});
renderProducts('voce');

const quoteDialog = document.getElementById('quote-dialog');
const productDialog = document.getElementById('product-dialog');
const privacyDialog = document.getElementById('privacy-dialog');
function openModal(dialog, trigger) {
  lastModalTrigger = trigger || document.activeElement;
  document.body.classList.add('modal-open');
  dialog.showModal();
}
function openQuote(productId, trigger) {
  document.getElementById('quote-product').value = optionNames[productId] || '';
  openModal(quoteDialog, trigger);
}
document.querySelectorAll('[data-quote]').forEach(button => button.addEventListener('click', () => openQuote(null, button)));
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if(event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if(event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if(!document.querySelector('dialog[open]')) {
      document.body.classList.remove('modal-open');
      if(lastModalTrigger?.isConnected) lastModalTrigger.focus({preventScroll:true});
    }
  });
});
grid.addEventListener('click', event => {
  const button = event.target.closest('[data-product]');
  if(!button) return;
  const product = solutions[button.dataset.productCategory].find(item => item.id === button.dataset.product);
  selectedProduct = product;
  document.querySelector('.product-modal-icon').innerHTML = icon(product.icon);
  document.getElementById('product-category').textContent = categoryNames[button.dataset.productCategory];
  document.getElementById('product-title').textContent = product.title;
  document.getElementById('product-description').textContent = product.detail;
  document.getElementById('product-features').innerHTML = product.features.map(feature => `<li>${icon('check-circle')}<span>${feature}</span></li>`).join('');
  document.getElementById('product-note').textContent = product.note || 'A disponibilidade de produtos, coberturas e assistências depende do perfil, da análise de aceitação e das condições de cada seguradora. Nossa equipe explica cada opção antes da contratação.';
  openModal(productDialog, button);
});
document.getElementById('product-quote').addEventListener('click', () => {
  const trigger = lastModalTrigger;
  productDialog.close();
  openQuote(selectedProduct.id, trigger);
});
document.getElementById('privacy-button').addEventListener('click', event => openModal(privacyDialog, event.currentTarget));
document.getElementById('quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const nameInput = document.getElementById('quote-name');
  const name = nameInput.value.trim();
  if(!name) { nameInput.setCustomValidity('Por favor, informe seu nome.'); nameInput.reportValidity(); return; }
  nameInput.setCustomValidity('');
  const product = document.getElementById('quote-product').value;
  const message = document.getElementById('quote-message').value.trim();
  const text = `Olá, DuoMais! Meu nome é ${name}.\nVim pelo site e gostaria de conversar sobre: ${product}.${message ? `\n\n${message}` : ''}`;
  const link = document.createElement('a');
  link.href = `https://wa.me/5511999928556?text=${encodeURIComponent(text)}`;
  link.target = '_self';
  link.rel = 'noopener noreferrer';
  document.body.append(link);
  link.click();
  link.remove();
});
document.getElementById('quote-name').addEventListener('input', event => event.target.setCustomValidity(''));

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu() { navigation.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded','false'); menuToggle.setAttribute('aria-label','Abrir menu'); }
menuToggle.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('is-open',open); menuToggle.setAttribute('aria-expanded',String(open)); menuToggle.setAttribute('aria-label',open ? 'Fechar menu' : 'Abrir menu'); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
document.addEventListener('keydown', event => {if(event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {closeMenu();menuToggle.focus();}});
document.addEventListener('click', event => {if(!event.target.closest('.nav-inner')) closeMenu();});
window.matchMedia('(min-width:761px)').addEventListener('change',event => {if(event.matches) closeMenu();});
document.getElementById('year').textContent = new Date().getFullYear();
