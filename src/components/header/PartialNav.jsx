import React from 'react';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

class PartialNav extends React.Component {
    render() { 
        return ( 
            <>
            <Nav className="mr-auto">
              <li className="nav-item">
              <Link className="nav-link" to={'/'}>Inicio</Link>
              
              {/* sub menu */}
            </li>
            <li className="nav-item">
                  <Link className="nav-link" to={'/about'}>Quienes Somos</Link>                
            </li>
            <li className="nav-item">
                  <Link className="nav-link"  to={'/'}>Nuestros Servicios</Link>
              <ul className="sub-menu">
                <li>
                  <Link to={'/services'}>Servicios</Link>
                </li>
                <li>
                  <Link to={'/services-details'}>Detalles de Servicios</Link>
                </li>
              </ul>
              {/* sub menu */}
            </li>
            <li className="nav-item">
                  <Link className="nav-link"  to={'/case-details'}>Casos de Exito</Link>
             
              {/* sub menu */}
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to={'/contact'}>Contacto</Link>
            
              {/* sub menu */}
           
              
              {/* sub menu */}
            </li>

          </Nav>
            </>
         );
    }
}
 
export default PartialNav;