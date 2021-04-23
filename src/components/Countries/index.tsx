import React, {useEffect, useState} from 'react'
import styles from './Countries.module.css';
import CountryCard from '../CountryCard';
import {CountryInterface} from '../../interfaces'
import {createArray} from '../../assets';

type PropsTypes = {
    countries: CountryInterface[] | null
}

const Countries = ({countries}: PropsTypes) => {
    const [emptyCards, setEmptyCards] = useState<Array<any>>([])

    useEffect(():any => {
        if(countries) {
            setEmptyCards(createArray(4 - countries.length % 4));
        }
    }, [countries])

    return (
        <div className={styles.container}>
            {countries?.map<JSX.Element>((country: CountryInterface, i) => <CountryCard key={i} country={country}/>)}
            {emptyCards.map((_, i) => <div key={i} className={styles.empty}></div>)}
        </div>
    )
}

export default Countries;
