import React from 'react';
import css from './country.module.css';

export default function Country({ country }) {
    return (
        <div className="card-panel" >
            <div className={css.flexRow}>
                <img className={css.flag} src={country.flag} alt={country.name} />
                <span className="">{country.name}</span>
            </div>
        </div>)
}
