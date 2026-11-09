import {readFile,writeFile} from 'node:fs/promises';
const target = new URL('../index.html', import.meta.url);
let html = await readFile(target,'utf8');
if(html.includes('data-slide="0"')) throw new Error('Estrutura nova já aplicada.');
const topbar = html.match(/  <div class="topbar">.*<\/div>\r?\n/)?.[0];
const heroBottom = html.match(/      <div class="container hero-bottom">.*<\/div>/)?.[0];
const aboutArt = html.match(/        <div class="about-art">.*<\/div>/)?.[0];
const aboutLine = html.match(/        <div class="about-copy">.*<\/div>/)?.[0];
if(!topbar || !heroBottom || !aboutArt || !aboutLine) throw new Error('Blocos originais não encontrados.');
const valuesStart = aboutLine.indexOf('<div class="about-values">');
const valuesEnd = aboutLine.indexOf('<a class="text-link"',valuesStart);
const values = aboutLine.slice(valuesStart,valuesEnd);
const quickValues = [...values.matchAll(/<div><svg[\s\S]*?<\/svg><span><strong>(.*?)<\/strong>(.*?)<\/span><\/div>/g)];
if(quickValues.length !== 3) throw new Error('Valores institucionais incompletos.');
const quickCards = quickValues.map(([_,title,description],index) => `<a class="quick-card" href="${index===2?'#como-funciona':'#sobre'}"><h3>${title}</h3><p>${description}</p></a>`).join('\n');
const quoteButton = '<button class="button button-yellow" data-quote>Quero proteger o que importa <svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></button>';
const aboutCopy = aboutLine.slice(0,valuesStart) + '<div class="about-actions">' + quoteButton + aboutLine.slice(valuesEnd).replace(/<\/div>\s*$/,'</div></div>');
const aboutTitle = aboutCopy.match(/<h2 id="about-title">.*?<\/h2>/)?.[0];
const aboutEyebrow = aboutCopy.match(/<p class="eyebrow">.*?<\/p>/)?.[0];
if(!aboutTitle || !aboutEyebrow) throw new Error('Título institucional não encontrado.');
const trimmedAboutCopy = aboutCopy.replace(aboutTitle,'').replace(aboutEyebrow,'');

html = html.replace(topbar,'');
html = html.replace(/  <header class="header">[\s\S]*?  <\/header>/, `  <header class="header">
    <div class="container nav-inner">
      <a class="brand brand-navy" href="#inicio" aria-label="DUÓ Seguros, DuoMais — início"><span class="brand-crop"><img src="assets/logo-navy-original.jpg" alt="DUÓ Seguros" width="1600" height="900"></span></a>
      <nav id="navigation" aria-label="Navegação principal">
        <div class="nav-dropdown">
          <a href="#solucoes" id="solutions-menu-toggle" aria-expanded="false" aria-controls="solutions-menu">Nossas soluções</a>
          <div id="solutions-menu" class="solutions-menu" hidden>
            <div class="menu-categories" aria-label="Categorias de soluções">
              <button data-nav-category="voce" aria-pressed="true">Para você</button>
              <button data-nav-category="empresa" aria-pressed="false">Para sua empresa</button>
              <button data-nav-category="planos" aria-pressed="false">Para seus planos</button>
            </div>
            <div id="menu-products" class="menu-products"></div>
          </div>
        </div>
        <a href="#sobre">A DuoMais</a>
        <a href="#como-funciona">Como funciona</a>
        <a href="#contato">Contato</a>
        <button class="header-cta" data-quote>Faça uma cotação</button>
      </nav>
      <button class="menu-toggle" aria-label="Abrir menu" aria-controls="navigation" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </header>`);

html = html.replace(/    <section class="hero"[\s\S]*?    <\/section>/, `    <section class="hero" id="inicio" aria-label="Destaques da DuoMais">
      <div class="container hero-grid">
        <div class="hero-slides" aria-live="polite">
          <div class="hero-slide" data-slide="0">
            <h1 id="hero-title">Mais cuidado<br>com o que<br>importa.</h1>
            <p class="hero-description">Sua família, suas conquistas, seus próximos planos.<br class="desktop-break"> A gente ajuda você a proteger cada um deles.</p>
            <ul class="hero-features">
              <li><svg class="icon" aria-hidden="true"><use href="#i-check-circle"/></svg><span>Atendimento de verdade</span></li>
              <li><svg class="icon" aria-hidden="true"><use href="#i-check-circle"/></svg><span>Escolhas mais simples</span></li>
              <li><svg class="icon" aria-hidden="true"><use href="#i-check-circle"/></svg><span>Proteção para acompanhar sua vida.</span></li>
            </ul>
            <div class="hero-actions"><a class="button button-yellow" href="#solucoes">Conheça os seguros <svg class="icon" aria-hidden="true"><use href="#i-chevron"/></svg></a></div>
          </div>
          <div class="hero-slide" data-slide="1" hidden></div>
          <div class="hero-slide" data-slide="2" hidden></div>
        </div>
        <div class="hero-panels" role="group" aria-label="Escolha um destaque">
          <button class="hero-panel is-active" data-hero-panel="0" aria-label="Mostrar proteção para sua vida" aria-pressed="true"><img src="assets/familia-duomais.jpg" alt="Família aproveitando um momento de carinho no jardim de casa" width="1536" height="1024" fetchpriority="high"><span>Você vive. A gente cuida.</span></button>
          <button class="hero-panel" data-hero-panel="1" aria-label="Mostrar Seguro auto" aria-pressed="false"><svg class="panel-photo" viewBox="30 100 650 410" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><image href="assets/produto-auto.jpg" width="1080" height="1080"/></svg><span>Auto</span></button>
          <button class="hero-panel" data-hero-panel="2" aria-label="Mostrar Seguro residencial" aria-pressed="false"><svg class="panel-photo" viewBox="0 345 1600 555" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><image href="assets/produto-residencial.jpg" width="1600" height="900"/></svg><span>Residencial</span></button>
        </div>
      </div>
      <div class="hero-controls carousel-controls" aria-label="Navegação dos destaques">
        <button id="hero-prev" aria-label="Destaque anterior"><svg class="icon" aria-hidden="true"><use href="#i-chevron"/></svg></button>
        <button id="hero-next" aria-label="Próximo destaque"><svg class="icon" aria-hidden="true"><use href="#i-chevron"/></svg></button>
        <span id="hero-status" class="sr-only" aria-live="polite">1 / 3</span>
      </div>
    </section>

    <section class="quick-section" aria-label="O cuidado da DuoMais"><div class="container quick-grid">${quickCards}</div></section>`);

const tabs = html.match(/<div class="tabs" role="tablist".*?<\/div>/)?.[0];
const help = html.match(/        <div class="solution-help">.*<\/div>/)?.[0];
if(!tabs || !help) throw new Error('Navegação de produtos incompleta.');
html = html.replace(/    <section class="solutions section"[\s\S]*?    <\/section>/, `    <section class="solutions section" id="solucoes" aria-labelledby="solutions-title">
      <div class="container">
        <div class="section-heading"><h2 id="solutions-title">Para cada plano, uma boa proteção.</h2>${tabs}</div>
        <p class="section-description">Cada pessoa tem uma história. Encontre soluções que fazem sentido para o seu momento.</p>
        <div class="product-grid" id="product-grid" role="tabpanel" aria-labelledby="tab-voce" tabindex="0"></div>
        <div class="product-controls carousel-controls" id="product-controls" aria-label="Navegação das soluções"><button id="product-prev" aria-label="Soluções anteriores"><svg class="icon" aria-hidden="true"><use href="#i-chevron"/></svg></button><button id="product-next" aria-label="Próximas soluções"><svg class="icon" aria-hidden="true"><use href="#i-chevron"/></svg></button></div>
        <div class="solution-meta"><p class="eyebrow">PROTEÇÃO DO SEU JEITO</p><span class="toolbar-hint"><span class="tiny-dot"></span> Orientação em cada escolha</span></div>
        ${help.trim()}
      </div>
    </section>`);

html = html.replace(/    <section class="about section"[\s\S]*?    <\/section>/, `    <section class="about section" id="sobre" aria-labelledby="about-title">
      <div class="container about-panel">
        <div class="about-heading">${aboutEyebrow}${aboutTitle}</div>
        <div class="about-grid">${trimmedAboutCopy.trim()}${aboutArt.trim()}</div>
      </div>
    </section>`);

// Relocate the existing supporting copy, rather than remove it for a cleaner hero.
html = html.replace('<footer class="footer">', '<footer class="footer">' + topbar.trim());
html = html.replace('<p>Mais cuidado com o que importa.<br>Mais tranquilidade para viver.</p>', '<p class="eyebrow footer-company">DUOMAIS CORRETORA DE SEGUROS</p><p>Mais cuidado com o que importa.<br>Mais tranquilidade para viver.</p><p class="photo-label"><span></span> MAIS TRANQUILIDADE PARA SEGUIR EM FRENTE</p>');
html = html.replace('<div class="footer-bottom">', heroBottom.trim().replace('container hero-bottom','hero-bottom') + '<div class="footer-bottom">');
html = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/g,(_,attributes,text)=>`<h2${attributes}>${text.replace(/<br\s*\/?>/g,' ')}</h2>`);
html = html.replace('<defs>','<defs><symbol id="i-chevron" viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></symbol>');
await writeFile(target,html,'utf8');
console.log('HTML reestruturado; textos e diálogos originais preservados.');
