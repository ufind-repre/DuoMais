# DuoMais — institucional

Versão com ornamentação inspirada no [site da EZZE Seguros](https://ezzeseguros.com.br/): navegação escura com chevrons, botões em cápsula, janelas e painéis com cantos amplos, superfícies claras e rodapé azul-marinho.

Os textos, links, contatos, endereços, imagem, logo e cores-base da DuoMais foram preservados. Permanecem 11 soluções, distribuídas em 5 pessoais, 4 empresariais e 2 de planejamento. Seguro pet continua removido.

## Publicar

Envie `index.html`, `styles.css`, `app.js` e a pasta `assets/` para a raiz da hospedagem. O pacote `DuoMais-institucional-redesign.zip` contém exatamente esses arquivos, com os caminhos prontos para publicação. Não há instalação de dependências nem etapa de build.

O domínio não foi alterado nesta sessão; a entrega é dos arquivos locais prontos para hospedagem.

## Prévia local

Com Node.js instalado, execute a partir da raiz do projeto:

```powershell
node qa-redesign/preview.mjs
```

Abra `http://127.0.0.1:4173/`. O servidor usa apenas o endereço local. A pasta `qa-redesign` é material de verificação e não precisa ser publicada. `testes/` contém os materiais da versão anterior.

## Verificação em 09/11/2026

- Comparação automática com a versão anterior: HTML, JavaScript e todos os cinco assets mantêm os mesmos hashes. Os 31 links e as oito cores-base foram preservados.
- Layout verificado em larguras de 320, 390, 768 e 1440 px, sem rolagem horizontal do documento.
- Menu móvel, troca de categorias, teclado nas abas, detalhes de seguro, cotação contextual, fechamento de diálogos, FAQ e privacidade verificados no navegador.
- Cotação de Seguro empresarial pré-selecionada corretamente. O JavaScript do formulário permanece igual ao fluxo de WhatsApp já validado; nenhuma mensagem foi enviada nesta revisão.
- Imagens carregadas e nenhum erro ou aviso de JavaScript observado.

O relatório de preservação está em `qa-redesign/preservation-report.md`. As capturas estão em `qa-redesign/desktop.jpg`, `qa-redesign/desktop-full.jpg` e `qa-redesign/mobile.jpg`.
