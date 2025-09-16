import styled from 'styled-components';
import Button from './Button';
import LogoImg from '../assets/react.svg';

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const BrandBox = styled.div`
  width: 40px;
  height: 40px;
  background: ${p => p.theme.primary};
  border-radius: 8px;
  flex: 0 0 40px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Tag = styled.div`
  background: ${p => p.theme.accent};
  color: white;
  padding: 4px 8px;
  border-radius: 999px;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  background: ${p => p.theme.surface};
  padding: 12px 24px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  z-index: 50;
`;
const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
`;

export default function Navbar({ theme, onToggle, cartCount = 0 }) {
  return (
    <>
      <Left>
        <img src={LogoImg} alt="logo" className="logo react" style={{ height: 40 }} />
        <strong>Loja</strong>
      </Left>
      <Right>
        <Button variant="ghost" onClick={onToggle}>
          {theme === 'dark' ? '🌙' : '☀️'}
        </Button>
        <Tag role="status" aria-label={`Itens no carrinho: ${cartCount}`}>
          {cartCount}
        </Tag>
      </Right>
    </>
  );
}
