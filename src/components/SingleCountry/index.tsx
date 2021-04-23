import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './SingleCountry.module.scss'
import axios from 'axios';
import { MatchInterface } from '../interfaces';
import { CountryInterface } from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


type PropsType = {
    match: MatchInterface
}

const SingleCountry = ({ match }: PropsType) => {
    const [country, setCountry] = useState<CountryInterface | null>(null);
    const [borders, setBorders] = useState<CountryInterface[] | null>(null);

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/name/${match.params.name}`)
            .then(r => r.data)
            .then(data => {
                setCountry(data[0])
                const borders: string = data[0].borders.map((border: string): string => border).join(';');
                return axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${borders}`);
            })
            .then(({ data }) => setBorders(data));
    }, [match])

    return (
        <div className={styles.container}>
            <Link to='/' className={styles.back}>
                <FontAwesomeIcon icon={faArrowLeft} style={{marginRight: '0.5rem'}}/>
                Back
            </Link>
            <div className={styles.info}>
                <img className={styles.img} src={country?.flag} />
                <div className={styles.data}>
                    <h1>{country?.name}</h1>
                    <div className={styles.description}>
                        <div>
                            <span><span>Native name:</span> {country?.nativeName}</span>
                            <span><span>Population:</span> {country?.population}</span>
                            <span><span>Region:</span> {country?.region}</span>
                            <span><span>Subregion:</span> {country?.subregion}</span>
                            <span><span>Capital:</span> {country?.capital}</span>
                        </div>
                        <div>
                            <span><span>Top level domain:</span> {country?.topLevelDomain}</span>
                            <span><span>Currencies:</span> {country?.currencies.map(currency => currency.name).join(', ')}</span>
                            <span><span>Languages:</span> {country?.languages.map(lang => lang.name).join(', ')}</span>
                        </div>
                    </div>
                    <div className={styles.restCountries}>
                        <span className={styles.bordertitle}>{borders ? 'Border countries:' : ''}</span>
                        {borders?.map((border: CountryInterface, i: number) => <Link key={i} to={`/${border.name}`} className={styles.bordersLink}>{border.name.split('(')[0]}</Link>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCountry
