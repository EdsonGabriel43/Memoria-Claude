# 🎓 Guia para INICIANTES - Passo a Passo Completo

## 📌 O que você vai fazer?

Você vai criar um **chatbot inteligente** que:
- Lê documentos PDF ou TXT que você enviar
- Responde perguntas sobre esses documentos
- Funciona no seu computador

**Exemplo de uso:**
1. Você envia um PDF sobre "Manual do Carro"
2. Você pergunta: "Como trocar o óleo?"
3. O chatbot lê o PDF e responde baseado no conteúdo

---

## 🛠️ O que você precisa ter instalado

### 1. n8n (programa que você já tem)

**O que é?** n8n é um programa que conecta diferentes serviços (como Google, OpenAI, etc.)

**Onde está instalado?** No seu computador. Você acessa pelo navegador em `http://localhost:5678`

### 2. Verificar se o n8n está funcionando

Abra o navegador e acesse: **http://localhost:5678**

- ✅ Se abrir uma tela do n8n → Está funcionando!
- ❌ Se não abrir → Você precisa iniciar o n8n primeiro

**Como iniciar o n8n?** (escolha uma opção)

```bash
# Se instalou com npm:
n8n start

# OU se usa pm2:
pm2 start n8n

# OU se usa Docker:
docker-compose up -d
```

---

## 🔑 PASSO 1: Conseguir uma "chave" do Google Gemini

**O que é isso?** É como uma senha que permite você usar o serviço do Google gratuitamente.

### Como fazer:

1. **Abra este link:** https://aistudio.google.com/app/apikey

2. **Faça login** com sua conta Google (Gmail)

3. **Clique em** "Create API Key" (ou "Criar chave de API")

4. **Você vai ver uma chave** parecida com isso:
   ```
   AIzaSyAbC123dEfG456HiJkL789MnOpQ012RsTuV
   ```

5. **COPIE esta chave** (clique no ícone de copiar) e **cole em um bloco de notas**
   - Você vai usar ela depois!
   - ⚠️ **NÃO compartilhe esta chave com ninguém!**

---

## 🗄️ PASSO 2: Criar um "armazém" para seus documentos

**O que é isso?** É um espaço no Google onde seus documentos serão guardados.

### Opção A: Usando o script automático (mais fácil)

1. **Abra o terminal** (ou prompt de comando)

2. **Navegue até a pasta do projeto:**
   ```bash
   cd /home/user/Memoria-Claude/n8n-workflows
   ```

3. **Execute o script:**
   ```bash
   ./create-gemini-store.sh
   ```

4. **Cole sua chave do Google** quando pedir

5. **Digite um nome** para o armazém (exemplo: `meus_documentos`)

6. **O script vai mostrar algo assim:**
   ```
   ✅ Store criado com sucesso!

   GEMINI_API_KEY=AIzaSy...
   GEMINI_STORE_NAME=fileSearchStores/abc123xyz
   ```

7. **COPIE estas duas linhas** para o bloco de notas

### Opção B: Manualmente (se o script não funcionar)

1. **Abra este site:** https://reqbin.com/

2. **Configure assim:**
   - **Method:** POST
   - **URL:** Cole isto:
     ```
     https://generativelanguage.googleapis.com/v1beta/fileSearchStores?key=SUA_CHAVE_AQUI
     ```
     ⚠️ **Substitua `SUA_CHAVE_AQUI`** pela chave que você copiou no Passo 1!

3. **Em "Content"**, selecione **JSON** e cole:
   ```json
   {
     "displayName": "meus_documentos"
   }
   ```

4. **Clique em "Send"**

5. **Você vai receber uma resposta** parecida com:
   ```json
   {
     "name": "fileSearchStores/abc123xyz456",
     "displayName": "meus_documentos"
   }
   ```

6. **COPIE o valor de "name"** (exemplo: `fileSearchStores/abc123xyz456`)

---

## 🔑 PASSO 3: Conseguir uma chave da OpenAI

**O que é isso?** É outra senha, desta vez para usar o ChatGPT da OpenAI.

⚠️ **ATENÇÃO:** Este serviço é **PAGO** (mas bem barato)

### Como fazer:

1. **Abra:** https://platform.openai.com/signup

2. **Crie uma conta** (ou faça login se já tiver)

3. **Adicione créditos:**
   - Você precisa colocar pelo menos $5 dólares
   - Isso vai durar **MUITO** tempo (centenas de perguntas)

4. **Vá em:** https://platform.openai.com/api-keys

5. **Clique em** "Create new secret key"

6. **Copie a chave** (começa com `sk-...`)
   ```
   sk-abc123def456ghi789jkl012mno345pqr678stu
   ```

7. **Cole no bloco de notas**

---

## ⚙️ PASSO 4: Configurar o n8n

**O que vamos fazer?** Dizer ao n8n quais são suas chaves.

### 4.1. Encontrar o arquivo de configuração

O n8n guarda suas configurações em um arquivo chamado `.env`

**Onde ele está?** Depende de como você instalou:

```bash
# Instalação normal (npm):
~/.n8n/.env

# Docker:
./n8n_data/.env

# Outros lugares:
# Procure pela pasta .n8n no seu computador
```

### 4.2. Criar/Editar o arquivo .env

**Se o arquivo NÃO existe:**

1. **Crie o arquivo:**
   ```bash
   # No terminal:
   cd ~/.n8n
   touch .env
   ```

2. **Abra com um editor:**
   ```bash
   nano .env
   ```

**Se o arquivo JÁ existe:**

1. **Abra para editar:**
   ```bash
   nano ~/.n8n/.env
   ```

### 4.3. Adicionar as configurações

**Cole estas linhas no arquivo:**

```bash
# ===================================
# Configuração Gemini File Search RAG
# ===================================

# Sua chave do Google Gemini (copie do bloco de notas)
GEMINI_API_KEY=AIzaSy...cole_sua_chave_aqui

# O nome do armazém que você criou
GEMINI_STORE_NAME=fileSearchStores/...cole_o_nome_aqui

# ===================================
```

**⚠️ IMPORTANTE:**
- Substitua `...cole_sua_chave_aqui` pela chave real
- Substitua `...cole_o_nome_aqui` pelo nome real
- **NÃO coloque espaços** antes ou depois do `=`

**Exemplo de como deve ficar:**
```bash
GEMINI_API_KEY=AIzaSyAbC123dEfG456HiJkL789MnOpQ012RsTuV
GEMINI_STORE_NAME=fileSearchStores/abc123xyz456
```

### 4.4. Salvar o arquivo

**Se usou nano:**
- Pressione `Ctrl + O` (salvar)
- Pressione `Enter` (confirmar)
- Pressione `Ctrl + X` (sair)

**Se usou outro editor:**
- Salve normalmente (Ctrl + S)
- Feche o arquivo

---

## 🔄 PASSO 5: Reiniciar o n8n

**Por quê?** Para o n8n "ler" as novas configurações.

**Como fazer:**

```bash
# Se usa npm:
# Pare o n8n (Ctrl + C no terminal onde ele está rodando)
# Inicie novamente:
n8n start

# Se usa pm2:
pm2 restart n8n

# Se usa Docker:
docker-compose restart

# Se usa systemctl:
sudo systemctl restart n8n
```

---

## 📥 PASSO 6: Importar o workflow no n8n

**O que é workflow?** É como uma "receita" que diz ao n8n o que fazer.

### Como fazer:

1. **Abra o n8n no navegador:** http://localhost:5678

2. **No menu superior, clique em:**
   - "Workflows" (ou "Fluxos de trabalho")

3. **Clique no botão** "+ Add Workflow" (ou "+ Adicionar Workflow")

4. **Clique nos 3 pontinhos** (⋮) no canto superior direito

5. **Clique em** "Import from File" (ou "Importar de Arquivo")

6. **Selecione o arquivo:**
   ```
   /home/user/Memoria-Claude/n8n-workflows/gemini-file-search-rag-fixed.json
   ```

7. **O workflow vai aparecer na tela** com vários quadradinhos conectados

---

## 🔐 PASSO 7: Configurar a chave da OpenAI

### 7.1. Criar a credencial

1. **No n8n, clique em** "Settings" (ou "Configurações") no canto superior direito

2. **Clique em** "Credentials" (ou "Credenciais")

3. **Clique em** "+ Add Credential" (ou "+ Adicionar Credencial")

4. **Na busca, digite:** `OpenAI`

5. **Clique em** "OpenAI API"

6. **Cole sua chave da OpenAI** (a que começa com `sk-...`)

7. **Clique em** "Save" (ou "Salvar")

### 7.2. Conectar ao workflow

1. **Volte para o workflow** que você importou

2. **Procure o quadradinho chamado** "OpenAI Chat Model"

3. **Clique nele**

4. **Em "Credentials"**, selecione a credencial que você acabou de criar

5. **Clique em** "Save" (fora do quadradinho, no canto superior direito)

---

## ✅ PASSO 8: Testar!

### 8.1. Ativar o workflow

1. **No canto superior direito, há um botão** "Inactive" (ou "Inativo")

2. **Clique nele** para mudar para "Active" (ou "Ativo")

3. **O botão vai ficar verde** ✅

### 8.2. Testar o upload de documentos

1. **Clique no quadradinho** "File Upload Form"

2. **Copie a URL** que aparece em "Production URL"
   - Vai ser algo como: `http://localhost:5678/form/xxxxx`

3. **Abra esta URL em outra aba do navegador**

4. **Você vai ver um formulário** para enviar arquivos

5. **Selecione um PDF ou TXT** e clique em "Upload"

6. **Aguarde alguns segundos**

7. **Você deve ver:** "File uploaded and indexed successfully!" ✅

### 8.3. Testar o chat

1. **Volte ao workflow no n8n**

2. **Clique no quadradinho** "When chat message received"

3. **Copie a URL do chat** que aparece

4. **Abra em outra aba**

5. **Digite uma pergunta** sobre o documento que você enviou
   - Exemplo: "O que tem neste documento?"
   - Exemplo: "Faça um resumo"

6. **O chatbot deve responder** baseado no conteúdo! 🎉

---

## 🎉 Pronto!

Se tudo funcionou, você agora tem:
- ✅ Um formulário para enviar documentos
- ✅ Um chatbot que responde perguntas sobre esses documentos

---

## 😰 E se algo der errado?

### Erro: "GEMINI_API_KEY is undefined"

**Problema:** O n8n não encontrou a configuração.

**Solução:**
1. Verifique se editou o arquivo `.env` correto
2. Verifique se reiniciou o n8n
3. Verifique se não há espaços antes/depois do `=`

**Teste:**
```bash
# Veja se o arquivo existe e está correto:
cat ~/.n8n/.env
```

### Erro: "API key not valid"

**Problema:** A chave do Google está errada.

**Solução:**
1. Volte ao https://aistudio.google.com/app/apikey
2. Verifique se copiou a chave completa (sem espaços)
3. Tente criar uma nova chave

### Erro: "Store not found"

**Problema:** O nome do armazém está errado.

**Solução:**
1. Verifique se o `GEMINI_STORE_NAME` tem o formato:
   ```
   fileSearchStores/xxxxx
   ```
2. **NÃO deve ser** apenas `xxxxx` (sem o `fileSearchStores/`)

### Upload não funciona

**Problema:** Arquivo muito grande ou formato errado.

**Solução:**
- Use apenas PDF ou TXT
- Tamanho máximo: ~10MB
- Tente com um arquivo pequeno primeiro

### Chat não responde

**Problema:** Várias causas possíveis.

**Solução:**
1. Verifique se o documento foi enviado com sucesso
2. Aguarde 10-20 segundos após o upload (para indexação)
3. Tente perguntas específicas sobre o conteúdo
4. Verifique se tem créditos na OpenAI

---

## 📞 Precisa de ajuda específica?

**Me diga em qual passo você está travado:**
- "Não consigo abrir o n8n"
- "Não encontrei o arquivo .env"
- "O workflow não importou"
- "Deu erro X quando fiz Y"

**Vou te ajudar especificamente no seu problema!** 😊

---

## 💰 Quanto vai custar?

### Google Gemini:
- **Grátis** até um certo limite (bem generoso)
- Consulte: https://ai.google.dev/pricing

### OpenAI:
- **~$0.15** por 1 milhão de tokens
- **Estimativa:** 100 perguntas = menos de $0.50
- **$5 iniciais duram:** milhares de perguntas

**Total para testes:** Praticamente grátis!

---

## 🎯 Resumo do que você fez

1. ✅ Conseguiu chave do Google Gemini
2. ✅ Criou um armazém para documentos
3. ✅ Conseguiu chave da OpenAI
4. ✅ Configurou o n8n
5. ✅ Importou o workflow
6. ✅ Conectou a OpenAI
7. ✅ Testou e funcionou!

**Parabéns! Você criou seu primeiro sistema RAG!** 🎉
