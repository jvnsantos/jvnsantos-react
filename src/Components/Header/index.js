import React from 'react';
import './style.css';
import fotoPerfil from '../Assets/perfil.jpg';
import logoGithub from '../Assets/github.png';
import logoLinkedin from '../Assets/linkedin.png';
import logoInstagram from '../Assets/instagram.png';
import logoGmail from '../Assets/gmail.png';





export default function Header(){
    return(

        <header className="aside-content">
            <div id="fixado">

            <img className="fotoPerfil" src={fotoPerfil} alt="foto de perfil"></img>
                <h1 className="nome">JOÃO VICTOR</h1>
                <p className="profissao">WEB DEVELOPER</p>
            </div>

                <h1 className="subtitulo">LINKS</h1>
                <p>
                <img className="logoLink" src={logoGithub} alt="" />
                <img className="logoLink" src={logoLinkedin} alt="" srcset=""/>
                <img className="logoLink" src={logoInstagram} alt="" srcset=""/>
                <img className="logoLink" src={logoGmail} alt="" srcset=""/>
                </p>
               
        </header>
       
    );
}