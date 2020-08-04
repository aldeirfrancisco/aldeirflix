import React from 'react';
import Logo from '../../assets/img/logo.png';
import  './Menu.css';
import {Link} from'react-router-dom';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu(){
    return (
     <div className="Menu">
         <Link to="/">
            <img className="Logo" src={Logo} alt="Aldeirflix Logo" />   
         </Link>
         <Button as={Link} className="ButtonLink" to="/cadastro/video">
             Novo vídeo
         </Button>
     </div>
    );
}
export default Menu;