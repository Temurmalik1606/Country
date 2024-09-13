import './CountryCard.scss'

export function CountryCard ({name, flag, population, capital, region}) {
    return (
        <div className="card">
            <img src={flag} alt="" />
            <div className="country-info">
                <h1>{name}</h1>
                <ul>
                    <li>Population: <span>{population}</span></li>
                    <li>Region: <span>{region}</span></li>
                    <li>Capital: <span>{capital}</span></li>
                </ul>
            </div>
        </div>
    )
}