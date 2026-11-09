# DuoMais — institucional v3

Estrutura refeita a partir do [site da EZZE Seguros](https://ezzeseguros.com.br/), com menu por categorias, abertura com títulos de 50 px e três painéis fotográficos, faixa com três atalhos, carrossel de seguros com fotos e seção institucional em um painel amplo.

Nesta versão, a tarja azul de 35 px volta ao topo e o cabeçalho tem fundo branco, com botão amarelo de cotação visível também no celular. A altura do cabeçalho é de 92 px no desktop, 80 px em telas de até 980 px e 74 px em telas de até 760 px.

O hero alterna os destaques a cada 6,5 segundos, com expansão suave dos painéis em 0,9 s e transições de opacidade e deslocamento em 0,65 s e 0,8 s. Os controles permitem avançar, voltar e pausar ou reproduzir. A reprodução pausa durante hover, foco interativo, exibição de um diálogo, aba oculta ou quando o hero fica fora da tela. A preferência `prefers-reduced-motion` é respeitada; a navegação manual continua disponível e a reprodução pode ser acionada pelo visitante.

Os textos, links, contatos, endereços, imagem, logo e cores-base da DuoMais foram preservados. Permanecem 11 soluções, distribuídas em 5 pessoais, 4 empresariais e 2 de planejamento. Seguro pet continua removido.

## Publicar

Envie `index.html`, `styles.css`, `app.js` e a pasta `assets/` para a raiz da hospedagem. O pacote desta entrega é `DuoMais-institucional-v3.zip`, com os caminhos prontos para publicação. Não há instalação de dependências nem etapa de build.

O domínio não foi alterado nesta sessão; a entrega é dos arquivos locais prontos para hospedagem.

## Prévia local

Com Node.js instalado, execute a partir da raiz do projeto:

```powershell
node qa-redesign/preview.mjs
```

Abra `http://127.0.0.1:4173/`. O servidor usa apenas o endereço local. A pasta `qa-redesign` é material de verificação e não precisa ser publicada. `testes/` contém os materiais da versão anterior.

## Verificação da v3

- Sintaxe do JavaScript verificada com `node --check app.js` e integridade do diff verificada com `git diff --check`.
- Reprodução automática, pausa e retomada conferidas no navegador: avanço após 6,5 s e slide mantido durante a pausa.
- Layout conferido em 320, 390, 768, aproximadamente 981 e 1440 px, sem rolagem horizontal. Menu móvel, submenu, fechamento por Escape e abertura do formulário de cotação conferidos. Nenhum erro ou aviso no console.
- A altura do hero no celular permaneceu igual na troca entre os destaques, evitando deslocamento do conteúdo.
- Fonte Manrope e recursos visuais permanecem locais. Os textos, contatos, endereços, dados e imagens foram mantidos, com 11 soluções e sem seguro pet.

O relatório de preservação da reestruturação está em `qa-fidelity/preservation-report.md`. As capturas da v3 são `qa-autoplay/desktop.jpg` e `qa-autoplay/mobile.jpg`; os detalhes da verificação estão em `qa-autoplay/verification.md`.

As fotos adicionais e a variante do logo em fundo navy vieram dos ZIPs fornecidos pelo usuário. Os arquivos foram copiados sem edição; os enquadramentos são feitos em CSS ou SVG. A foto da família continua no site. A imagem de ambiente residencial é um mockup ilustrativo; o ambiente comercial é uma imagem de evento Porto, usada no contexto de produto, sem apresentá-la como escritório da DuoMais. Não foram copiadas fotos, textos ou marcas da EZZE.
