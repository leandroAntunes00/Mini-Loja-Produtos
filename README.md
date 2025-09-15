Tarefa: Implemente a mesma tela em 4 versões ou telas diferentes para cada uma das versões:

1. CSS Global · 2) CSS Modules · 3) Tailwind CSS · 4) styled-components.

Exemplo de Tela a construir:

- Navbar (fixa): logo, toggle de tema (claro/escuro com persistência) e badge do carrinho.

- Grid de produtos (cards) responsivo: ≤480px: 1 col · 481–768px: 2 cols · 769–1024px: 3 cols · ≥1025px: 4 cols.

- Card de produto: imagem 1:1 com espaço reservado, título 2 linhas com ellipsis, preço, rating (★), tag (“Novo”/“Promo”), botão “Adicionar” com variantes solid/outline/ghost.

Estados/Interações obrigatórios:

- Hover (elevação/sombra), focus visível, disabled, loading com skeleton (simule atraso).

- Dark mode aplicado a cores/sombras/bordas.

Acessibilidade:

- Navegação por teclado, `aria-*` onde fizer sentido, contraste ≥ 4.5:1.

Animações:

- Transições de 150–250ms (usar transform/opacity).

Dados:

- Exibir 6 produtos (id, título, preço, rating, tag, imagem placeholder). Imagens com lazy loading.

Entregáveis:

- Quatro pastas: `01-css-global/`, `02-css-modules/`, `03-tailwind/`, `04-styled-components/`.
- Cada pasta com os componentes (`Navbar`, `ProductCard`, `Button`, `Skeleton`) e um README curto.

Restrições:

- Em cada versão, use apenas a técnica indicada (global, modules, utilitários, CSS-in-JS com `ThemeProvider` e props).

Critérios de aceite:

- Breakpoints exatamente como descritos.
- Dark mode com persistência.
- Focus ring visível.
- Skeleton sem layout shift.
- Variantes do botão consistentes nos dois temas.
- Organização clara de pastas e uso de tokens (cores, espaçamentos, raio, sombras).

Como rodar cada versão (cada pasta é um projeto Vite independente):

```bash
cd 01-css-global && npm install && npm run dev
cd 02-css-modules && npm install && npm run dev
cd 03-tailwind && npm install && npm run dev
cd 04-styled-components && npm install && npm run dev
```