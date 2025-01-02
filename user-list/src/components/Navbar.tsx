import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => (
  <nav className={styles.navbar}>
    <Link to="/">Home</Link>
  </nav>
);

export default Navbar;
