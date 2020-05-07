import React from 'react';
import logo from './logo.svg';

import './css/bootstrap.css';
import './fonts/font-awesome/css/font-awesome.css';
import './App.css';
import imgabout from './img/pestaña.jpg'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'
import asesoria from './img/asesor.jpg'

function App() {
  return (
    <div>
        
        <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" href="img/apple-touch-icon.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png"/>

        
        <link rel="stylesheet" type="text/css" href="./css/nivo-lightbox/nivo-lightbox.css"/>
        <link rel="stylesheet" type="text/css" href="./css/nivo-lightbox/default.css"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900" rel="stylesheet"></link>
              
        <nav id="menu" class="navbar navbar-default navbar-fixed-top">
          <div class="container"> 
          
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
              <a class="navbar-brand page-scroll" href="#page-top">Rose BeautyBar</a> </div>
            
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#about" class="page-scroll">Workshop</a></li>
                <li><a href="#services" class="page-scroll">Contenido</a></li>
                <li><a href="#portfolio" class="page-scroll">Sé una profesional</a></li>
                <li><a href="#testimonials" class="page-scroll">Asesoría Online</a></li>
                <li><a href="#team" class="page-scroll">Certificación</a></li>
                <li><a href="#contact" class="page-scroll">Contacto</a></li>
              </ul>
            </div>
           
          </div>
        </nav>
        
        <header id="header">
          <div class="intro">
            <div class="overlay">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-md-offset-2 intro-text">
                    <h1>Pro Lash Lifting<span></span></h1>
                    <p>WORKSHOP</p>
                    <p>¡Vas a aprender como lograr un lifting perfecto y como armar tu negocio!</p>
                    <a href="https://wa.me/5491153240431?text=Hola%20quiero%20unirme%20al%20workshop%20de%20Pro%20Lash%20Lifting!%20Quiero%20más%20info%20:)" class="btn btn-custom btn-lg page-scroll">Más info</a> </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
       
       
        <div id="about">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6"> <img src={imgabout} class="img-responsive" alt=""/> </div>
              <div class="col-xs-12 col-md-6">
                <div class="about-text">
                  <h2>Workshop Online</h2>
                  <p>El lifting de Pestañas es un tratamiento que alarga y crea una ligera curva hacia arriba de manera natural y duradera consiguiendo mayor longitud y espesor, logrando una mirada con mucho más realce. En este workshop vas a aprender a realizar un lifting perfecto y como comenzar tu negocio.</p>
                  <h3>¿Qué incluye este curso?</h3>
                  <div class="list-style">
                    <div class="col-xs-12">
                      <ul>
                        <li>Teoría de las pestañas</li>
                        <li>Técnica Lash Lifting profesional</li>
                        <li>Tinte efecto rimmel</li>
                        <li>Arma tu nogocio! - Marketing</li>
                        <li>Certificación</li>
                        <li>Acceso ilimitado al curso</li>
                        <li>Asesoría por 1 año</li>
                      </ul>
                      <div id="precioWork">
                        <p>
                          <span class="h2"><del>$5.000</del></span>
                          <span class="h2"> <sub>$2.500 ARS</sub></span>
                        </p> 
                        <p>Hasta 3 cuotas sin interés</p>
                      </div>
                      <a href="https://wa.me/5491153240431?text=Hola%20me%20interesa%20el%20workshop%20de%20Pro%20Lash%20Lifting!" class="btn btn-custom btn-lg page-scroll" style={{paddingleft: 200 }}>¡Unirme al workshop!</a>
                    </div>
                  </div>
                </div>
        
              </div>
            </div>
          </div>
        </div>
        
        <div id="services" class="text-center">
          <div class="container">
            <div class="section-title">
              <h2>Contenido</h2>
              <p>Vas a conocer el proceso y herramientas para realizar un lifting mega profesional.</p>
            </div>
            <div class="row">
              <div class="col-md-4"> <i class="fa fa-eye"></i>
                <div class="service-desc">
                  <h3>Pestañas</h3>
                  <p>¿Qué son las pestañas? - ¿Cuántas pestañas tenemos? - Ciclo de crecimiento - Cuidados básicos - Consejos para su cuidado.</p>
                </div>
              </div>
              <div class="col-md-4"> <i class="fa fa-bookmark"></i>
                <div class="service-desc">
                  <h3>Buenas prácticas</h3>
                  <p>Higiene del lugar de trabajo - Cuidados personales - Cuidados con la clienta.</p>
                </div>
              </div>
              <div class="col-md-4"> <i class="fa fa-diamond"></i>
                <div class="service-desc">
                  <h3>Técnica lifting profesional</h3>
                  <p>Paso a paso! - Tips para lograr un acabado perfecto - Materiales y elementos necesarios</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4"> <i class="fa fa-check"></i>
                <div class="service-desc">
                  <h3>Extras</h3>
                  <p>Beneficios del lifting - Consejos para su larga duración - Errores a evitar - Marcas de productos recomendados</p>
                </div>
              </div>
              <div class="col-md-4"> <i class="fa fa-comments-o"></i>
                <div class="service-desc">
                  <h3>Marketing</h3>
                  <p>Arma tu negocio - Conseguir clientas y fidelizarlas - Precios y como lograr mayores ganancias - Genera ingresos extras o vivi de ello!</p>
                </div>
              </div>
              <div class="col-md-4"> <i class="fa fa-bullhorn"></i>
                <div class="service-desc">
                  <h3>Asesoria</h3>
                  <p>Asesoramiento 1 año gratis! -Dudas procedimiento - Acceso ilimitado al curso - Potencia y mejora tu emprendimiento - Ideas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div id="portfolio" class="text-center">
          <div class="container">
            <div class="section-title">
              <h2>Sé una profesional</h2>
              <p>La estética es un negocio que si se trabaja bien es muy rentable, aunque parezca que hay miles de lugares y ya no se necesitan más, recorda que si te capacitas bien en lo que haces vas a lograr resartar tu trabajo y que te elijan por lo bien que lo haces. ÉXITO ASEGURADO.</p>
            </div>
            <div class="row">
              <div class="portfolio-items">
                <div class="col-sm-6 col-md-4 col-lg-4">
                  <div class="portfolio-item">
                    <div class="hover-bg"> <a href=".img/about.jpg" data-lightbox-gallery="gallery1">
                      <img src={img5} class="img-responsive" alt="Project Title"/> </a> </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                  <div class="portfolio-item">
                    <div class="hover-bg"> <a href="img/portfolio/02-large.jpg" data-lightbox-gallery="gallery1">
                      <img src={img3} class="img-responsive" alt="Project Title"/> </a> </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                  <div class="portfolio-item">
                    <div class="hover-bg"> <a href="img/portfolio/03-large.jpg"  data-lightbox-gallery="gallery1">
                      <img src={img4} class="img-responsive" alt="Project Title"/> </a> </div>
                  </div>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      
        <div id="testimonials">
          <div class="container">
            <div class="section-title text-center">
              <h2>Asesoría Online</h2>
              <p>¿En que consiste? Por un año vas a poder cominicarte para lo que necesites. Si te surgieron dudas sobre el procediminto de lifting, además de tener los videos para que los veas las veces que quieras, vas a poder consultarlo directamente con una profesional. También te vamos a ayudar a potenciar y mejorar tu negocio si te sentis estancada, no se te ocurren ideas y demás :)</p>
              <img src={asesoria} class="img-responsive" alt=""/>
            </div>
          </div>
        </div>
      
        <div id="team" class="text-center">
          <div class="container">
            <div class="col-md-8 col-md-offset-2 section-title">
              <h2>Certificación</h2>
              <p>Para obtener tu certificación online deberás mandar video del procedimiento realizado + fotos del antes y el después. Sino tenes la opción  de certificación presencial, terminada la cuarentena se realizara la demostración en el local.</p>
            </div>
          </div>
        </div>
       
        <div id="contact">
          <div class="container">
            <div class="col-md-8">
              <div class="row">
                <div class="section-title">
                  <h2>¡Contactanos!</h2>
                  <p>Escribinos por whatsapp recibir más información sobre este workshop</p>
                </div>
              {/*  <form name="sentMessage" id="contactForm" novalidate>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" id="name" class="form-control" placeholder="Nombre" required="required"/>
                        <p class="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea name="message" id="message" class="form-control" rows="4" placeholder="Mensaje"></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                  <div id="success"></div> */}
                  <a href="https://wa.me/5491153240431?text=Hola%20quiero%20unirme%20al%20workshop%20de%20Pro%20Lash%20Lifting!%20Quiero%20más%20info%20:)">
                    <button class="btn btn-custom btn-lg">Envíar mensaje</button>
                  </a>
                {/*</form> */}
              </div>
            </div>
            <div class="col-md-3 col-md-offset-1 contact-info">
              <div class="contact-item">
                <h3>Contacto</h3>
                <p><span><i class="fa fa-map-marker"></i> Direc</span>
                  San Francisco Solano</p>
              </div>
              <div class="contact-item">
                <p><span><i class="fa fa-phone"></i> Wp</span> 1137637464</p>
              </div>
              <div class="contact-item">
                <p><span><i class="fa fa-envelope-o"></i> Email</span> rosebeautybar@info.com</p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="row">
                <div class="social">
                  <ul>
                    <h3>¡Seguinos en las redes!</h3>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/rose_beauty.bar/"><i class="fa fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="footer">
          <div class="container text-center">
            <p>&copy; 2020. Design by <a href="#" rel="nofollow">Shaems</a></p>
          </div>
        </div>
        <script type="text/javascript" src="js/jquery.1.11.1.js"></script> 
        <script type="text/javascript" src="js/bootstrap.js"></script> 
        <script type="text/javascript" src="js/SmoothScroll.js"></script> 
        <script type="text/javascript" src="js/nivo-lightbox.js"></script> 
        <script type="text/javascript" src="js/jqBootstrapValidation.js"></script> 
        <script type="text/javascript" src="js/contact_me.js"></script> 
        <script type="text/javascript" src="js/main.js"></script>
        

    </div>
  );
}

export default App;
