import {useEffect,useState} from 'react'
import './index.css'
import productsData from './data/products'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'

export default function App(){
  const [theme,setTheme] = useState(()=> localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  const [loading,setLoading] = useState(true)
  const [cart,setCart] = useState([])

  useEffect(()=>{document.documentElement.classList.toggle('dark', theme==='dark'); localStorage.setItem('theme', theme)},[theme])
  useEffect(()=>{const t=setTimeout(()=>setLoading(false),900); return ()=>clearTimeout(t)},[])
  function handleAdd(p){ setCart(c=>[...c,p]) }

  return (
    <div>
      <Navbar theme={theme} onToggle={()=>setTheme(t=>t==='dark'?'light':'dark')} cartCount={cart.length} />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Produtos</h1>
        <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4" aria-live="polite">
          {productsData.map(p=> <ProductCard key={p.id} product={p} onAdd={handleAdd} loading={loading} />)}
        </section>
      </main>
    </div>
  )
}

