# Verificação — 03/11/2026

Verificação no navegador integrado, usando a prévia HTTP local.

| Verificação | Resultado |
| --- | --- |
| Layout em larguras de 320, 390, 768 e 1440 px | Sem rolagem horizontal do documento |
| Imagens, logo e fonte locais | Carregados; logo do rodapé também verificado após rolagem |
| Menu do celular | Abre, navega, fecha e retorna o foco ao botão com Escape |
| Categorias | 6 soluções pessoais, 4 empresariais, 2 de planejamento |
| Teclado nas abas | Home seleciona a primeira categoria e atualiza os produtos |
| Detalhes de produto | Conteúdo, condições e cotação contextual funcionando |
| Produto na cotação | Seguro empresarial pré-selecionado a partir do detalhe |
| Formulário vazio | Validação impede continuação sem nome |
| Formulário válido | Abre o perfil da DuoMais no WhatsApp com nome e seguro de teste na mensagem |
| Envio de mensagens | Nenhuma mensagem foi enviada durante os testes |
| Fechar diálogos com Escape | Diálogo fecha e devolve o foco ao botão de origem |
| FAQ | Expansão e leitura do conteúdo verificadas |
| Privacidade | Diálogo abre e fecha corretamente |
| Console | Nenhum erro ou aviso de JavaScript observado na versão final |
| Sintaxe | `node --check dist/app.js` e `node --check server.mjs` passaram |
| Integridade estática | 60 IDs únicos; âncoras, referências acessíveis, símbolos SVG e arquivos locais válidos |

Foto de abertura otimizada de 2.656.629 bytes (PNG original) para 335.033 bytes (JPEG), redução de aproximadamente 87,4%.

Capturas em `qa/desktop.jpg`, `qa/desktop-full.jpg` e `qa/mobile.jpg`. O navegador foi devolvido ao tamanho padrão após os testes.

Não foi realizada publicação no domínio ou auditoria formal de acessibilidade. A prévia por HTTP foi verificada; navegação direta a arquivo local não é permitida pelo navegador integrado. Links de mapa são pesquisas textuais. O endereço ambíguo de São Pedro foi preservado conforme informado.
