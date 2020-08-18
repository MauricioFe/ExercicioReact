import React from 'react';
import { formatNumber } from '../../Helpers/formatHelpers';
import css from './header.module.css';

export default function Header({ onChangeFilter, filter, countryCount, totalPopulation }) {
    const handleInputChange = (event) => {
        const newFilter = event.target.value;
        onChangeFilter(newFilter)
    }

    return (
        <div className={css.flexRow}>
            <input className={css.info} type="text" value={filter} onChange={handleInputChange} placeholder="Filtro" />
            <span className={css.info} >Países: <strong>{countryCount}</strong></span>
            <span className={css.info} >População: <strong>{formatNumber(totalPopulation)}</strong></span>
        </div>
    );
}
