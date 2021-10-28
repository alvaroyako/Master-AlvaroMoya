import React, { Component } from 'react'
import equipos from '../../assets/img/equipos.png'

export default class Home extends Component {
    render() {
        return (
            
                 <div className="container">
                <img className="mt-5" src={equipos} style={{width:"700px", height:"550px"}}></img>
            </div>
            
        )
    }
}
