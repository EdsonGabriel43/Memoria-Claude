# ✅ CHECKLIST - Cole na parede!

Marque cada item conforme fizer:

---

## 🔑 1. Chaves de API

### Google Gemini
- [ ] Acessei: https://aistudio.google.com/app/apikey
- [ ] Cliquei em "Create API Key"
- [ ] Copiei a chave (AIzaSy...)
- [ ] Colei no bloco de notas

### OpenAI
- [ ] Acessei: https://platform.openai.com/api-keys
- [ ] Criei conta e adicionei créditos ($5)
- [ ] Criei "Create new secret key"
- [ ] Copiei a chave (sk-...)
- [ ] Colei no bloco de notas

---

## 🗄️ 2. Criar Armazém (Store)

- [ ] Abri o terminal
- [ ] Naveguei para a pasta: `cd /home/user/Memoria-Claude/n8n-workflows`
- [ ] Executei: `./create-gemini-store.sh`
- [ ] Colei minha chave do Google
- [ ] Copiei o GEMINI_STORE_NAME
- [ ] Colei no bloco de notas

---

## ⚙️ 3. Configurar n8n

- [ ] Encontrei o arquivo: `~/.n8n/.env`
- [ ] Abri para editar: `nano ~/.n8n/.env`
- [ ] Colei as linhas:
  ```
  GEMINI_API_KEY=...
  GEMINI_STORE_NAME=fileSearchStores/...
  ```
- [ ] Salvei (Ctrl+O, Enter, Ctrl+X)
- [ ] Reiniciei o n8n: `pm2 restart n8n`

---

## 📥 4. Importar Workflow

- [ ] Abri o n8n: http://localhost:5678
- [ ] Cliquei em "+ Add Workflow"
- [ ] Cliquei nos 3 pontinhos (⋮)
- [ ] "Import from File"
- [ ] Selecionei: `gemini-file-search-rag-fixed.json`
- [ ] Workflow apareceu na tela

---

## 🔐 5. Configurar OpenAI

- [ ] No n8n: Settings → Credentials
- [ ] "+ Add Credential"
- [ ] Busquei: "OpenAI"
- [ ] Colei minha chave (sk-...)
- [ ] Salvei
- [ ] No workflow, cliquei em "OpenAI Chat Model"
- [ ] Selecionei a credencial
- [ ] Salvei

---

## ✅ 6. Ativar e Testar

- [ ] Cliquei em "Inactive" → virou "Active" (verde)
- [ ] Cliquei em "File Upload Form"
- [ ] Copiei a Production URL
- [ ] Abri em nova aba
- [ ] Fiz upload de um PDF/TXT
- [ ] Vi: "File uploaded successfully!" ✅
- [ ] Cliquei em "When chat message received"
- [ ] Copiei a Chat URL
- [ ] Abri em nova aba
- [ ] Fiz uma pergunta
- [ ] Recebi resposta! 🎉

---

## 🎉 PRONTO!

Se marcou tudo, está funcionando!

---

## ⚠️ Problemas Comuns

| Erro | Solução Rápida |
|------|----------------|
| GEMINI_API_KEY undefined | Reinicie o n8n após editar .env |
| API key not valid | Copie novamente do Google, sem espaços |
| Store not found | Verifique formato: fileSearchStores/xxxxx |
| Upload não funciona | Use PDF/TXT, máx 10MB |
| Chat não responde | Aguarde 20 seg após upload |

---

**Travou em algum passo? Me diga qual!**
