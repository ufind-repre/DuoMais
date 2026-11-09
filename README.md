# DuoMais — institucional

Estrutura refeita a partir do [site da EZZE Seguros](https://ezzeseguros.com.br/): cabeçalho de 80 px, menu com categorias, abertura com títulos de 50 px e três painéis fotográficos, controles de destaque, faixa com três atalhos, carrossel de seguros com fotos e seção institucional em um painel amplo.

Os textos, links, contatos, endereços, imagem, logo e cores-base da DuoMais foram preservados. Permanecem 11 soluções, distribuídas em 5 pessoais, 4 empresariais e 2 de planejamento. Seguro pet continua removido.

## Publicar

Envie `index.html`, `styles.css`, `app.js` e a pasta `assets/` para a raiz da hospedagem. O pacote atualizado é `DuoMais-institucional-v2.zip`, com os caminhos prontos para publicação. Não há instalação de dependências nem etapa de build.

O domínio não foi alterado nesta sessão; a entrega é dos arquivos locais prontos para hospedagem.

## Prévia local

Com Node.js instalado, execute a partir da raiz do projeto:

```powershell
node qa-redesign/preview.mjs
```

Abra `http://127.0.0.1:4173/`. O servidor usa apenas o endereço local. A pasta `qa-redesign` é material de verificação e não precisa ser publicada. `testes/` contém os materiais da versão anterior.

## Verificação em 09/11/2026

- Conteúdo comparado sem exigir a ordem anterior: textos, 31 links originais, dados das 11 soluções e oito cores-base preservados. Os cinco assets originais mantêm os mesmos hashes.
- Layout verificado em larguras de 320, 390, 768, 981 e 1440 px, sem rolagem horizontal do documento.
- Destaques anterior/próximo, painéis de foto, carrossel horizontal, dropdown por categoria, menu móvel, detalhes, cotação, fechamento por Escape, FAQ e privacidade verificados no navegador.
- Seguro empresarial e Previdência privada pré-selecionados corretamente na cotação a partir do menu. Nenhuma mensagem foi enviada durante a revisão.
- Nenhum erro ou aviso de JavaScript observado. Fonte Manrope e todos os recursos visuais são locais.

O relatório de preservação está em `qa-fidelity/preservation-report.md`. As capturas desta versão estão em `qa-fidelity/desktop.jpg`, `qa-fidelity/seguros.jpg`, `qa-fidelity/desktop-full.jpg` e `qa-fidelity/mobile.jpg`.

As fotos adicionais e a variante do logo em fundo navy vieram dos ZIPs fornecidos pelo usuário. Os arquivos foram copiados sem edição; os enquadramentos são feitos em CSS ou SVG. A foto da família continua no site. A imagem de ambiente residencial é um mockup ilustrativo; o ambiente comercial é uma imagem de evento Porto, usada no contexto de produto, sem apresentá-la como escritório da DuoMais. Não foram copiadas fotos, textos ou marcas da EZZE.
