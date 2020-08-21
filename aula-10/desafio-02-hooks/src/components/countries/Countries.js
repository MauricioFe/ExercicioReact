import React, { Component } from 'react'
import Country from './Country';
import css from './country.module.css';

export default function Countries({ countries }) {
    return (
        <div>
            <ul className={css.flexContainer} >
                {
                    countries.map(country => {
                        return <li className={css.flexItem} key={country.id}><Country country={country} /></li>
                    })
                }
            </ul>
        </div>
    )
}
