import React, { Component } from 'react';
import cine from './../../assets/cine.jpg'

export default class Cine extends Component {
    render() {
        return (
            <div>
                <h1>En el cine</h1>
                <img src={cine}/>
            </div>
        )
    }
}
