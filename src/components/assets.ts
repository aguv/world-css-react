import axios from 'axios';
import { CountryInterface } from './interfaces';

export interface CodeType {
    country: string,
    code: string
}

export const getCodes = async (): Promise<CodeType[]> =>
    await axios.get('https://restcountries.eu/rest/v2/all').then(({ data }) => data.map((country: CountryInterface) => ({ country: country.name, code: country.alpha3Code })));


// export interface ObjectCodes {
//     [key: string]: string
// }

// export const getCodes = async () =>
//     await axios.get('https://restcountries.eu/rest/v2/all')
//         .then(({ data }) => data.reduce((acc: ObjectCodes, country: CountryInterface) => acc[country.alpha2Code] = country.name));
