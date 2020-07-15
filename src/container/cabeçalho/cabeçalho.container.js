import React, {Component} from "react"
import "./cabeçalho.container.style.scss"
const logo = require("../../images/flower.svg")

export default class CabeçalhoContainer extends Component{
    render(){
        return(
            <div className="cabeçalho">
                <a className="cabeçalho-home-link" href="/"><img src={logo} className="cabeçalho-logo" alt="logo"></img></a>
            </div>
        )
    }
}