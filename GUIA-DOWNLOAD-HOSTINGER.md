# 🚀 GUIA RÁPIDO - DOWNLOAD E UPLOAD NA HOSTINGER

## ⚡ OPÇÃO MAIS FÁCIL - DOWNLOAD DIRETO

### 📥 PASSO 1: BAIXAR ARQUIVOS DO GITHUB

**Use estes links diretos:**

1. **Baixar o projeto completo:**
   - Acesse: https://github.com/EdsonGabriel43/Memoria-Claude
   - Clique no botão verde **"Code"**
   - Clique em **"Download ZIP"**
   - Salve o arquivo no seu computador

2. **Extrair os arquivos:**
   - Clique com botão direito no arquivo ZIP baixado
   - Escolha "Extrair aqui" ou "Extract here"
   - Uma pasta será criada

3. **Encontrar os arquivos corretos:**
   - Abra a pasta extraída
   - Procure pela pasta **`dist/`**
   - Dentro dela você verá:
     ```
     dist/
     ├── index.html
     └── assets/
         └── index-DLg-k-ZH.js
     ```

---

## 📤 PASSO 2: SUBIR NA HOSTINGER

### No painel da Hostinger:

1. **Login:**
   - Acesse: https://hpanel.hostinger.com/
   - Faça login

2. **Abrir Gerenciador de Arquivos:**
   - No painel, procure por **"File Manager"** ou **"Gerenciador de Arquivos"**
   - Clique para abrir

3. **Ir para public_html:**
   - No gerenciador, navegue até a pasta **`public_html/`**
   - Esta é a raiz do seu site

4. **Upload dos arquivos:**
   - Clique no botão **"Upload"** (geralmente no topo)
   - Selecione **TODOS** os arquivos de dentro da pasta `dist/`:
     - O arquivo `index.html`
     - A pasta `assets/` completa
   - Aguarde o upload completar

5. **Verificar:**
   - Sua estrutura deve ficar assim:
     ```
     public_html/
     ├── index.html
     └── assets/
         └── index-DLg-k-ZH.js
     ```

---

## ✅ PASSO 3: TESTAR

Abra seu navegador e acesse:
- `https://seudominio.com`
- Ou `https://seudominio.hostinger.com`

**Pronto! Sua landing page deve estar no ar!** 🎉

---

## 🆘 AINDA COM DÚVIDAS?

### Se o download não funcionar:

**Alternativa 1: Clonar o repositório**
- Se você tem o Git instalado:
  ```bash
  git clone https://github.com/EdsonGabriel43/Memoria-Claude.git
  cd Memoria-Claude
  git checkout claude/analyze-invoice-portal-files-011CV4Z633b26XrAQ7JtHcRH
  ```
- Os arquivos estarão na pasta `dist/`

**Alternativa 2: Me envie seu email**
- Posso te enviar os arquivos diretamente por email

**Alternativa 3: Use o GitHub Desktop**
- Baixe: https://desktop.github.com/
- Clone o repositório usando a interface gráfica

---

## 📞 CONTATOS DE SUPORTE

**Suporte Hostinger:**
- Chat ao vivo no painel
- Ou acesse: https://www.hostinger.com.br/contato

**Dúvidas sobre os arquivos:**
- Verifique se baixou a pasta `dist/` completa
- Verifique se ambos os arquivos (index.html e pasta assets) estão presentes

---

## ⚠️ CHECKLIST FINAL

Antes de testar, verifique:

- [ ] Baixou o projeto do GitHub
- [ ] Extraiu o arquivo ZIP
- [ ] Encontrou a pasta `dist/`
- [ ] Fez upload do `index.html`
- [ ] Fez upload da pasta `assets/` completa
- [ ] Os arquivos estão em `public_html/` (não em subpastas)
- [ ] Acessou o domínio no navegador

Se todos os itens estão marcados, deve funcionar! ✅
