import React, {Component} from "react"
import "./rodapé.container.style.scss"
const logo = require("../../images/logo.png")

export default class RodapéContainer extends Component{
    render(){
        return(
            <div className="rodapé">
                <div className="rodapé_conteúdo">
                    <img src={logo} className="rodapé_logo"></img>
                    <div className="rodapé_texto">© 2020 Zerow</div>
                </div>
            </div>
        )
    }
}