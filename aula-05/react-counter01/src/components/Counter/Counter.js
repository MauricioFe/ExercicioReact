import React, { Component } from 'react';
import css from './counter.module.css';
export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            currentCounter: 2
        }
    }
    handleClick = () => {
        this.state--;
    }
    render() {
        return (
            <div className={css.counterContainer}>
                <button onClick={this.handleClick} className="waves-effect waves-light btn red darken-4">-</button>
                <span className={css.counterValue}>{this.currentCounter}</span>
                <button className="waves-effect waves-light btn green darken-4">+</button>
            </div>
        )
    }
}
