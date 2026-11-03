# DuoMais Seguros

Novo site institucional responsivo, com a identidade amarela e azul-marinho dos materiais enviados. Implementado em HTML, CSS e JavaScript, com fonte e imagens locais, sem instalação de dependências ou etapa de build.

## Abrir

É possível abrir `site/dist/index.html` diretamente no navegador. Para usar a prévia HTTP, com Node.js instalado:

```powershell
cd site
npm run dev
```

Acesse `http://127.0.0.1:4173`. `npm run check` verifica a sintaxe dos scripts.

## O que foi desenvolvido

- Apresentação institucional, história, diferenciais, processo de atendimento e FAQ.
- Catálogo com 12 soluções em três categorias; detalhes e cotação contextual.
- Formulário que prepara uma mensagem para o WhatsApp principal. O visitante confirma o envio dentro do WhatsApp; o site não envia mensagens automaticamente nem armazena dados.
- Três endereços com links para pesquisa no Google Maps, telefones, e-mail e Instagram.
- Menu responsivo, abas acessíveis por teclado, diálogos nativos, foco visível, link para pular navegação e respeito à preferência por movimento reduzido.
- Fonte Manrope hospedada localmente, licença OFL incluída, foto ilustrativa otimizada, metadados básicos e favicon.

## Publicação

Todo o conteúdo de `site/dist/` está pronto para hospedagem estática, inclusive em hospedagem tradicional com `public_html`. Copie o **conteúdo da pasta**, preservando `assets/`, `styles.css` e `app.js` junto a `index.html`. Não é necessário publicar `server.mjs`, fontes de referência ou os arquivos de QA.

O domínio `duomais.com` não foi alterado. A sessão não disponibilizou ferramentas nativas de publicação do Sites nem acesso à hospedagem atual. Não foi criado projeto hospedado ou credencial.

O endereço de São Pedro foi mantido como informado: “Avenida das Tulipas, lote Quadra 61 — Alpes das Águas”. O número do lote não foi presumido. O link de mapas faz uma busca textual, sem alegar geolocalização exata. CNPJ e registro da corretora não foram inventados.

## Conteúdo e referências

Dados de contato e localização: mensagem do usuário, com prioridade sobre o site antigo. WhatsApp principal: `+55 11 99992-8556`; secundário: `+55 11 98797-2729`; e-mail: `emerson.duo@duomais.com`.

Marca visual: logo DUÓ Seguros dos ZIPs, preservado em `site/dist/assets/logo-original.jpg` e enquadrado com CSS. Paleta: `#FECE00`, `#223778`, `#0B1940`.

História e áreas de atuação foram consultadas em [DuoMais — quem somos](https://duomais.com/quem-somos.html) e [produtos do site anterior](https://duomais.com/produtosCorretor.html), além dos materiais fornecidos. O fato “Emerson Edgar Duó, corretor de seguros desde 2000” é informado na página institucional antiga. Não foram utilizados depoimentos, avaliações, números de clientes ou certificações fictícias.

Fonte: [Manrope no repositório oficial Google Fonts](https://github.com/google/fonts/tree/main/ofl/manrope). A licença está em `site/dist/assets/FONT-LICENSE.txt`.

## Imagem ilustrativa

Gerada com a ferramenta integrada de geração de imagens, no modo padrão. Arquivo usado no site: `site/dist/assets/familia-duomais.jpg`. Original preservado em `site/source-assets/familia-original.png`. A família é ilustrativa, sem apresentação como cliente ou equipe da corretora. As fotografias do evento Porto enviadas pelo usuário não foram apresentadas como escritórios da DuoMais.

Prompt final:

> Use case: photorealistic-natural. Asset type: large lifestyle hero photograph for Brazilian insurance brokerage website. Primary request: a warm authentic moment of a Brazilian family, a mother and father in their 30s with their young daughter around 7, relaxing together outside their contemporary welcoming home, a subtle parked car behind on the left. They are smiling naturally and engaging with each other, not posing at the camera. Medium-wide editorial photograph, landscape 3:2 composition, subjects centered and visible from waist up, sunlit garden and white modern house with pale walls behind, green foliage. Clothing in off-white linen, light blue, one small soft yellow accent. Premium understated magazine photography, realistic skin, real textures, late afternoon natural light, tranquil candid mood. The family are illustrative models, not employees. No text, no logos, no watermarks, no rendered UI, no insurance iconography, no excessive props.
