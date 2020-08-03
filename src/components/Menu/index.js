import React from 'react';
import Logo from '../../assets/img/logo.png';
import  './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu(){
    return (
     <div className="Menu">
         <a href="/">
            <img className="Logo" src={Logo} alt="Aldeirflix Logo" />   
         </a>
         <Button as="a" className="ButtonLink" href="/">
             Novo vídeo
         </Button>
     </div>
    );
}
export default Menu;