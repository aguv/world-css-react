import React, { useState, useEffect } from 'react'
import styles from './Home.module.scss';
import Search from '../Search';
import Filter from '../Filter';
import Countries from '../Countries';
import { CountryInterface } from '../../interfaces';
import axios from 'axios';

const Home = () => {
    const [initialCountries, setInitialCountries] = useState<CountryInterface[] | null>(null);
    const [countries, setCountries] = useState<CountryInterface[] | null>(null);

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(({ data }) => setInitialCountries(data));
    }, [])

    const filterByRegion = (region: string):any => setCountries(initialCountries!.filter((country: CountryInterface) => country.region === region));
    const showAll = (): any => setCountries(initialCountries);
    const handleSearch = (word: string) => {
        setCountries(initialCountries!.filter(country => country.name.toLowerCase().includes(word.toLowerCase())));
    }


    return (
        <div className={styles.body}>
            <div className={styles.search}>
                <Search handleSearch={handleSearch}/>
                <Filter filterByRegion={filterByRegion} showAll={showAll}/>
            </div>
            <Countries countries={countries || initialCountries}/>
        </div>
    )
}

export default Home
