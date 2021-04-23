import React from 'react'
import styles from './CountryCard.module.scss';
import { CountryInterface } from '../interfaces';
import { Link } from 'react-router-dom';

type AppProps = {
    country: CountryInterface
}

const CountryCard = ({ country }: AppProps): JSX.Element => {
    return (
        <Link to={`/${country.name}`} className={styles.card} style={{textDecoration: 'none'}}>
            {country ?
                (
                    <div style={
                        {
                            backgroundImage: `url(${country.flag})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center'
                        }
                    } className={styles.img}></div>
                ) : null
            }
            <div className={styles.text}>
                <h3>{country.name}</h3>
                <div className={styles.data}>
                    <span><span>Population:</span> {country.population}</span>
                    <span className={styles.middle}><span>Region:</span> {country.region}</span>
                    <span><span>Capital:</span> {country.capital}</span>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard
