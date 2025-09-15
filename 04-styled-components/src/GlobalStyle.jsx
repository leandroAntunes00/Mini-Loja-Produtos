
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Reset básico (adaptado de reset.css) */
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;border:0}
  html,body,#root{height:100%}
  img,video{max-width:100%;height:auto;display:block}

  html{font-family:system-ui, Avenir, Helvetica, Arial, sans-serif; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale}
  body{
    margin:0;
    min-width:320px;
    min-height:100vh;
    background:${p => p.theme.bg};
    color:${p => p.theme.text};
    -webkit-font-smoothing:antialiased;
    transition: background ${p=>p.theme.transition}, color ${p=>p.theme.transition};
  }

  h1{font-size:3.2em;line-height:1.1;margin-top:0}
  button{font-family:inherit}

  /* App container */
  #root,.app-container{max-width:1280px;margin:0 auto;padding:24px}

  /* Focus ring global */
  :focus{outline:3px solid ${p=>p.theme.primary};outline-offset:2px}

  /* Skeleton utilities */
  .skeleton-fill{width:100%;height:100%}
  .skeleton-inline{display:inline-block;width:2em;height:1em;border-radius:6px}
  .skeleton{background:linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02), rgba(255,255,255,0.06)); background-size:200% 100%; animation:shimmer 1.2s infinite}
  @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
`

export default GlobalStyle
