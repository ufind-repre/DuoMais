# Relatório de preservação e compatibilidade

Comparação estática da raiz com `qa-fidelity/baseline.json`. Nenhum arquivo ativo foi alterado nesta revisão.

## Preservação

| Verificação | Resultado |
| --- | --- |
| Fragmentos de texto originais, ignorando ordem e índices/decorativos | PASS |
| Hrefs originais como multiset | PASS |
| solutions / optionNames / categoryNames | PASS |
| Hashes dos cinco assets originais | PASS |
| Fontes de imagens originais ainda referenciadas | PASS |
| Oito cores-base | PASS |

Texto: nenhuma remoção real entre os 183 fragmentos do baseline. Quebras e agrupamentos foram normalizados; a ordem não foi exigida.

Links: todas as ocorrências originais preservadas. Novas ocorrências: [{"href":"#sobre","added":2},{"href":"#como-funciona","added":1}].

A família original e o logo branco continuam em uso. O cabeçalho ganhou a variante navy fornecida, e foram acrescentadas fotos de produtos; os arquivos anteriores permanecem intactos.

| Asset original | SHA-256 atual | Resultado |
| --- | --- | --- |
| `assets/familia-duomais.jpg` | `76b679586a953e9843c528838ea1bc65c7b23e8bbce0f29ec7d946c7eef64f89` | PASS |
| `assets/favicon.svg` | `b88966d75e147238128f863ade24ebccee5ed06163ccf07fde515d508923c386` | PASS |
| `assets/FONT-LICENSE.txt` | `58172e0c0fac2cda8a37b348164bb55e44b0e69051e557e92b1d3f6910141f7b` | PASS |
| `assets/logo-original.jpg` | `0775cf41d55f35bc126693e24015c7c4d606f82ce268c165b89629401dd53f9b` | PASS |
| `assets/manrope.ttf` | `3ae11c49db0455a3cc33e37d380f20fdb8c7f8b41dc07625c177e3d87a9d6ae6` | PASS |

## Fotos e recortes SVG

| Uso | Arquivo | Dimensões reais | viewBox | Resultado |
| --- | --- | --- | --- | --- |
| auto | `assets/produto-auto.jpg` | 1080x1080 | `30 100 650 410` | PASS |
| residencial | `assets/produto-residencial.jpg` | 1600x900 | `0 345 1600 555` | PASS |
| vida | `assets/familia-duomais.jpg` | 1536x1024 | `0 0 1536 1024` | PASS |
| saude | `assets/produto-saude.jpg` | 1080x1080 | `120 480 540 410` | PASS |
| portateis | `assets/produto-portateis.jpg` | 1080x1080 | `470 460 550 410` | PASS |
| empresarial | `assets/produto-empresa.jpg` | 1200x1600 | `220 600 900 550` | PASS |
| SVG estático 4 | `assets/produto-auto.jpg` | 1080x1080 | `30 100 650 410` | PASS |
| SVG estático 5 | `assets/produto-residencial.jpg` | 1600x900 | `0 345 1600 555` | PASS |

Todos os 11 produtos têm foto ou alias; nenhum viewBox validado sai dos limites do bitmap. Os recortes são feitos em SVG, sem alteração dos arquivos originais.

## Compatibilidade de markup, CSS e JavaScript

- 70 IDs; duplicidade, âncoras, referências ARIA/for e IDs literais usados no JS verificados.
- Contrato dos três slides e três painéis, controles/status, carrossel e dropdown presentes.
- `[hidden]{display:none!important}` preserva o estado oculto dos slides, dropdown e controles mesmo com regras display flex/grid.
- Fotos e botões textuais usam seletores CSS distintos; a delegação no document alcança card, hero e dropdown.
- Carrossel usa flex com overflow horizontal; passo de rolagem soma largura de card e column-gap; tolerância de 2 px e ResizeObserver atualizam extremos; troca de categoria retorna ao início.
- Breakpoint mobile CSS em 980 px e JavaScript em 981 px coerentes. Menu de soluções abre por hover desktop e clique; fechamento por Escape/fora e restauração de foco preservados.
- Diálogos mantêm display nativo fechado, limite em 100dvh e overflow auto; cotação continua com seleção contextual e WhatsApp principal, sem envio automático.
- Preferência por movimento reduzido respeitada no CSS e no scroll programático; o hero não tem autoplay.
- Chaves do CSS balanceadas. `node --check app.js` executado separadamente.

Erros estruturais/arquivos pendentes: nenhum. As referências à fonte indisponível foram removidas; Manrope original permanece local e íntegra.

Observações de interação: nenhuma regressão concreta identificada pela leitura estática.

Resultado de preservação: **PASS**. Resultado estático geral: **PASS**.

A confirmação visual e a execução real dos controles ficam para o QA do agente principal; esta revisão não usou navegador ou rede.
