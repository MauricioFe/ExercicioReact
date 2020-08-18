import React, { Component } from 'react';
import {formatNumber} from '../../Helpers/formatHelpers';
import css from './header.module.css';

export default class Header extends Component {
    handleInputChange = (event) => {
        const newFilter = event.target.value;
        this.props.onChangeFilter(newFilter)
    }
    render() {
        const { filter, countryCount, totalPopulation } = this.props;
        return (
            <div className={css.flexRow}>
                <input className={css.info} type="text" value={filter} onChange={this.handleInputChange} placeholder="Filtro" /> 
                <span className={css.info} >Países: <strong>{countryCount}</strong></span>
                <span className={css.info} >População: <strong>{formatNumber(totalPopulation)}</strong></span>
            </div>
        );
    }
}
