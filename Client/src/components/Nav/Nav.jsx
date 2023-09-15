import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import styles from "./Nav.module.css"

export default function Nav({ onSearch, onRandomCharacter, onLogout }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link to = "/About">
          <button className={styles.navButton}>Sobre mi</button>
        </Link>
        <Link to = "/home">
          <button className={styles.navButton}>Inicio</button>
        </Link>
        <Link to="/favorites">
          <button className={styles.navButton}>Favoritos</button>
        </Link>
        <button onClick={onRandomCharacter}className={styles.navButton}>Agregar Random</button>
        <button onClick={onLogout} className={styles.navButton}>Log out</button>
      </div>
      <div className={styles.navRight}>
        <SearchBar onSearch={onSearch} />
      </div>
      
    </nav>
  );
}