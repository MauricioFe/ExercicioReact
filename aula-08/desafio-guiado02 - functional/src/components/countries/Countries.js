import React, { Component } from 'react'
import Country from './Country';
import css from './country.module.css';

export default class Countries extends Component {
    render() {
        const { countries } = this.props;
        return (
            <div>
                <ul className={css.flexContainer} >
                    {
                        countries.map(country => {
                            return <li className={css.flexItem} key={country.id}><Country country={country}/></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
