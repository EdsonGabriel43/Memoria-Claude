# 📁 N8N Workflows

Esta pasta contém workflows do n8n configurados e prontos para uso.

---

## 🤖 Gemini File Search RAG

Sistema completo de RAG (Retrieval-Augmented Generation) usando Google Gemini File Search e OpenAI.

### Arquivos:

- **`gemini-file-search-rag-fixed.json`** - Workflow corrigido e pronto para importar
- **`GUIA-CONFIGURACAO-GEMINI-RAG.md`** - Guia completo de configuração passo a passo
- **`create-gemini-store.sh`** - Script helper para criar o File Search Store

### 🚀 Início Rápido

1. **Criar o store no Gemini:**
   ```bash
   cd n8n-workflows
   ./create-gemini-store.sh
   ```

2. **Configurar variáveis de ambiente:**
   ```bash
   # Adicione ao seu .env do n8n
   GEMINI_API_KEY=sua_chave_aqui
   GEMINI_STORE_NAME=fileSearchStores/xxxxx
   ```

3. **Reiniciar o n8n:**
   ```bash
   pm2 restart n8n
   # ou
   systemctl restart n8n
   ```

4. **Importar o workflow:**
   - Abra o n8n
   - Import from File → selecione `gemini-file-search-rag-fixed.json`

5. **Configurar credenciais OpenAI:**
   - Settings → Credentials → Add Credential → OpenAI API
   - No workflow, selecione a credencial no nó "OpenAI Chat Model"

6. **Testar:**
   - Ative o workflow
   - Acesse a URL do formulário de upload
   - Envie um documento
   - Acesse a URL do chat e faça perguntas

### 📖 Documentação Completa

Leia o **[GUIA-CONFIGURACAO-GEMINI-RAG.md](./GUIA-CONFIGURACAO-GEMINI-RAG.md)** para instruções detalhadas.

---

## 🛠️ Recursos

### O que o workflow faz:

1. **Upload de Documentos:**
   - Formulário web para upload de PDF/TXT
   - Upload automático para Gemini Files API
   - Indexação no File Search Store
   - Metadata customizada

2. **Chat Inteligente:**
   - Interface de chat web
   - Integração com OpenAI GPT-4o-mini
   - Busca automática nos documentos via Gemini File Search
   - Respostas contextualizadas baseadas nos documentos

### Melhorias implementadas:

- ✅ API keys via variáveis de ambiente (segurança)
- ✅ Fluxo simplificado e otimizado
- ✅ Documentação completa em português
- ✅ Script helper para setup inicial
- ✅ Tratamento de erros
- ✅ Metadata enriquecida nos uploads

---

## 📊 Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                    UPLOAD DE DOCUMENTOS                      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Formulário Web                                              │
│       ↓                                                      │
│  Preparar Dados                                              │
│       ↓                                                      │
│  Upload para Gemini Files API                                │
│       ↓                                                      │
│  Importar para File Search Store                             │
│       ↓                                                      │
│  Resposta de Sucesso                                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    CHAT COM RAG                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Chat Web Interface                                          │
│       ↓                                                      │
│  Agent (OpenAI GPT-4o-mini)                                  │
│       ├─── Memory (Window Buffer)                            │
│       └─── Tool: search_documents                            │
│              ↓                                               │
│         Gemini File Search API                               │
│              ↓                                               │
│         Resposta Contextualizada                             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 💰 Custos

### Google Gemini:
- File Search API tem quota gratuita generosa
- Consulte: https://ai.google.dev/pricing

### OpenAI:
- GPT-4o-mini: ~$0.15 por 1M tokens de entrada
- Consulte: https://openai.com/pricing

**Estimativa:** Para uso moderado (100 consultas/dia), custo mensal < $5

---

## 🔒 Segurança

- ⚠️ **NUNCA** compartilhe suas API keys
- ⚠️ **NUNCA** faça commit do `.env` no git
- ⚠️ Use `.gitignore` para proteger arquivos sensíveis
- ⚠️ Considere adicionar autenticação aos webhooks em produção

---

## 🐛 Solução de Problemas

Consulte a seção **"Solução de Problemas"** no [GUIA-CONFIGURACAO-GEMINI-RAG.md](./GUIA-CONFIGURACAO-GEMINI-RAG.md)

---

## 📝 Notas

- Este workflow foi corrigido e adaptado para uso local
- Todas as API keys hardcoded foram removidas
- O fluxo foi simplificado e otimizado
- Documentação completa em português foi adicionada

---

## 🆘 Suporte

Se encontrar problemas:

1. Leia o guia de configuração completo
2. Verifique os logs do n8n
3. Teste cada nó individualmente
4. Consulte a documentação oficial das APIs

---

**Desenvolvido com ❤️ para a comunidade n8n brasileira**
