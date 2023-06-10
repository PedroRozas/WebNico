import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboard, faDatabase,
  faChalkboardUser, faLaptopCode, faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row } from 'react-bootstrap';

class WhoWeAreArea extends React.Component {

    render() { 
        return ( 
          <div className="who-we-are-area pt-110 pb-120">
            <Container>
              <Row>
                <div
                  className="col-lg-5 wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div className="section-title">
                    <span>Quienes somos</span>
                    <h2 className="title">
                      Expertos con más de 10 años de experiencia
                    </h2>
                  </div>
                  {/* section title */}
                </div>
                <div
                  className="col-lg-6 offset-lg-1 wow fadeInRight"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <div className="section-title">
                  <p style= {{fontSize : 18}}>
                  Somos un equipo de ingenieros informáticos altamente experimentados, especializados en la optimización y mantenimiento de bases de datos. 
                  Con más de una década de experiencia en el campo, estamos comprometidos a brindar soluciones excepcionales a nuestros clientes. 
                  Nuestros servicios incluyen soporte técnico integral, administración de TI, experticia en DBA y estrategias efectivas de ventas en línea. 
                  Sea cual sea su necesidad, estamos aquí para satisfacerla. Confíe en nosotros para aprovechar al máximo su infraestructura informática y lograr resultados sobresalientes.
                    </p>
                  </div>
                  {/* section title */}
                </div>
              </Row>
              <Row>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
                  data-wow-duration=".5s"
                  data-wow-delay="0s"
                >
                  <div className="what-we-do-item text-center mt-30">
                    <FontAwesomeIcon  icon={faLaptopCode} />
                    <h5 className="title">Soluciones TI</h5>
                    <p>Impulsa tu infraestructura tecnológica con nuestras Soluciones TI confiables</p>
                    <Link to={"case-details"}>
                      <FontAwesomeIcon icon={faLongArrowAltRight}/>
                    </Link>
                  </div>
                  {/* what we do item */}
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div className="what-we-do-item text-center mt-30">
                    <FontAwesomeIcon icon={faChalkboardUser} />
                    <h5 className="title">Soporte nivel 1 y 2 TI</h5>
                    <p>Soluciones rápidas y confiables para tus necesidades tecnológicas</p>
                    <Link to={"case-details"}>
                      <FontAwesomeIcon icon={faLongArrowAltRight}/>
                    </Link>
                  </div>
                  {/* what we do item */}
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <div className="what-we-do-item text-center mt-30">
                    <FontAwesomeIcon icon={faChalkboard} />
                    <h5 className="title">Soporte nivel 1 SAP </h5>
                    <p>Asistencia experta para tu plataforma empresarial</p>
                    <Link to={"case-details"}>
                      <FontAwesomeIcon icon={faLongArrowAltRight}/>
                    </Link>
                  </div>
                  {/* what we do item */}
                </div>
                <div
                  className="col-lg-3 col-md-6 col-sm-6 wow slideInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0s"
                >
                  <div className="what-we-do-item text-center mt-30">
                    <FontAwesomeIcon icon={faDatabase} />
                    <h5 className="title">Mantenimiento de DB</h5>
                    <p>Cuidado y optimización de tu base de datos</p>
                    <Link to={"case-details"}>
                      <FontAwesomeIcon icon={faLongArrowAltRight}/>
                    </Link>
                  </div>
                  {/* what we do item */}
                </div>
              </Row>
              {/* row */}
            </Container>
            {/* container */}
            <div className="what-we-are-shape-1">
              <img src="/assets/images/what-we-are-shape-1.png" alt="shape" />
            </div>
            <div className="what-we-are-shape-2">
              <img src="/assets/images/what-we-are-shape-2.png" alt="shape" />
            </div>
          </div>
         );
    }
}

export default WhoWeAreArea;