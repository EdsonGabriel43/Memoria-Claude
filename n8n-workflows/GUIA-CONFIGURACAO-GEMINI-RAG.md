# 🚀 Guia de Configuração - Gemini File Search RAG

## 📋 Visão Geral

Este workflow permite:
1. **Upload de documentos** (PDF/TXT) para o Google Gemini File Search
2. **Chat inteligente** que responde perguntas baseadas nos documentos enviados

---

## ✅ Pré-requisitos

### 1. Contas necessárias:
- ✅ Conta Google Cloud com API Gemini habilitada
- ✅ Conta OpenAI (para o modelo de chat)

### 2. Software:
- ✅ n8n instalado localmente
- ✅ Node.js 18+ instalado

---

## 🔧 Passo a Passo de Configuração

### **PASSO 1: Obter API Key do Google Gemini**

1. Acesse: https://aistudio.google.com/app/apikey
2. Clique em **"Create API Key"**
3. Copie a chave gerada (formato: `AIzaSy...`)
4. **IMPORTANTE**: ⚠️ Nunca compartilhe esta chave publicamente!

### **PASSO 2: Criar um File Search Store no Gemini**

Você precisa criar um "store" onde os documentos serão armazenados.

**Opção A: Usando cURL no terminal**

```bash
curl -X POST "https://generativelanguage.googleapis.com/v1beta/fileSearchStores?key=SUA_API_KEY_AQUI" \
  -H "Content-Type: application/json" \
  -d '{
    "displayName": "meu_store_documentos"
  }'
```

**Opção B: Usando um teste no próprio n8n**

1. Crie um workflow simples com um nó HTTP Request
2. Configure:
   - Method: `POST`
   - URL: `https://generativelanguage.googleapis.com/v1beta/fileSearchStores?key=SUA_API_KEY`
   - Body (JSON):
     ```json
     {
       "displayName": "meu_store_documentos"
     }
     ```
3. Execute e copie o campo `name` da resposta

**Resposta esperada:**
```json
{
  "name": "fileSearchStores/abc123xyz456",
  "displayName": "meu_store_documentos",
  "createTime": "2025-01-15T10:30:00Z"
}
```

📝 **COPIE O VALOR DE `name`** → Ex: `fileSearchStores/abc123xyz456`

---

### **PASSO 3: Obter API Key da OpenAI**

1. Acesse: https://platform.openai.com/api-keys
2. Clique em **"Create new secret key"**
3. Copie a chave (formato: `sk-...`)
4. **IMPORTANTE**: Você precisa ter créditos na conta OpenAI

---

### **PASSO 4: Configurar Variáveis de Ambiente no n8n**

Você precisa adicionar as variáveis de ambiente ao seu n8n.

**Opção A: Via arquivo `.env` (recomendado)**

1. Localize o arquivo `.env` do seu n8n (geralmente na raiz da instalação)
2. Adicione estas linhas:

```bash
# Google Gemini Configuration
GEMINI_API_KEY=AIzaSy...  # Sua API Key do Gemini
GEMINI_STORE_NAME=fileSearchStores/abc123xyz456  # O 'name' do store criado

# OpenAI Configuration (será configurado via interface)
# OPENAI_API_KEY=sk-...
```

3. Salve o arquivo
4. **Reinicie o n8n**:
   ```bash
   # Se instalado via npm
   pm2 restart n8n
   # ou
   systemctl restart n8n
   # ou simplesmente pare e inicie novamente
   ```

**Opção B: Via Docker (se estiver usando Docker)**

Adicione ao seu `docker-compose.yml`:

```yaml
version: '3'
services:
  n8n:
    image: n8nio/n8n
    environment:
      - GEMINI_API_KEY=AIzaSy...
      - GEMINI_STORE_NAME=fileSearchStores/abc123xyz456
    ports:
      - "5678:5678"
    volumes:
      - ./n8n_data:/home/node/.n8n
```

---

### **PASSO 5: Configurar Credenciais da OpenAI no n8n**

1. Abra o n8n no navegador (geralmente `http://localhost:5678`)
2. Vá em: **Settings** → **Credentials**
3. Clique em **"Add Credential"**
4. Busque por **"OpenAI API"**
5. Cole sua API Key da OpenAI
6. Clique em **"Save"**
7. **IMPORTANTE**: Anote o nome da credencial criada (ex: "OpenAI API")

---

### **PASSO 6: Importar o Workflow no n8n**

1. No n8n, clique em **"Add Workflow"** → **"Import from File"**
2. Selecione o arquivo: `gemini-file-search-rag-fixed.json`
3. O workflow será importado

---

### **PASSO 7: Configurar o Nó OpenAI no Workflow**

1. No workflow importado, clique no nó **"OpenAI Chat Model"**
2. Em **"Credentials"**, selecione a credencial que você criou no Passo 5
3. Clique em **"Save"**

---

### **PASSO 8: Testar o Workflow**

#### **Teste 1: Upload de Documento**

1. Ative o workflow (botão "Active" no canto superior direito)
2. Clique no nó **"File Upload Form"**
3. Copie a **"Production URL"** que aparece
4. Abra essa URL no navegador
5. Faça upload de um arquivo PDF ou TXT
6. Você deve ver uma mensagem de sucesso

#### **Teste 2: Chat com Documentos**

1. Clique no nó **"When chat message received"**
2. Copie a **"Chat URL"**
3. Abra no navegador
4. Pergunte algo sobre o documento que você enviou
   - Ex: "O que tem neste documento?"
   - Ex: "Faça um resumo"
   - Ex: "Quais são os principais tópicos?"

---

## 🔍 Verificação de Variáveis

Para confirmar que as variáveis estão carregadas:

1. No n8n, crie um workflow de teste
2. Adicione um nó **"Code"**
3. Cole este código:
   ```javascript
   return [{
     json: {
       gemini_api_key_exists: !!$env.GEMINI_API_KEY,
       gemini_store_name: $env.GEMINI_STORE_NAME || 'NÃO CONFIGURADO',
       gemini_api_key_preview: $env.GEMINI_API_KEY ?
         $env.GEMINI_API_KEY.substring(0, 8) + '...' :
         'NÃO CONFIGURADO'
     }
   }];
   ```
4. Execute
5. Verifique se os valores estão corretos

---

## ❓ Solução de Problemas

### Problema 1: "GEMINI_API_KEY is undefined"
**Solução**:
- Verifique se adicionou a variável no `.env`
- Reinicie o n8n completamente
- Confirme com o teste de verificação acima

### Problema 2: "Error 400: API key not valid"
**Solução**:
- Verifique se copiou a API key corretamente (sem espaços)
- Confirme que a API do Gemini está habilitada no Google Cloud
- Gere uma nova API key se necessário

### Problema 3: "Store not found"
**Solução**:
- Verifique se o `GEMINI_STORE_NAME` está no formato correto: `fileSearchStores/xxxxx`
- Confirme que o store foi criado com sucesso (Passo 2)
- Liste seus stores com:
  ```bash
  curl "https://generativelanguage.googleapis.com/v1beta/fileSearchStores?key=SUA_API_KEY"
  ```

### Problema 4: "OpenAI credentials not configured"
**Solução**:
- Configure as credenciais da OpenAI no n8n (Passo 5)
- No nó "OpenAI Chat Model", selecione a credencial criada
- Verifique se tem créditos disponíveis na conta OpenAI

### Problema 5: Upload de arquivo não funciona
**Solução**:
- Verifique se o arquivo é PDF ou TXT
- Confirme que o tamanho do arquivo não excede o limite (geralmente 10MB)
- Verifique os logs do n8n para erros específicos

### Problema 6: Chat não responde sobre os documentos
**Solução**:
- Aguarde alguns segundos após o upload (indexação pode levar tempo)
- Verifique se o arquivo foi realmente importado para o store
- Teste com perguntas mais específicas sobre o conteúdo do documento

---

## 📊 Estrutura do Workflow

### Fluxo 1: Upload de Documentos
```
File Upload Form
  → Prepare Upload Data
  → Upload File to Gemini
  → Import to Store
  → Format Response
```

### Fluxo 2: Chat com RAG
```
When chat message received
  → Gemini RAG Agent
    ├─ OpenAI Chat Model
    ├─ Window Buffer Memory
    └─ search_documents Tool
      └─ Gemini File Search API
```

---

## 🔒 Segurança

### ✅ Boas práticas implementadas:
- ✅ API keys via variáveis de ambiente (não hardcoded)
- ✅ Credenciais gerenciadas pelo n8n
- ✅ Sem exposição de chaves no código

### ⚠️ IMPORTANTE:
- **NUNCA** compartilhe suas API keys
- **NUNCA** faça commit de arquivos `.env` no git
- **REVOGUE IMEDIATAMENTE** qualquer chave exposta acidentalmente

---

## 📝 Custos Estimados

### Google Gemini:
- File Search: Consulte https://ai.google.dev/pricing
- Geralmente tem quota gratuita generosa

### OpenAI:
- GPT-4o-mini: ~$0.15 por 1M tokens de input
- Consulte: https://openai.com/pricing

---

## 🆘 Precisa de Ajuda?

Se encontrar problemas:

1. Verifique os logs do n8n (geralmente em `~/.n8n/logs/`)
2. Teste cada nó individualmente
3. Use o modo "Test Workflow" para debug
4. Verifique a documentação oficial:
   - Gemini: https://ai.google.dev/docs
   - n8n: https://docs.n8n.io
   - OpenAI: https://platform.openai.com/docs

---

## ✨ Melhorias Implementadas

Comparado ao workflow original:

1. ✅ **Removido API key hardcoded** (agora via variáveis de ambiente)
2. ✅ **Removido nó "Set Store Name"** redundante
3. ✅ **Simplificado fluxo de upload** (removido nó intermediário)
4. ✅ **Adicionado formato de resposta** para uploads
5. ✅ **Melhorado prompt do agent** para chamadas mais confiáveis
6. ✅ **Atualizado modelo Gemini** para versão mais recente (2.0-flash-exp)
7. ✅ **Adicionado metadata customizada** nos uploads
8. ✅ **Documentação completa** em português

---

## 🎯 Próximos Passos

Após configurar tudo:

1. Teste com diferentes tipos de documentos
2. Experimente diferentes perguntas
3. Ajuste o prompt do agent conforme necessário
4. Considere adicionar autenticação ao formulário de upload
5. Monitore os custos de API

---

**Boa sorte! 🚀**
