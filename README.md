# Landing Page - Curso NFS-e

Landing page para o curso "Como Emitir Nota Fiscal de Serviços pelo Portal Nacional" da Coach Consultoria.

## 🎥 Recursos

- Player de vídeo vertical otimizado para YouTube Shorts
- Design responsivo e moderno
- Paleta de cores personalizada da marca
- Seções completas de vendas (Hero, VSL, Mentor, Conteúdo, Benefícios, CTA)

## 🚀 Como visualizar

### Opção 1: Deploy Rápido (Recomendado)

**Netlify Drop** (mais fácil):
1. Acesse: https://app.netlify.com/drop
2. Arraste a pasta `dist/` para a página
3. Pronto! Sua landing page estará online

**Vercel**:
1. Instale: `npm i -g vercel`
2. Execute: `vercel --prod`
3. Siga as instruções

### Opção 2: Servidor Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📂 Estrutura

```
/
├── src/
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Ponto de entrada
├── dist/                # Arquivos de produção (build)
├── index.html           # HTML base
├── package.json         # Dependências
└── vite.config.ts       # Configuração Vite
```

## 🛠️ Tecnologias

- React 18 + TypeScript
- Vite
- Tailwind CSS (via CDN)
- YouTube Player API

## 📝 Customização

Para alterar o vídeo, edite o `videoId` em `src/App.tsx`:

```tsx
const videoId = "TB47nc-mzvM"; // Substitua pelo ID do seu vídeo
```

## 📱 Compatibilidade

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (iOS, Android)
- ✅ Tablets
- ✅ Responsivo

---

**Coach Consultoria** - Transformando negócios, construindo futuro!
