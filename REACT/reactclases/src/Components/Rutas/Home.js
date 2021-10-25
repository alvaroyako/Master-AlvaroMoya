import React, { Component } from 'react';
import home from './../../assets/home.jpg'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Estoy en casa</h1>
                <img src={home}/>
            </div>
        )
    }
}
