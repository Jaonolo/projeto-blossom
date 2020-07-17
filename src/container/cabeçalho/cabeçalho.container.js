import React, {Component} from "react"
import "./cabeçalho.container.style.scss"
const logo = require("../../images/flower.svg")

export default class CabeçalhoContainer extends Component{
    generateListaMenu = (abas) => {
        let retorno = []
        abas.forEach(aba => {
            retorno.push(
                <div className="lista_menu_botão">
                    <a href={aba.link} className="menu_botão_texto">
                        {aba.título}
                    </a>
                </div>
            )
        });
        return retorno
    }
    render(){
        let listaMenu = [
            {
                título: "Home",
                link: "/"
            },
            {
                título: "Sobre",
                link: "/sobre"
            },
            {
                título: "Documentação",
                link: "/documentação"
            },
            {
                título: "Download",
                link: "/download"
            }
        ]
        return(
            <div className="cabeçalho">
                <div className="cabeçalho_logo_holder">
                    <a className="cabeçalho_home_link" href="/"><img src={logo} className="cabeçalho_logo" alt="logo"></img></a>
                </div>
                <div className="lista_menu">
                    {this.generateListaMenu(listaMenu)}
                </div>
            </div>
        )
    }
}