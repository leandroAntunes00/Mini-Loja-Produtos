import {useEffect,useState} from 'react'
import './index.css'
import styles from './App.module.css'
import productsData from './data/products'

import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [theme, setTheme] = useState(
    () =>
      localStorage.getItem('theme') ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
  );
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // simula carregamento
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  function handleAdd(product) {
    setCart((cart) => [...cart, product]);
  }

  return (
    <div>
      <Header
        theme={theme}
        onToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        cartCount={cart.length}
      />
       <main className={styles['app-container']} style={{ paddingTop: 20 }}>
        <h1 style={{ marginTop: 0 }}>Produtos</h1>
        <section className={styles['products-grid']} aria-live="polite">
          {productsData.map((prod) => (
            <ProductCard key={prod.id} product={prod} onAdd={handleAdd} loading={loading} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
