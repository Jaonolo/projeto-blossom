import React, {Component} from "react"
import "./landing.container.style.scss"
const logo = require("../../images/flower.svg")

export default class LandingContainer extends Component{
    render(){
        return(
            <div className="landing">
                <img src={logo} className="logo" alt="logo"></img>
                <div className="landing-titulo-holder">
                    <h1 className="landing-titulo">A new era at software<br></br>development</h1>
                    {/* <h2 className="landing-comentario">Tecnology at its finest</h2> */}
                </div>
            </div>
        )
    }
}