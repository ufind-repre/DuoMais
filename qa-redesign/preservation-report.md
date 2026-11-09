# Relatório de preservação do redesign

Resultado: **PASS** na preservação de conteúdo. Comparação com `qa-redesign/baseline.json`.

O HTML e o JavaScript ativos mantêm exatamente os mesmos bytes do baseline. A alteração ativa está concentrada em `styles.css`.

| Verificação | Resultado |
| --- | --- |
| HTML integral (SHA-256) | PASS |
| JavaScript integral (SHA-256) | PASS |
| Texto normalizado de index.html | PASS |
| Segmentos de texto (183) | PASS |
| Links relevantes (31) | PASS |
| Referências de imagens (3) | PASS |
| Recursos do head (4) | PASS |
| Arquivos e hashes de assets (5) | PASS |
| Dados solutions (11 soluções; categorias 5/4/2) | PASS |
| Dados optionNames | PASS |
| Dados categoryNames | PASS |
| Cores-base (8 variáveis) | PASS |

## Evidências de integridade

- `index.html`: `ea01fbd2f92e8c8779f4950f63c2718cf348c233c2e4a1b941533099602f12a9`
- `app.js`: `fcec4d3a6b2669f63ac9273ceb78ed3607e8ad69f7c3fcdf7b248d9a74569a97`
- `styles.css` atual: `90f872330fb8bc98f0c06f74564c0c6d23f6c00cca4e29927edadc52ce823c76` (alteração visual esperada)

| Asset | SHA-256 |
| --- | --- |
| `assets/familia-duomais.jpg` | `76b679586a953e9843c528838ea1bc65c7b23e8bbce0f29ec7d946c7eef64f89` |
| `assets/favicon.svg` | `b88966d75e147238128f863ade24ebccee5ed06163ccf07fde515d508923c386` |
| `assets/FONT-LICENSE.txt` | `58172e0c0fac2cda8a37b348164bb55e44b0e69051e557e92b1d3f6910141f7b` |
| `assets/logo-original.jpg` | `0775cf41d55f35bc126693e24015c7c4d606f82ce268c165b89629401dd53f9b` |
| `assets/manrope.ttf` | `3ae11c49db0455a3cc33e37d380f20fdb8c7f8b41dc07625c177e3d87a9d6ae6` |

## Revisão estática de CSS e interações

- Menu mobile: `@media(max-width:760px)` oculta a navegação por padrão e `.header nav.is-open` volta a exibi-la; combina com o fechamento por JS em `min-width:761px`.
- Diálogos: somente `.quote-modal[open]` recebe `display:grid`; o estado fechado nativo continua preservado. Todos têm limite em `100dvh`, `overflow:auto` e versão de coluna única no mobile.
- Os controles de fechamento mantêm posicionamento e camada própria; o backdrop, bloqueio de rolagem e retorno de foco continuam atendidos pelo JS intacto.
- Abas preservam estados `aria-selected`, painel e teclado. As colunas 5/4/2 passam para uma coluna até 480 px.
- Cotação contextual, validação do formulário, montagem da mensagem, WhatsApp principal, FAQ e privacidade permanecem no JS/HTML intactos.
- Chaves CSS balanceadas; arquivos locais, fonte, âncoras e símbolos referenciados presentes. Nenhuma regressão funcional estática encontrada.
- Foco dos botões do cabeçalho: regra específica em amarelo presente.

A inspeção visual e a execução das interações no navegador ficam a cargo do agente principal. Esta revisão não abriu navegador nem alterou arquivos ativos.
