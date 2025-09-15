Sugestões para organizar CSS no projeto

Quando o projeto exige estilos globais (reset, tokens, tema), mantenha esses arquivos em `src/styles/` como hoje. Para reduzir acoplamento e tornar o CSS mais fácil de manter, siga estas recomendações:

1. Separação por responsabilidade
- `src/styles/reset.css` — reset/normalize global.
- `src/styles/tokens.css` — variáveis (cores, espaçamentos, sombras, radios, transições).
- `src/styles/global.css` — regras base (tipografia, body, a, button) e utilitários que realmente são compartilhados.
- `src/styles/app.css` — estilos do layout global e regras específicas da página (containers, grids) — manter leve.
- `src/styles/components/*.css` — estilos por componente (Header, Navbar, ProductCard, Skeleton, etc.).

2. Como dividir o CSS
- Mantém os tokens e o reset importados no topo de `global.css`.
- Cada componente tem seu próprio arquivo CSS em `src/styles/components/` e importa só os tokens necessário via `@import '../tokens.css';` se precisar (ou depender de `global.css` já importado pela entrada da app).
- Evite arquivos monolíticos como "tudo.css" que crescem indefinidamente e dificultam buscas.

3. Estratégias alternativas (dependendo do time/stack)
- CSS Modules (arquivo.module.css): bom para isolamento automático e evita conflitos de nomes.
- CSS-in-JS (styled-components, emotion): útil se quiser lógica JS dentro do estilo (dinâmico), mas adiciona runtime.
- Utility-first (Tailwind): reduz CSS personalizado, mas impõe outra mentalidade.

4. Convenções de nomenclatura
- Use BEM ou classes semânticas (`.header`, `.header__inner`, `.navbar__actions`) para clareza.
- Prefixe classes de componentes se não estiver usando módulos (ex.: `.header-`, `.productcard-`).

5. Checklist para migrar estilos inline a arquivos
- Encontrar estilos inline repetidos entre componentes e criar classes reutilizáveis.
- Mover tokens (cores, espaçamentos) para `tokens.css` ao invés de valores magicamente escritos.
- Testar visualmente após cada refactor e rodar lint.

Exemplo rápido aplicado: o `Header` teve seus estilos extraídos para `src/styles/components/header.css` e agora `Header.jsx` usa classes `site-header` e `header-inner`.

Se quiser, eu posso:
- Converter outros componentes (por exemplo `Navbar`, `ProductCard`) para arquivos em `src/styles/components/` seguindo o mesmo padrão.
- Implementar CSS Modules para isolamento automático.
- Fazer uma refatoração completa do CSS em uma PR com commits pequenos.

Diga qual opção prefere e eu continuo.