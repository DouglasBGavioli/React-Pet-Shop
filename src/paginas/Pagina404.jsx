import React from 'react';
import imagem from '../assets/img/doguito404.svg'
import '../assets/css/404.css'

const pagina404 = () => {
    return(
        <main className="container flex flex--centro flex--coluna">
            <img className="doguito-imagem" src={imagem} alt="ilustracao doguito"/>
            <p className="naoencontrado-texto">
                Ops, Essa página nao existe!
            </p>
        </main>
    )
}

export default pagina404