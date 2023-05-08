import React from 'react';

const CountryCard = ({ item }) => {
    const { flags, name, population, region, capital } = item;

    return (
        <li>
            <article className="card">
                <div className="card-image">
                    <img src={flags.png} alt={name.common} />
                </div>
                <div className="card-content">
                    <h2 className="card-name">{name.common}</h2>
                    <ol className="card-list">
                        <li>
                            population: <span>{population}</span>
                        </li>
                        <li>
                            Region: <span>{region}</span>
                        </li>
                        <li>
                            Capital: <span>{capital[0]}</span>
                        </li>
                    </ol>
                </div>
            </article>
        </li>
    );
};

export default CountryCard;