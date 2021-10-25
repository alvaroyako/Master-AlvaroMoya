import React, { Component } from 'react';
import musica from './../../assets/musica.jpg';

export default class Musica extends Component {
    render() {
        return (
            <div>
                <h1>Escuchando tremenda rolita</h1>
                <img src={musica}/>
            </div>
        )
    }
}
