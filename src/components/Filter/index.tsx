import React, { useState, MouseEvent } from 'react'
import styles from './Filter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

type FilterProps = {
    filterByRegion: (region: string) => {},
    showAll: () => {}
}

const Filter = ({ filterByRegion, showAll }: FilterProps) => {
    const [region, setRegion] = useState<string>('Filter by Region')

    const handlerFilter = (e: MouseEvent<HTMLDivElement>) => {
        setRegion(e.currentTarget.innerText);
        filterByRegion(e.currentTarget.innerText);
    }

    const handleAll = (e: MouseEvent<HTMLDivElement>) => {
        setRegion(e.currentTarget.innerText);
        showAll();
    }

    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown__select}>
                <span className={styles.dropdown__selected}>{region}</span>
                <FontAwesomeIcon icon={faSortDown} />
            </div>
            <ul className={styles.dropdown__list}>
                <div className={styles.dropdown__item} onClick={handleAll}>
                    Show all
                </div>
                <div className={styles.dropdown__item} onClick={handlerFilter}>
                    Africa
                </div>
                <div className={styles.dropdown__item} onClick={handlerFilter}>
                    Americas
                </div>
                <div className={styles.dropdown__item} onClick={handlerFilter}>
                    Asia
                </div>
                <div className={styles.dropdown__item} onClick={handlerFilter}>
                    Europe
                </div>
                <div className={styles.dropdown__item} onClick={handlerFilter}>
                    Oceania
                </div>
            </ul>
        </div>
    )
}

export default Filter
