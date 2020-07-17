import React, {Component} from "react"
import "./painel.container.style.scss"
// import ImagemDescritaComponent from "../../components/imagem-descrita/imagem-descrita.component"
const imagem1 = require("../../images/painel1.png")
const imagem2 = require("../../images/painel2.png")
const imagem3 = require("../../images/painel3.png")
const imagem4 = require("../../images/painel4.png")

export default class PainelComponent extends Component{
    generatePainel = (painéis) => {
        let retorno = []
        painéis.forEach(painel => {
            retorno.push(
                <div className="painel_fundo" style={{backgroundColor: painel.cor}}>
                    <div className="painel_conteúdo" style={{color: painel.texto}}>
                        <h1 className="painel_título">{painel.título}</h1>
                        <div className="painel_retrato" style={{flexDirection: painel.direção}}>
                            <img className="painel_imagem" src={painel.imagem}></img>
                            <div className="painel_descrição">{painel.descrição}</div>
                        </div>
                    </div>
                </div>
            )
        });
        return retorno
    }
    render(){
        let painéis = [
            {
                título: "Uma linguagem de programação como você nunca viu!",
                cor: "#4f4756",
                imagem: imagem1,
                descrição: "Criada com um norte completamente voltado ao ensino de desenvolvimento de software, a linguagem de programação Blossom nasceu para suprir uma grande dificuldade desse meio para muitas pessoas: a acessibilidade."
            },
            {
                título: "Abrangente, o esperanto da programação",
                cor: "#a83b42",
                direção: "row-reverse",
                imagem: imagem2,
                descrição: "Criada com um norte completamente voltado ao ensino de desenvolvimento de software, a linguagem de programação Blossom nasceu para suprir uma grande dificuldade desse meio para muitas pessoas: a acessibilidade."
            },
            {
                título: "Suporte para diversas línguas",
                cor: "#fff5fe",
                texto: "#151323",
                imagem: imagem3,
                descrição: "Criada com um norte completamente voltado ao ensino de desenvolvimento de software, a linguagem de programação Blossom nasceu para suprir uma grande dificuldade desse meio para muitas pessoas: a acessibilidade."
            },
            {
                título: "A melhor porta de entrada possível!",
                cor: "#151323",
                direção: "row-reverse",
                imagem: imagem4,
                descrição: "Criada com um norte completamente voltado ao ensino de desenvolvimento de software, a linguagem de programação Blossom nasceu para suprir uma grande dificuldade desse meio para muitas pessoas: a acessibilidade."
            }
        ]
        return(
            <div>
                {this.generatePainel(painéis)}
            </div>
        )
    }
}