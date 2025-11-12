# 📦 COMO SUBIR A LANDING PAGE NA HOSTINGER

## ✅ PASSO 1: BAIXAR OS ARQUIVOS

Você tem **2 opções**:

### Opção A: Baixar o ZIP pronto (MAIS FÁCIL)
📁 **Arquivo:** `landing-page-hostinger.zip` (50KB)
- Este arquivo já está pronto com tudo dentro!

### Opção B: Baixar a pasta dist/ completa
📁 **Pasta:** `dist/`
- Contém:
  - `index.html` (arquivo principal)
  - `assets/index-DLg-k-ZH.js` (código React compilado)

---

## ✅ PASSO 2: ACESSAR O PAINEL DA HOSTINGER

1. Entre no painel da Hostinger: https://www.hostinger.com.br/
2. Vá em **"Hospedagem"**
3. Clique no seu domínio/site
4. Abra o **"Gerenciador de Arquivos"** (File Manager)

---

## ✅ PASSO 3: FAZER UPLOAD

### Se você baixou o ZIP:
1. No Gerenciador de Arquivos, vá para a pasta `public_html/`
2. Clique em **"Upload"**
3. Selecione o arquivo `landing-page-hostinger.zip`
4. Após o upload, clique com o botão direito no arquivo ZIP
5. Escolha **"Extrair"** ou **"Extract"**
6. Pronto! Os arquivos serão descompactados

### Se você baixou a pasta dist/:
1. No Gerenciador de Arquivos, vá para a pasta `public_html/`
2. Clique em **"Upload"**
3. Arraste TODOS os arquivos de dentro da pasta `dist/`:
   - `index.html`
   - A pasta `assets/` completa (com o arquivo JS dentro)
4. Pronto!

---

## ✅ PASSO 4: VERIFICAR

Acesse seu domínio no navegador:
- Exemplo: `https://seudominio.com`
- Ou: `https://seudominio.hostinger.com`

Você deverá ver a landing page funcionando! 🎉

---

## 📂 ESTRUTURA FINAL NA HOSTINGER

```
public_html/
├── index.html          ← Página principal
└── assets/
    └── index-DLg-k-ZH.js  ← Código React/JavaScript
```

---

## ⚠️ IMPORTANTE

- Certifique-se de que os arquivos estão DENTRO de `public_html/`
- NÃO crie subpastas desnecessárias
- Os arquivos devem ficar direto em `public_html/` assim:
  ```
  public_html/index.html
  public_html/assets/index-DLg-k-ZH.js
  ```

---

## 🆘 PROBLEMAS COMUNS

**Página não carrega?**
- Verifique se o `index.html` está em `public_html/`
- Verifique se a pasta `assets/` está junto

**Erro 404?**
- Limpe o cache do navegador (Ctrl + Shift + Del)
- Aguarde 5-10 minutos para propagação DNS

**Vídeo não aparece?**
- Verifique sua conexão com internet
- O vídeo vem do YouTube, precisa de internet funcionando

---

## ✅ PRONTO!

Sua landing page deve estar no ar! 🚀

**Precisa de ajuda?** Entre em contato com o suporte da Hostinger.
