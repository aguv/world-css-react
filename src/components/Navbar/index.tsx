import React from 'react'
import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons'

const Navbar = ({toggleTheme, theme}: any) => {
    return (
        <div className={`${styles.nav}`}>
            <p className={`${styles.title}`}>
                Where in the world?
            </p>
            <div className={styles.darkMode} onClick={toggleTheme}>
                <FontAwesomeIcon icon={faMoon} className={styles.icon}/>
                <span className={`${styles.text}`}>{theme === 'light' ? 'Dark' : 'Light'}</span>
            </div>
        </div>
    )
}

export default Navbar;
