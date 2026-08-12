# Design Sites

## Como rodar localmente

1. Instale o [Node.js](https://nodejs.org) se ainda não tiver.
2. Extraia esta pasta em qualquer lugar do seu computador.
3. Abra um terminal dentro da pasta `design-sites` e rode:

   ```bash
   npm install
   npm run dev
   ```

4. Abra o link que aparecer no terminal (geralmente `http://localhost:5173`).

## Como publicar

1. Crie um repositório no [GitHub](https://github.com) e envie esta pasta para lá:

   ```bash
   git init
   git add .
   git commit -m "primeiro commit"
   git branch -M main
   git remote add origin <URL_DO_SEU_REPOSITORIO>
   git push -u origin main
   ```

2. Crie uma conta gratuita na [Vercel](https://vercel.com), conecte com seu GitHub, selecione este repositório e clique em Deploy.
