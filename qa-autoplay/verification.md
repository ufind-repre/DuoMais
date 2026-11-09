# Verificação da v3

## Escopo

Carrossel de abertura automático e cabeçalho com tarja azul superior e fundo branco. Conteúdo, produtos, cores e arquivos de imagem preservados.

## Conferência no navegador

- Intervalo de 6.500 ms: após reproduzir, o status mudou de `3 / 3` para `1 / 3` durante uma observação de 7,2 s.
- Pausa explícita: status mantido em `3 / 3` durante uma observação de 7 s. Botão alterna entre Pausar e Reproduzir carrossel.
- Painéis permanecem na mesma ordem e expandem com transição de 0,9 s. Textos usam opacidade e deslocamento suaves.
- Slide inativo com `aria-hidden="true"` e `inert`; anúncio automático desativado para não interromper leitores de tela.
- Cabeçalho branco com tarja azul de 35 px. Alturas conferidas: 92 px no desktop, 80 px em 768 px e 74 px no celular.
- Larguras conferidas: 320, 390, 768, aproximadamente 981 e 1440 px. Largura de rolagem igual à largura útil em todos os casos.
- Em 320 px, o logo do cabeçalho foi reduzido para 110 px, mantendo a cotação e o botão do menu dentro da tela.
- Menu e submenu móveis com fundo branco; ambos fecham com Escape. O submenu expandido ficou dentro da altura disponível.
- Botão de cotação do cabeçalho abriu o diálogo correto; Escape fechou o diálogo.
- Hero em 390 px: altura de 838,45 px tanto no destaque inicial quanto no destaque Auto, sem salto vertical na troca.
- Nenhum erro ou aviso capturado no console.

## Verificação de código

- `node --check app.js`: passou.
- `git diff --check`: passou.
- Revisão das condições de pausa: hover, foco interativo, aba oculta, hero fora da tela e diálogo aberto. A preferência de movimento reduzido desativa a reprodução automática inicial e permite ativação explícita.

## Capturas

- `desktop.jpg`: 1440 × 900 px.
- `mobile.jpg`: 390 × 844 px.

As capturas foram feitas com o destaque inicial pausado para documentar a composição. Ao carregar o site, o autoplay inicia por padrão, salvo preferência de movimento reduzido.
