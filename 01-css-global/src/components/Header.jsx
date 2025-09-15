import React from 'react';
import Navbar from './Navbar';
import '../styles/components/header.css';

export default function Header(props) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Navbar {...props} />
      </div>
    </header>
  );
}
