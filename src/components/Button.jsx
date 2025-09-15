import styled from 'styled-components'

const Btn = styled.button`
  padding:10px 14px; border-radius:8px; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:8px; transition:transform 200ms;
  &:active{transform:translateY(1px)}
  &:disabled{opacity:0.6; cursor:not-allowed}
  ${p=> p.variant==='solid' && `background:${p.theme.primary}; color:white; border:1px solid transparent`}
  ${p=> p.variant==='outline' && `background:transparent; color:${p.theme.text}; border:1px solid rgba(0,0,0,0.08)`}
  ${p=> p.variant==='ghost' && `background:transparent; color:${p.theme.text}; border:1px dashed transparent`}
`

export default function Button({variant='solid',children,...props}){ return <Btn variant={variant} {...props}>{children}</Btn> }
