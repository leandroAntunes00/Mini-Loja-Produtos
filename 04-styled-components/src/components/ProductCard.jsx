import styled from 'styled-components';
import Button from './Button';
import Skeleton from './Skeleton';

const Card = styled.article`
  background: ${p => p.theme.surface};
  border-radius: ${p => p.theme.radius};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform 200ms, box-shadow 200ms;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  }
`;
const ImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background: linear-gradient(90deg, #eee, #f6f6f6);
`;
const Content = styled.div`
  padding: 12px;
`;
const Title = styled.h3`
  font-weight: 700;
  margin: 0 0 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const Meta = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${p => p.theme.muted};
  font-size: 14px;
`;
const Price = styled.div`
  font-weight: 700;
`;
const TagBadge = styled.div`
  background: ${p => p.theme.accent};
  color: white;
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 12px;
`;
const Actions = styled.div`
  margin-top: 12px;
`;

export default function ProductCard({ product, onAdd, loading = false }) {
  return (
    <Card tabIndex={0} aria-labelledby={`title-${product.id}`}>
      <ImageWrap>
        {loading ? (
          <Skeleton />
        ) : (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </ImageWrap>
      <Content>
        <Title id={`title-${product.id}`}>{product.title}</Title>
        <Meta>
          <Price>R$ {product.price.toFixed(2)}</Price>
          <div aria-hidden>★ {product.rating}</div>
          {product.tag ? <TagBadge>{product.tag}</TagBadge> : null}
        </Meta>
        <Actions>
          <Button variant="solid" onClick={() => onAdd(product)}>
            Adicionar
          </Button>
        </Actions>
      </Content>
    </Card>
  );
}
