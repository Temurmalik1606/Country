import { useEffect, useState } from 'react'
import './Country.scss'
import { Header } from '../Header/Header'
import { CountryCard } from '../AllCountry/CountryCard'
import { Search } from '../Search/Search'


export function Countrys(){
    const [countryData, setCountryData] = useState(null)
    const [pagination, setPagination] = useState(8)
    const [value, setValue] = useState('')
    const [region, setRegion] = useState('')

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setCountryData(data)
            })
    }, [])

    function paginationFn (paginationData) {
        return paginationData?.slice(0, pagination)  
    }

    function handlePagination(){
        setPagination(pagination + 8)
    }

    function country(){
        let countries = countryData 

        if(region !== '' && region !== 'Filter by Region') {
            countries = countries?.filter((item) => {
                return item.region.toLowerCase() === region.toLowerCase()
            })
        }
        if(value !== '') {
            countries = countries?.filter((item) => {
                return item.name.common.toLowerCase().includes(value.toLowerCase())
            })
        }

        return paginationFn(countries)
    }
        

    return (
        <>
            <Header />
            <Search value={value} setValue={setValue} setRegion={setRegion}/>
            <div className="countries-container container">
                {
                    country()?.map((item, ind) => {
                        const {name, capital, population, flags, region} = item
                        return <CountryCard
                            key={ind}
                            name={name.common}
                            population={population.toLocaleString()}
                            capital={capital}
                            region={region}
                            flag={flags.png}
                        />
                    })
                }
            </div> 
            {
                country()?.length > 7 && <button onClick={() => handlePagination()}>More...</button>
            }
        </>
    )
}