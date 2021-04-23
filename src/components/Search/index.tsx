import React from 'react'
import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Search = ({handleSearch}: any) => {
    return (
        <div className={styles.searchbar}>
            <FontAwesomeIcon icon={faSearch}/>
            <input placeholder='Search for a country...' className={`${styles.input}`} onChange={e => handleSearch(e.target.value)} />
        </div>
    )
}

export default Search
