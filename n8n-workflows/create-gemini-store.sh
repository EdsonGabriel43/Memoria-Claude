#!/bin/bash

# Script para criar um File Search Store no Google Gemini
# Uso: ./create-gemini-store.sh

echo "🚀 Criador de Gemini File Search Store"
echo "========================================"
echo ""

# Solicitar API Key
read -p "Cole sua GEMINI_API_KEY: " API_KEY

if [ -z "$API_KEY" ]; then
    echo "❌ Erro: API Key não pode estar vazia"
    exit 1
fi

# Solicitar nome do store
read -p "Nome do store (ex: meus_documentos): " STORE_NAME

if [ -z "$STORE_NAME" ]; then
    STORE_NAME="n8n_file_search_store"
    echo "ℹ️  Usando nome padrão: $STORE_NAME"
fi

echo ""
echo "📡 Criando store no Google Gemini..."
echo ""

# Fazer requisição
RESPONSE=$(curl -s -X POST \
  "https://generativelanguage.googleapis.com/v1beta/fileSearchStores?key=$API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"displayName\": \"$STORE_NAME\"}")

# Verificar se houve erro
if echo "$RESPONSE" | grep -q "error"; then
    echo "❌ Erro ao criar store:"
    echo "$RESPONSE" | jq '.'
    exit 1
fi

# Extrair o nome do store
STORE_ID=$(echo "$RESPONSE" | jq -r '.name')

if [ -z "$STORE_ID" ] || [ "$STORE_ID" = "null" ]; then
    echo "❌ Erro: Não foi possível obter o ID do store"
    echo "Resposta completa:"
    echo "$RESPONSE" | jq '.'
    exit 1
fi

echo "✅ Store criado com sucesso!"
echo ""
echo "📋 Informações do Store:"
echo "========================"
echo "$RESPONSE" | jq '.'
echo ""
echo "🔑 Configuração para o n8n:"
echo "============================"
echo ""
echo "Adicione estas linhas ao seu arquivo .env:"
echo ""
echo "GEMINI_API_KEY=$API_KEY"
echo "GEMINI_STORE_NAME=$STORE_ID"
echo ""
echo "⚠️  IMPORTANTE: Após adicionar ao .env, reinicie o n8n!"
echo ""
echo "✨ Pronto! Agora você pode importar o workflow."
