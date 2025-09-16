import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const SiteHeader = styled.header`
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

export default function Header(props) {
  return (
    <SiteHeader>
      <Inner>
        <Navbar {...props} />
      </Inner>
    </SiteHeader>
  );
}
