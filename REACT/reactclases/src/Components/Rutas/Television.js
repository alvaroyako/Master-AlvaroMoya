import React, { Component } from 'react';
import tv from './../../assets/tv.jpg';

export default class Television extends Component {
    render() {
        return (
            <div>
                <h1>Viendo la tv</h1>
                <img src={tv}/>
            </div>
        )
    }
}
