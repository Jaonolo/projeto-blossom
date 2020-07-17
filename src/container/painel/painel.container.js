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
                descrição: "Constantemente atualizada com o máximo de novos perks das mais novas linguagens. Assim, um programador que aprendera em Blossom facilmente se adapta a novas linguagens."
            },
            {
                título: "Suporte para diversas línguas",
                cor: "#fff5fe",
                texto: "#151323",
                imagem: imagem3,
                descrição: "Com o objetivo de espalhar o desenvolvimento de sofware, Blossom tem uma equipe constantemente buscando novas línguas para traduzir suas funções e recursos."
            },
            {
                título: "A melhor porta de entrada possível!",
                cor: "#151323",
                direção: "row-reverse",
                imagem: imagem4,
                descrição: "A proposta da Blossom é, fazendo referência a obra de animação Rattatouille, qualquer um pode programar! E facilitaremos o caminho dos que querem começar o máximo possível"
            }
        ]
        return(
            <div>
                {this.generatePainel(painéis)}
            </div>
        )
    }
}