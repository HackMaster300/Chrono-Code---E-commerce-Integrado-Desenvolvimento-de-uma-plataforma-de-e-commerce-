# 📚 Chrono & Code - E-commerce Platform

> Plataforma sofisticada de e-commerce especializada em relógios de luxo e livros

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📖 Sobre o Projeto

O **Chrono & Code** é uma plataforma de e-commerce elegante que combina dois universos distintos: relógios de luxo de precisão e livros que inspiram a imaginação. Desenvolvido com tecnologias modernas, oferece uma experiência de compra excepcional em ambos os segmentos.

### 🎯 Diferenciais

- **Dualidade Temática**: Dois nichos distintos com identidades visuais únicas
- **Design Responsivo**: Experiência perfeita em todos os dispositivos
- **Carrinho Inteligente**: Sistema de compras avançado com persistência
- **Interface Intuitiva**: Navegação fluida e experiência do usuário otimizada

## ✨ Funcionalidades Principais

### 🛒 Sistema de E-commerce
- ✅ **Carrinho Persistente** - Dados salvos localmente
- ✅ **Gestão de Quantidades** - Adicionar, remover e ajustar itens
- ✅ **Cálculos Automáticos** - Subtotal, frete e total
- ✅ **Modal Interativo** - Visualização detalhada do carrinho

### 🔐 Sistema de Usuário
- ✅ **Modal de Login/Registro** - Interface moderna com abas
- ✅ **Validação de Formulários** - Verificação em tempo real
- ✅ **OAuth Simulado** - Integração com redes sociais
- ✅ **Sessão Persistente** - Lembrar dados do usuário

### 🎨 Experiência do Usuário
- ✅ **Design Responsivo** - Mobile-first approach
- ✅ **Navegação Suave** - Scroll animado entre seções
- ✅ **Filtros Dinâmicos** - Categorização inteligente
- ✅ **Busca Integrada** - Campo de pesquisa expansível

## 🛠️ Tecnologias Utilizadas

### Frontend Principal
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos avançados e animações
- **JavaScript ES6+** - Interatividade e lógica

### Frameworks e Bibliotecas
- **Tailwind CSS** - Framework CSS utilitário
- **Font Awesome** - Ícones vetoriais
- **Google Fonts** - Tipografia customizada

### Funcionalidades Avançadas
- **LocalStorage API** - Persistência de dados
- **CSS Grid & Flexbox** - Layouts modernos
- **CSS Transitions** - Animações suaves
- **Media Queries** - Design responsivo

## 📁 Estrutura do Projeto

```
Chrono-Code/
├── html/
│   ├── index.html          # Página inicial (Home)
│   ├── watch.html          # Catálogo de relógios
│   └── books.html          # Catálogo de livros
├── css/
│   ├── index.style.css     # Estilos da homepage
│   ├── watch.style.css     # Estilos dos relógios
│   └── books.style.css     # Estilos dos livros
└── js/
    └── script.js           # Lógica principal JavaScript
```

## 🎨 Design System

### Chrono & Code (Relógios)
- **Cores Primárias**: Azul (#3b82f6) e Preto (#111827)
- **Estilo**: Sofisticado, luxuoso
- **Foco**: Precisão e elegância

### Leitura & Imaginação (Livros)
- **Cores Primárias**: Roxo (#6b46c1) e Branco
- **Estilo**: Acolhedor, inspirador
- **Foco**: Conhecimento e criatividade

## ⚡ Funcionalidades Detalhadas

### 🛒 Sistema de Carrinho
```javascript
// Estrutura do item no carrinho
{
  id: "product123",
  name: "Nome do Produto",
  price: 99.90,
  image: "url-da-imagem",
  quantity: 1
}
```

**Funcionalidades:**
- ✅ Adicionar produtos com um clique
- ✅ Remover itens individualmente
- ✅ Ajustar quantidades
- ✅ Cálculo automático de totais
- ✅ Persistência no localStorage
- ✅ Feedback visual de confirmação

### 🔐 Sistema de Autenticação
```html
<!-- Modal com abas Login/Registro -->
<div id="login-modal" class="modal-overlay">
  <div class="modal-content">
    <!-- Formulários dinâmicos -->
  </div>
</div>
```

**Características:**
- ✅ Validação de campos obrigatórios
- ✅ Confirmação de senha
- ✅ Aceitação de termos
- ✅ Integração OAuth simulada
- ✅ Design responsivo

### 📱 Design Responsivo
```css
/* Mobile First Approach */
@media (min-width: 768px) {
  /* Tablet styles */
}

@media (min-width: 1024px) {
  /* Desktop styles */
}
```

**Breakpoints:**
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px  
- **Desktop**: ≥ 1024px

## 🚀 Como Usar

### Instalação Local
```bash
# Clone o repositório
git clone https://github.com/HackMaster300/Chrono-Code---E-commerce-Integrado-Desenvolvimento-de-uma-plataforma-de-e-commerce-.git

# Navegue até o diretório
cd Chrono-Code---E-commerce-Integrado-Desenvolvimento-de-uma-plataforma-de-e-commerce-

# Abra o projeto (métodos alternativos)
# Método 1: Servidor local
python -m http.server 8000

# Método 2: Extensão Live Server (VS Code)
# Instale a extensão e clique em "Go Live"

# Método 3: Abrir diretamente no navegador
# Arraste o arquivo index.html para o navegador
```

### Estrutura de Navegação
```
Página Inicial (index.html)
    ├── Relógios (watch.html)
    └── Livros (books.html)
```

### Personalização
1. **Produtos**: Edite os cards nos arquivos HTML
2. **Preços**: Atualize os atributos `data-price`
3. **Imagens**: Substitua as URLs das imagens
4. **Cores**: Modifique as variáveis CSS

## 🎯 Páginas Específicas

### 🏠 Página Inicial (index.html)
- **Hero Section** com call-to-action
- **Produtos em Destaque** de ambas as categorias
- **Navegação Integrada** para ambas as lojas
- **Newsletter** para captura de leads

### ⌚ Página de Relógios (watch.html)
- **Filtros por Categoria**: Classic, Diver, Smart
- **Design de Luxo**: Paleta escura e elegante
- **Especificações Técnicas**: Movimento, resistência, etc.
- **Coleções Temáticas**

### 📚 Página de Livros (books.html)
- **Filtros por Gênero**: Ficção, Biografias, Autoajuda
- **Sistema de Avaliação**: Estrelas e reviews
- **Badges de Desconto**: Promoções destacadas
- **Informações de Autores**

## ⚙️ Configuração e Customização

### Modificando Cores
```css
/* No arquivo CSS correspondente */
:root {
  --primary-color: #3b82f6;    /* Azul para relógios */
  --secondary-color: #6b46c1;  /* Roxo para livros */
  --accent-color: #f59e0b;     /* Destaques */
}
```

### Adicionando Produtos
```html
<!-- Estrutura de um produto -->
<div class="product-card">
  <img src="caminho/da/imagem.jpg" alt="Nome do Produto">
  <h3>Nome do Produto</h3>
  <p>Descrição breve</p>
  <span class="price">R$99,90</span>
  <button class="add-to-cart" 
          data-id="produto123"
          data-name="Nome do Produto"
          data-price="99.90"
          data-image="caminho/da/imagem.jpg">
    Adicionar ao Carrinho
  </button>
</div>
```

### Configurando Preços e Moeda
```javascript
// No script.js - Modifique a formatação
function formatPrice(price) {
  return `R$${price.toFixed(2).replace('.', ',')}`;
  // Para dólar: return `$${price.toFixed(2)}`;
}
```

## 🔧 Funcionalidades Técnicas

### Sistema de Persistência
```javascript
// Salvar carrinho
localStorage.setItem('cart', JSON.stringify(cart));

// Recuperar carrinho
let cart = JSON.parse(localStorage.getItem('cart')) || [];
```

### Detecção de Eventos
```javascript
// Event listeners principais
document.addEventListener('DOMContentLoaded', function() {
  // Inicialização do carrinho
  // Configuração de modais
  // Setup de filtros
});
```

### Animações e Transições
```css
.transition-all {
  transition: all 0.3s ease;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
```

## 📊 Performance e Otimização

### Boas Práticas Implementadas
- ✅ **Lazy Loading** para imagens
- ✅ **CSS Minimizado** com Tailwind
- ✅ **JavaScript Modular** e eficiente
- ✅ **LocalStorage** para cache
- ✅ **Imagens Otimizadas** do Unsplash

### Métricas de Performance
- ⚡ Tempo de carregamento rápido
- 📱 Experiência mobile otimizada
- 🎨 Animações com GPU acceleration
- 🔍 SEO semântico implementado

## 🐛 Solução de Problemas

### Problemas Comuns

1. **Carrinho não persiste**
   ```javascript
   // Verifique se o localStorage está habilitado
   console.log(typeof(Storage));
   ```

2. **Imagens não carregam**
   - Verifique as URLs das imagens
   - Confira a conexão com a internet

3. **JavaScript não executa**
   - Verifique o console do navegador (F12)
   - Confirme que o arquivo script.js está carregado

### Debugging
```javascript
// Adicione estes logs para debugging
console.log('Carrinho atual:', cart);
console.log('LocalStorage:', localStorage.getItem('cart'));
```

## 🚀 Deploy

### Opções de Hospedagem

1. **GitHub Pages** (Gratuito)
   ```bash
   # Push para o repositório e ative no Settings > Pages
   ```

2. **Netlify** (Recomendado)
   ```bash
   # Arraste a pasta ou conecte com GitHub
   ```

3. **Vercel**
   ```bash
   # Deploy contínuo com Git
   ```

4. **Hospedagem Tradicional**
   ```bash
   # Upload via FTP para seu provedor
   ```

### Configurações de Deploy
- **Base Directory**: `/` (raiz do projeto)
- **Build Command**: (Não necessário - site estático)
- **Publish Directory**: `/` (todos os arquivos)

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. **Fork o projeto**
2. **Crie uma branch** (`git checkout -b feature/nova-funcionalidade`)
3. **Commit suas mudanças** (`git commit -m 'Adiciona nova funcionalidade'`)
4. **Push para a branch** (`git push origin feature/nova-funcionalidade`)
5. **Abra um Pull Request**

### Áreas para Melhoria
- [ ] Backend para persistência real
- [ ] Sistema de pagamento integrado
- [ ] Catálogo dinâmico com API
- [ ] Sistema de reviews e ratings
- [ ] Wishlist/favoritos
- [ ] Histórico de pedidos
- [ ] Modo escuro/claro
- [ ] Internacionalização (i18n)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Zerdone Rocha**

- 📧 Email: zerdone2301@gmail.com
- 💼 LinkedIn: [Zerdone Rocha](https://linkedin.com/in/zerdone-rocha)
- 🐙 GitHub: [HackMaster300](https://github.com/HackMaster300)

## 🎉 Agradecimentos

- **Unsplash** pelas imagens de alta qualidade
- **Tailwind CSS** pelo incrível framework
- **Font Awesome** pelos ícones
- **Google Fonts** pela tipografia

---

<div align="center">

### ⭐ Se este projeto foi útil, deixe uma estrela no repositório!

**Desenvolvido com 💙 por Zerdone Rocha**

![Visitors](https://api.visitorbadge.io/api/visitors?path=HackMaster300%2Fchrono-code&label=Visitantes&countColor=%23263759)

</div>
