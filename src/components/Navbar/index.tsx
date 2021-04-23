import React from 'react'
import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({toggleTheme, theme}: any) => {
    return (
        <div className={`${styles.nav}`}>
            <p className={`${styles.title}`}>
                Where in the world?
            </p>
            <div className={styles.mode} onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faLightbulb } className={styles.icon}/>
                <span className={`${styles.text}`}>{theme === 'light' ? 'Dark' : 'Light'}</span>
            </div>
        </div>
    )
}

export default Navbar;
