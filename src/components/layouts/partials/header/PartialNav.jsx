import React from 'react';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

class PartialNav extends React.Component {
    render() { 
        return ( 
            <>
            <Nav className="mr-auto">
              <li className="nav-item">
              <Link className="nav-link" to={'/'}>Home</Link>
              <ul className="sub-menu">
                <li>
                  <Link to={'/'}>Home 1</Link>
                </li>
                <li>
                  <Link to={'/index2'}>Home 2</Link>
                </li>
                <li>
                  <Link to={'/index3'}>Home 3</Link>
                </li>
                <li>
                  <Link to={'/index4'}>Home 4</Link>
                </li>
              </ul>
              {/* sub menu */}
            </li>
            <li className="nav-item">
                  <Link className="nav-link" to={'/about'}>About</Link>                
            </li>
            <li className="nav-item">
                  <Link className="nav-link"  to={'/'}>Services</Link>
              <ul className="sub-menu">
                <li>
                  <Link to={'/services'}>Services</Link>
                </li>
                <li>
                  <Link to={'/services-details'}>Services Details</Link>
                </li>
              </ul>
              {/* sub menu */}
            </li>
            <li className="nav-item">
                  <Link className="nav-link"  to={'/'}>Pages</Link>
              <ul className="sub-menu">
                <li>
                  <Link to={'/case-study'}>case study</Link>
                </li>
                <li>
                  <Link to={'/case-details'}>Case Details</Link>
                </li>
                <li>
                  <Link to={'/coming-soon'}>coming soon</Link>
                </li>
                <li>
                  <Link to={'/error'}>error</Link>
                </li>
                <li>
                  <Link to={'/faq'}>faq</Link>
                </li>
                <li>
                  <Link to={'/pricing'}>pricing</Link>
                </li>
               
                  <li>
                  <Link to={'/team'}>team</Link>
                </li>
                <li>
                  <Link to={'/team-details'}>team details</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to={'/contact'}>Contact</Link>
                </li>
              </ul>
              {/* sub menu */}
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to={'/blog-standard'}>Blog</Link>
              <ul className="sub-menu">
                <li>
                <Link to={'/blog-standard'}>Blog Standard</Link>
                </li>
                <li>
                <Link to={'/blog-grid'}>Blog Grid</Link>
                </li>
                <li>
                <Link to={'/blog-details'}>Blog Details</Link>
                </li>
                <li>
                <Link to={'/blog-standard-details'}>Blog Details 2</Link>
                </li>
              </ul>
              {/* sub menu */}
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to={'/shop'}>Shop</Link>
              <ul className="sub-menu">
                  <li>
                    <Link to={'/shop'}>shop</Link>
                  </li>
                  <li>
                    <Link to={'/shop-details'}>shop Details</Link>
                  </li>

                  <li>
                      <Link to={'/products'}>Product</Link>
                  </li>
                  <li>
                      <Link to={'/products-details'}>Product Details</Link>
                  </li>
              </ul>
              {/* sub menu */}
            </li>

          </Nav>
            </>
         );
    }
}
 
export default PartialNav;