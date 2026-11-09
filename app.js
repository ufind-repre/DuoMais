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
const productControls = document.getElementById('product-controls');
const productPrev = document.getElementById('product-prev');
const productNext = document.getElementById('product-next');
const productPhotos = {
  auto:{src:'assets/produto-auto.jpg',width:1080,height:1080,crop:'30 100 650 410'},
  residencial:{src:'assets/produto-residencial.jpg',width:1600,height:900,crop:'0 345 1600 555'},
  vida:{src:'assets/familia-duomais.jpg',width:1536,height:1024,crop:'0 0 1536 1024'},
  saude:{src:'assets/produto-saude.jpg',width:1080,height:1080,crop:'120 480 540 410'},
  portateis:{src:'assets/produto-portateis.jpg',width:1080,height:1080,crop:'470 460 550 410'},
  empresarial:{src:'assets/produto-empresa.jpg',width:1200,height:1600,crop:'220 600 900 550'}
};
const photoAliases = {frotas:'auto',grupo:'vida',condominio:'residencial',consorcio:'residencial',previdencia:'vida'};
let selectedProduct = null;
let lastModalTrigger = null;

function productPhoto(product) {
  const photo = productPhotos[photoAliases[product.id] || product.id];
  return `<svg class="product-photo-svg" viewBox="${photo.crop}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><image href="${photo.src}" width="${photo.width}" height="${photo.height}"/></svg>`;
}
function updateProductControls() {
  const limit = Math.max(0, grid.scrollWidth - grid.clientWidth);
  if(productControls) productControls.hidden = limit <= 2;
  if(productPrev) productPrev.disabled = grid.scrollLeft <= 2;
  if(productNext) productNext.disabled = grid.scrollLeft >= limit - 2;
}
function renderProducts(category) {
  grid.setAttribute('aria-labelledby', `tab-${category}`);
  grid.dataset.count = solutions[category].length;
  grid.innerHTML = solutions[category].map(product => `<article class="product-card"><button class="product-photo" data-product="${product.id}" data-product-category="${category}" aria-label="Conhecer ${product.title}">${productPhoto(product)}</button><h3>${product.title}</h3><p>${product.description}</p><button data-product="${product.id}" data-product-category="${category}" aria-label="Saiba mais sobre ${product.title}">Conhecer solução <span class="card-arrow">${icon('arrow-up')}</span></button></article>`).join('');
  tabs.forEach(tab => { const active = tab.dataset.category === category; tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; });
  grid.scrollLeft = 0;
  requestAnimationFrame(updateProductControls);
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
grid.addEventListener('scroll', updateProductControls, {passive:true});
new ResizeObserver(updateProductControls).observe(grid);
document.fonts.ready.then(updateProductControls);
function scrollProducts(direction) {
  const card = grid.firstElementChild;
  const distance = card ? card.getBoundingClientRect().width + (parseFloat(getComputedStyle(grid).columnGap) || 0) : grid.clientWidth;
  grid.scrollBy({left:direction * distance,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
}
productPrev?.addEventListener('click', () => scrollProducts(-1));
productNext?.addEventListener('click', () => scrollProducts(1));

const heroSlides = [...document.querySelectorAll('.hero-slide[data-slide]')];
const heroPanels = [...document.querySelectorAll('.hero-panel[data-hero-panel]')];
let activeHero = 0;
[solutions.voce[0],solutions.voce[1]].forEach((product,index) => {
  const slide = heroSlides.find(item => Number(item.dataset.slide) === index + 1);
  if(slide) slide.innerHTML = `<p class="eyebrow">${categoryNames.voce}</p><h2>${product.title}</h2><p class="hero-description">${product.detail}</p><ul class="hero-features">${product.features.map(feature => `<li>${icon('check-circle')}<span>${feature}</span></li>`).join('')}</ul><div class="hero-actions"><button class="button button-yellow" data-product="${product.id}" data-product-category="voce">Conhecer solução ${icon('arrow')}</button></div>`;
});
function showHero(index) {
  if(!heroSlides.length) return;
  activeHero = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach(slide => {slide.hidden = Number(slide.dataset.slide) !== activeHero;});
  heroPanels.forEach(panel => {const active = Number(panel.dataset.heroPanel) === activeHero;panel.classList.toggle('is-active',active);panel.setAttribute('aria-pressed',String(active));});
  const status = document.getElementById('hero-status');
  if(status) status.textContent = `${activeHero + 1} / ${heroSlides.length}`;
}
heroPanels.forEach(panel => panel.addEventListener('click', () => showHero(Number(panel.dataset.heroPanel))));
document.getElementById('hero-prev')?.addEventListener('click', () => showHero(activeHero - 1));
document.getElementById('hero-next')?.addEventListener('click', () => showHero(activeHero + 1));
showHero(0);

const solutionsMenuToggle = document.getElementById('solutions-menu-toggle');
const solutionsMenu = document.getElementById('solutions-menu');
const navDropdown = document.querySelector('.nav-dropdown');
const navCategories = [...document.querySelectorAll('[data-nav-category]')];
function setSolutionsMenu(open) {
  if(!solutionsMenu || !solutionsMenuToggle) return;
  solutionsMenu.hidden = !open;
  solutionsMenuToggle.setAttribute('aria-expanded',String(open));
  navDropdown?.classList.toggle('is-open',open);
}
function renderMenuProducts(category) {
  const menuProducts = document.getElementById('menu-products');
  if(menuProducts) menuProducts.innerHTML = solutions[category].map(product => `<button class="menu-product" data-product="${product.id}" data-product-category="${category}">${product.title} ${icon('arrow-up')}</button>`).join('');
  navCategories.forEach(button => button.setAttribute('aria-pressed',String(button.dataset.navCategory === category)));
}
renderMenuProducts('voce');
navCategories.forEach(button => button.addEventListener('click', () => renderMenuProducts(button.dataset.navCategory)));
solutionsMenuToggle?.addEventListener('click', event => {event.preventDefault();setSolutionsMenu(window.matchMedia('(min-width:981px)').matches || solutionsMenuToggle.getAttribute('aria-expanded') !== 'true');});
navDropdown?.addEventListener('pointerenter', () => {if(window.matchMedia('(min-width:981px)').matches) setSolutionsMenu(true);});
navDropdown?.addEventListener('pointerleave', () => {if(!navDropdown.contains(document.activeElement)) setSolutionsMenu(false);});
navDropdown?.addEventListener('focusout', () => queueMicrotask(() => {if(!navDropdown.contains(document.activeElement) && !navDropdown.matches(':hover')) setSolutionsMenu(false);}));

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
document.addEventListener('click', event => {
  const button = event.target.closest('[data-product]');
  if(!button) return;
  const product = solutions[button.dataset.productCategory]?.find(item => item.id === button.dataset.product);
  if(!product) return;
  const trigger = button.closest('.nav-dropdown') ? solutionsMenuToggle : button;
  setSolutionsMenu(false);
  selectedProduct = product;
  document.querySelector('.product-modal-icon').innerHTML = icon(product.icon);
  document.getElementById('product-category').textContent = categoryNames[button.dataset.productCategory];
  document.getElementById('product-title').textContent = product.title;
  document.getElementById('product-description').textContent = product.detail;
  document.getElementById('product-features').innerHTML = product.features.map(feature => `<li>${icon('check-circle')}<span>${feature}</span></li>`).join('');
  document.getElementById('product-note').textContent = product.note || 'A disponibilidade de produtos, coberturas e assistências depende do perfil, da análise de aceitação e das condições de cada seguradora. Nossa equipe explica cada opção antes da contratação.';
  openModal(productDialog, trigger);
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
function closeMenu() { navigation.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded','false'); menuToggle.setAttribute('aria-label','Abrir menu'); setSolutionsMenu(false); }
menuToggle.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') !== 'true'; if(!open) {closeMenu();return;} navigation.classList.add('is-open'); menuToggle.setAttribute('aria-expanded','true'); menuToggle.setAttribute('aria-label','Fechar menu'); });
navigation.querySelectorAll('a').forEach(link => {if(link !== solutionsMenuToggle) link.addEventListener('click',closeMenu);});
document.addEventListener('keydown', event => {
  if(event.key !== 'Escape' || document.querySelector('dialog[open]')) return;
  if(solutionsMenuToggle?.getAttribute('aria-expanded') === 'true') {setSolutionsMenu(false);solutionsMenuToggle.focus();}
  else if(menuToggle.getAttribute('aria-expanded') === 'true') {closeMenu();menuToggle.focus();}
});
document.addEventListener('click', event => {
  if(event.target.closest('dialog')) return;
  if(!event.target.closest('.nav-dropdown')) setSolutionsMenu(false);
  if(!event.target.closest('.nav-inner')) closeMenu();
});
window.matchMedia('(min-width:981px)').addEventListener('change',closeMenu);
document.getElementById('year').textContent = new Date().getFullYear();
