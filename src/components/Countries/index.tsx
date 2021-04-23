import React, {useEffect, useState} from 'react'
import styles from './Countries.module.scss';
import CountryCard from '../CountryCard';
import {CountryInterface} from '../interfaces'

type PropsTypes = {
    countries: CountryInterface[] | null
}

const Countries = ({countries}: PropsTypes) => {
    return (
        <div className={styles.container}>
            {countries?.map<JSX.Element>((country: CountryInterface, i) => <CountryCard key={i} country={country}/>)}
        </div>
    )
}

export default Countries;
