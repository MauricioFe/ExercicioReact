import React, { Component } from 'react';
import css from './country.module.css';

export default class Country extends Component {
    render() {
        const { country } = this.props;

        return (

            <div className="card-panel" >
                <div className={css.flexRow}>
                    <img className={css.flag} src={country.flag} alt={country.name} />
                    <span className="">{country.name}</span>
                </div>
            </div>)
    }
}
