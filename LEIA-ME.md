# Simulador Tera Mix — como publicar e atualizar

## O que é cada arquivo

| Arquivo | Para que serve |
|---|---|
| `index.html` | O simulador inteiro. Cálculo, textos, identidade visual e logotipo estão todos aqui dentro. |
| `manifest.webmanifest` | Diz ao celular o nome, o ícone e a cor do aplicativo quando ele é adicionado à tela de início. |
| `sw.js` | Faz o aplicativo funcionar sem internet e distribui as atualizações. |
| `icon-*.png`, `apple-touch-icon.png`, `favicon.png` | Ícones do aplicativo, gerados a partir do símbolo da marca. |

Nenhum arquivo depende de servidor, banco de dados ou login.

## Publicar no GitHub Pages

1. Crie um repositório novo chamado `simulador-teramix`. Deixe **público** — o GitHub Pages só funciona em repositório privado com plano pago.
2. Envie **todos os arquivos desta pasta** para a raiz do repositório. Não crie subpasta.
3. No repositório, vá em **Settings → Pages**.
4. Em *Source*, escolha **Deploy from a branch**; em *Branch*, escolha `main` e a pasta `/ (root)`. Salve.
5. Aguarde um ou dois minutos. O endereço aparece na própria tela de Pages, no formato
   `https://SEU-USUARIO.github.io/simulador-teramix/`

Esse é o link que vai para a equipe.

### Opcional: usar o domínio da Tera

Para o endereço ficar `simulador.teranv.com.br`:

1. Peça para a TI criar um registro **CNAME** de `simulador` apontando para `SEU-USUARIO.github.io`.
2. No repositório, em **Settings → Pages → Custom domain**, escreva `simulador.teranv.com.br` e salve.
3. Marque **Enforce HTTPS** assim que a opção ficar disponível.

Não é preciso mexer no site institucional. É só um registro de DNS.

## Instalar no celular do vendedor

**Android (Chrome)** — abrir o link, tocar nos três pontinhos, escolher *Instalar aplicativo* ou *Adicionar à tela inicial*.

**iPhone (Safari)** — abrir o link **no Safari**, tocar no botão de compartilhar e escolher *Adicionar à Tela de Início*. Não funciona pelo Chrome nem pelo navegador de dentro do WhatsApp.

Depois disso o ícone fica na tela do celular e o aplicativo abre sem internet.

## Atualizar

1. Troque o que precisar no `index.html`.
2. Abra o `sw.js` e mude o número da versão na primeira linha: `var VERSAO = "teramix-v2";`
3. Envie os dois arquivos para o repositório.

**O passo 2 é obrigatório.** Sem trocar o número, os celulares continuam mostrando a versão antiga. Com ele, cada vendedor recebe a atualização sozinho na próxima vez que abrir o aplicativo com sinal.

## Onde ficam os números da empresa

No `index.html`, procure por `CONFIGURAÇÃO DA EMPRESA`. Logo abaixo estão, em um bloco só:

- `reajuste` — o percentual aplicado sobre o preço do Tera Base
- `base` e `mix` — teores de N, P₂O₅, K₂O e matéria seca
- `humicas` e `zinco` — teores por tonelada
- `minerais` — a lista de fertilizantes que aparece para o vendedor escolher
- `fontes` — MAP, KCl e ureia, com preços apenas de partida (o vendedor substitui pela cotação do dia)
- `referencia` — o mês que aparece no rodapé

Mudou laudo ou política de preço? É aqui, e só aqui.
