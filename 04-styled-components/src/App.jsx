import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './theme';
import productsData from './data/products';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px;
`;
const ProductsGrid = styled.section`
  display: grid;
  gap: ${p => p.theme.gap};
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function App() {
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
    localStorage.setItem('theme', theme);
  }, [theme]);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);
  function handleAdd(p) {
    setCart(c => [...c, p]);
  }
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <GlobalStyle />
      <Header
        theme={theme}
        onToggle={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
        cartCount={cart.length}
      />
      <Main>
        <h1>Produtos</h1>
        <ProductsGrid>
          {productsData.map(p => (
            <ProductCard key={p.id} product={p} onAdd={handleAdd} loading={loading} />
          ))}
        </ProductsGrid>
      </Main>
      <Footer />
    </ThemeProvider>
  );
}
