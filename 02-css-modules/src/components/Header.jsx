import React from 'react';
import Navbar from './Navbar';
import styles from './Header.module.css';

export default function Header(props) {
  return (
    <header className={styles['site-header']}>
      <div className={styles['header-inner']}>
        <Navbar {...props} />
      </div>
    </header>
  );
}
