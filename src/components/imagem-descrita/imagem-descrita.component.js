import React, { Component } from 'react'

export default class ImagemDescritaComponent extends Component{
    render(){
        return(
            <div className="imagem_descrita">
                {this.props.children}
            </div>
        )
    }
}