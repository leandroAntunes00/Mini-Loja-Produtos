import {useEffect,useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {light,dark} from './theme'
import productsData from './data/products'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'

export default function App(){
  const [theme,setTheme] = useState(()=> localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  const [loading,setLoading] = useState(true)
  const [cart,setCart] = useState([])
  useEffect(()=>{localStorage.setItem('theme', theme)},[theme])
  useEffect(()=>{const t=setTimeout(()=>setLoading(false),900); return ()=>clearTimeout(t)},[])
  function handleAdd(p){ setCart(c=>[...c,p]) }
  return (
    <ThemeProvider theme={theme==='dark'?dark:light}>
      <Navbar theme={theme} onToggle={()=>setTheme(t=>t==='dark'?'light':'dark')} cartCount={cart.length} />
      <main style={{maxWidth:1280,margin:'0 auto',padding:24}}>
        <h1>Produtos</h1>
        <section style={{display:'grid',gap:16,gridTemplateColumns:'repeat(1,1fr)'}}>
          {productsData.map(p=> <ProductCard key={p.id} product={p} onAdd={handleAdd} loading={loading} />)}
        </section>
      </main>
    </ThemeProvider>
  )
}
