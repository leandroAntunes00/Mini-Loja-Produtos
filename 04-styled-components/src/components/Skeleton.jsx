import styled from 'styled-components';

const S = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.06)
  );
  animation: shimmer 1.2s infinite;
  height: 100%;
  width: 100%;
`;

export default function Skeleton() {
  return <S aria-hidden />;
}
