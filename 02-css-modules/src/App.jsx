import {useEffect,useState} from 'react'
import './index.css'
import productsData from './data/products'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'

function App(){
  const [theme,setTheme] = useState(()=> localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  const [loading,setLoading] = useState(true)
  const [cart,setCart] = useState([])

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', theme==='dark')
    localStorage.setItem('theme', theme)
  },[theme])

  useEffect(()=>{
    const t = setTimeout(()=> setLoading(false),900)
    return ()=> clearTimeout(t)
  },[])

  function handleAdd(p){ setCart(c=>[...c,p]) }

  return (
    <div>
      <Navbar theme={theme} onToggle={() => setTheme(t=>t==='dark'?'light':'dark')} cartCount={cart.length} />
      <main className="app-container" style={{paddingTop:20}}>
        <h1 style={{marginTop:0}}>Produtos</h1>
        <section className="products-grid" aria-live="polite">
          {productsData.map(prod => (
            <ProductCard key={prod.id} product={prod} onAdd={handleAdd} loading={loading} />
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
