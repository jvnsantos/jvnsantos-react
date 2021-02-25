import React from 'react';
import './style.css';
import {Link} from'react-router-dom';
import fotoPerfil from '../Assets/perfil.jpg';
import logoGithub from '../Assets/github.png';
import logoLinkedin from '../Assets/linkedin.png';
import logoInstagram from '../Assets/instagram.png';
import logoGmail from '../Assets/gmail.png';







export default function Header(){

    const NoneLine = {
        textDecoration: 'none' 
    };

    return(

        <header className="header-content">
            <div id="fixado">

            <img className="fotoPerfil" src={fotoPerfil} alt="foto de perfil"></img>
                <h1 className="nome">JOÃO VICTOR</h1>
                <p className="profissao">WEB DEVELOPER</p>
            </div>

                <h1 className="subtitulo-midiaSociais">LINKS</h1>
                <p>
                <img className="logoLink" src={logoGithub} alt="" />
                <img className="logoLink" src={logoLinkedin} alt="" srcset=""/>
                <img className="logoLink" src={logoInstagram} alt="" srcset=""/>
                <img className="logoLink" src={logoGmail} alt="" srcset=""/>
                </p>

                <br/>
                <br/>

                <Link style={NoneLine} to="/home"><h1 className="subtitulo">HOME</h1></Link>
                <Link style={NoneLine} to="/cv"><h1 className="subtitulo">CURRICULO</h1></Link>
                <Link style={NoneLine} to="/projetos"><h1 className="subtitulo">PROJETOS</h1></Link>
                <Link style={NoneLine} to="/hobbies"><h1 className="subtitulo">HOBBIES</h1></Link>
                <Link style={NoneLine} to="/aboutme"><h1 className="subtitulo">SOBRE MIM</h1></Link>


               
        </header>
       
    );
}