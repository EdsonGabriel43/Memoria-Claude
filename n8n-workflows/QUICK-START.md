# ⚡ Quick Start - 5 Minutos para Começar

## 🎯 Objetivo
Configurar o Gemini File Search RAG no n8n em menos de 5 minutos.

---

## ✅ Checklist Rápido

### 1️⃣ Obter Google Gemini API Key (1 min)
```
🔗 https://aistudio.google.com/app/apikey
→ Create API Key
→ Copiar: AIzaSy...
```

### 2️⃣ Criar File Search Store (1 min)
```bash
cd n8n-workflows
./create-gemini-store.sh
# Cole a API key quando solicitado
# Copie o GEMINI_STORE_NAME que aparecer
```

### 3️⃣ Obter OpenAI API Key (1 min)
```
🔗 https://platform.openai.com/api-keys
→ Create new secret key
→ Copiar: sk-...
```

### 4️⃣ Configurar n8n (1 min)
```bash
# Edite o .env do seu n8n
nano ~/.n8n/.env
# ou
nano /caminho/para/seu/n8n/.env

# Adicione:
GEMINI_API_KEY=AIzaSy...
GEMINI_STORE_NAME=fileSearchStores/xxxxx

# Salve (Ctrl+O, Enter, Ctrl+X)
```

### 5️⃣ Reiniciar n8n (30 seg)
```bash
pm2 restart n8n
# ou
systemctl restart n8n
# ou pare e inicie manualmente
```

### 6️⃣ Importar Workflow (30 seg)
```
1. Abra n8n → http://localhost:5678
2. Add Workflow → Import from File
3. Selecione: gemini-file-search-rag-fixed.json
```

### 7️⃣ Configurar OpenAI (30 seg)
```
1. Settings → Credentials → Add Credential
2. Busque: "OpenAI API"
3. Cole a API key (sk-...)
4. Save

5. No workflow, clique em "OpenAI Chat Model"
6. Selecione a credencial criada
7. Save
```

### 8️⃣ Testar! (30 seg)
```
1. Ative o workflow (botão Active)
2. Clique em "File Upload Form"
3. Copie a "Production URL"
4. Abra no navegador
5. Faça upload de um PDF/TXT
6. Acesse o Chat URL
7. Pergunte: "O que tem neste documento?"
```

---

## 🎉 Pronto!

Se tudo funcionou, você deve ter:
- ✅ Formulário de upload funcionando
- ✅ Chat respondendo perguntas sobre documentos
- ✅ Respostas baseadas no conteúdo real dos PDFs/TXTs

---

## 🐛 Algo deu errado?

### Erro: "GEMINI_API_KEY is undefined"
```bash
# Verifique se adicionou ao .env correto
echo $GEMINI_API_KEY

# Se vazio, adicione ao .env e reinicie
```

### Erro: "Store not found"
```bash
# Verifique o formato do GEMINI_STORE_NAME
# Deve ser: fileSearchStores/xxxxx
# NÃO: xxxxx (sem o prefixo)
```

### Erro: "OpenAI credentials missing"
```
1. Verifique se criou a credencial
2. No nó "OpenAI Chat Model", selecione ela
3. Salve o workflow
```

### Upload não funciona
```
- Arquivo deve ser PDF ou TXT
- Tamanho < 10MB
- Verifique logs: ~/.n8n/logs/
```

---

## 📚 Documentação Completa

Para instruções detalhadas, consulte:
- **[GUIA-CONFIGURACAO-GEMINI-RAG.md](./GUIA-CONFIGURACAO-GEMINI-RAG.md)** - Configuração completa
- **[README.md](./README.md)** - Visão geral
- **[CHANGELOG.md](./CHANGELOG.md)** - O que foi corrigido

---

## 💡 Dicas

### Comando útil para verificar variáveis:
```bash
# No n8n, crie workflow de teste com Code node:
return [{
  json: {
    gemini_key: $env.GEMINI_API_KEY ? '✅ Configurado' : '❌ Faltando',
    gemini_store: $env.GEMINI_STORE_NAME || '❌ Faltando'
  }
}];
```

### Localizar arquivo .env do n8n:
```bash
# Instalação npm global
~/.n8n/.env

# Docker
./n8n_data/.env

# Instalação custom
find / -name ".env" 2>/dev/null | grep n8n
```

### Ver logs em tempo real:
```bash
tail -f ~/.n8n/logs/n8n.log
```

---

## 🚀 Próximos Passos

Depois que tudo funcionar:

1. **Teste com diferentes tipos de documentos**
2. **Ajuste o prompt do agent** se necessário
3. **Configure autenticação** para produção
4. **Monitore os custos** das APIs

---

## 💰 Estimativa de Custos

Para uso de teste/desenvolvimento:
- **Gemini:** Geralmente grátis dentro da quota
- **OpenAI GPT-4o-mini:** ~$0.15 por 1M tokens

**Custo estimado para 100 perguntas:** < $0.50

---

**Tempo total:** ~5 minutos
**Dificuldade:** ⭐⭐☆☆☆ (Fácil)
**Resultado:** Sistema RAG completo funcionando! 🎉
