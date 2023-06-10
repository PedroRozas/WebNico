import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <span onClick={onClick} className="next slick-arrow" style={style}>
       <FontAwesomeIcon icon={faAngleRight}/>
    </span>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <span onClick={onClick} className="prev slick-arrow" style={style}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </span>
  );
}


class Banner extends React.Component {


    render() { 

      var settings = {
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        arrows: true,
        initialSlide: 0,
        dots: false,
        draggable: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1330,
                settings: {
                    arrows: false
                }
            }
        ],
      //  className: 'slick-slider-fade',
      };
  
      
        return ( 
            <React.Fragment>
            <Slider className="banner-active"  {...settings}>
              <div className="single-banner bg_cover bg_img_1 ">
                <img src="" alt=""/>
                <div className="banner-overlay">
                  <Container>
                    <Row>
                      <Col lg="9">
                        <div className="banner-content">
                          <span data-animation="fadeInLeft" data-delay="0.5s">
                           Servicio de soporte TI
                          </span>
                          <h1
                            data-animation="fadeInLeft"
                            data-delay="0.9s"
                            className="title"
                          > Asesorias Aldini <br />
                            La mejor en soluciones TI
                          </h1>
                          <p data-animation="fadeInLeft" data-delay="1.3s">
                            Empodera tu negocio con nuestro Soporte TI especializado<br />
                            Liberamos tu potencial tecnológico para impulsar tu éxito
                          </p>
                          <Link
                            data-animation="fadeInUp"
                            data-delay="1.6s"
                            className="main-btn"
                            to={"services"}
                          >
                            Nuestros Servicios <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                        {/* banner content */}
                      </Col>
                    </Row>
                    {/* row */}
                  </Container>
                  {/* container */}
                </div>
              </div>

              <div className="single-banner bg_cover  bg_img_2">
                <div className="banner-overlay">
                  <Container>
                    <Row>
                      <Col lg="9">
                        <div className="banner-content">
                          <span data-animation="fadeInLeft" data-delay="0.5s">
                            Servicio de soporte TI
                          </span>
                          <h1
                            data-animation="fadeInLeft"
                            data-delay="0.9s"
                            className="title"
                          > Asesorias Aldini <br />
                            Confía en nuestros expertos
                          </h1>
                          <p data-animation="fadeInLeft" data-delay="1.3s">
                            ¿Necesitas ayuda con tus sistemas y tecnología? <br />
                            Ofrecemos servicios de soporte técnico de nivel 1 y 2 de TI
                          </p>
                          <Link
                            data-animation="fadeInUp"
                            data-delay="1.6s"
                            className="main-btn"
                            to={"services"}
                          >
                            Nuestros Servicios <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                        {/* banner content */}
                      </Col>
                    </Row>
                    {/* row */}
                  </Container>
                  {/* container */}
                </div>
              </div>


              <div className="single-banner bg_cover  bg_img_3" >
                <div className="banner-overlay">
                  <Container>
                    <Row>
                      <Col lg="9">
                        <div className="banner-content">
                          <span data-animation="fadeInLeft" data-delay="0.5s">
                            Servicios de Soporte DBA 
                          </span>
                          <h1
                            data-animation="fadeInLeft"
                            data-delay="0.9s"
                            className="title"
                          > Asesorias Aldini <br />
                            La mejor en soluciones TI
                          </h1>
                          <p data-animation="fadeInLeft" data-delay="1.3s">
                            ¿Experimentando lentitud en tu servidor SAP?  <br />
                            ¿Problemas con la velocidad de consultas SQL?  <br />
                            ¿Archivos MDF ocupando demasiado espacio?
                          </p>
                          <Link
                            data-animation="fadeInUp"
                            data-delay="1.6s"
                            className="main-btn"
                            to={"services"}
                          >
                            Contactanos <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                        {/* banner content */}
                      </Col>
                    </Row>
                    {/* row */}
                  </Container>
                  {/* container */}
                </div>
              </div>

            </Slider>
            </React.Fragment>
         );
    }
}
 
export default Banner;