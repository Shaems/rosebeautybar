import React from 'react';
import logo from './logo.svg';

import './css/bootstrap.css';
import './fonts/font-awesome/css/font-awesome.css';
import './App.css';
import './img/about.jpg'

function App() {
  return (
    <div>

        <title>Rose BeautyBar</title>
        
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
                <li><a href="#about" class="page-scroll">About</a></li>
                <li><a href="#services" class="page-scroll">Contenido</a></li>
                <li><a href="#portfolio" class="page-scroll">Gallery</a></li>
                <li><a href="#testimonials" class="page-scroll">Testimonials</a></li>
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
                    <a href="#features" class="btn btn-custom btn-lg page-scroll">Más info</a> </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
       
       
        <div id="about">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6"> <img src="./img/about.jpg" class="img-responsive" alt=""/> </div>
              <div class="col-xs-12 col-md-6">
                <div class="about-text">
                  <h2>Workshop Online</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <h3>¿Qué incluye este curso?</h3>
                  <div class="list-style">
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        <li>Lorem ipsum dolor</li>
                        <li>Tempor incididunt</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Incididunt ut labore</li>
                      </ul>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-xs-12">
                      <ul>
                        <li>Aliquip ex ea commodo</li>
                        <li>Lorem ipsum dolor</li>
                        <li>Exercitation ullamco</li>
                        <li>Lorem ipsum dolor</li>
                      </ul>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div class="row">
              <div class="col-md-4"> <i class="fa fa-wordpress"></i>
                <div class="service-desc">
                  <h3>Lorem ipsum dolor</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                </div>
              </div>
              <div class="col-md-4"> <i class="fa fa-cart-arrow-down"></i>
                <div class="service-desc">
                  <h3>Consectetur adipiscing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div class="col-md-4"> <i class="fa fa-cloud-download"></i>
                <div class="service-desc">
                  <h3>Lorem ipsum dolor</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4"> <i class="fa fa-language"></i>
                <div class="service-desc">
                  <h3>Consectetur adipiscing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                </div>
              </div>
              <div class="col-md-4"> <i class="fa fa-plane"></i>
                <div class="service-desc">
                  <h3>Lorem ipsum dolor</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                </div>
              </div>
              <div class="col-md-4"> <i class="fa fa-pie-chart"></i>
                <div class="service-desc">
                  <h3>Consectetur adipiscing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div id="portfolio" class="text-center">
          <div class="container">
            <div class="section-title">
              <h2>Gallery</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div class="row">
              <div class="portfolio-items">
                <div class="col-sm-6 col-md-4 col-lg-4">
                  <div class="portfolio-item">
                    <div class="hover-bg"> <a href="img/portfolio/01-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                      <div class="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img src="img/portfolio/01-small.jpg" class="img-responsive" alt="Project Title"/> </a> </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                  <div class="portfolio-item">
                    <div class="hover-bg"> <a href="img/portfolio/02-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                      <div class="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img src="img/portfolio/02-small.jpg" class="img-responsive" alt="Project Title"/> </a> </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                  <div class="portfolio-item">
                    <div class="hover-bg"> <a href="img/portfolio/03-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                      <div class="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img src="img/portfolio/03-small.jpg" class="img-responsive" alt="Project Title"/> </a> </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                  <div class="portfolio-item">
                    <div class="hover-bg"> <a href="img/portfolio/04-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                      <div class="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img src="img/portfolio/04-small.jpg" class="img-responsive" alt="Project Title"/> </a> </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                  <div class="portfolio-item">
                    <div class="hover-bg"> <a href="img/portfolio/05-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                      <div class="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img src="img/portfolio/05-small.jpg" class="img-responsive" alt="Project Title"/> </a> </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                  <div class="portfolio-item">
                    <div class="hover-bg"> <a href="img/portfolio/06-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                      <div class="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img src="img/portfolio/06-small.jpg" class="img-responsive" alt="Project Title"/> </a> </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                  <div class="portfolio-item">
                    <div class="hover-bg"> <a href="img/portfolio/07-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                      <div class="hover-text">
                        <h4>Dolor Sit</h4>
                      </div>
                      <img src="img/portfolio/07-small.jpg" class="img-responsive" alt="Project Title"/> </a> </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                  <div class="portfolio-item">
                    <div class="hover-bg"> <a href="img/portfolio/08-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                      <div class="hover-text">
                        <h4>Lorem Ipsum</h4>
                      </div>
                      <img src="img/portfolio/08-small.jpg" class="img-responsive" alt="Project Title"/> </a> </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                  <div class="portfolio-item">
                    <div class="hover-bg"> <a href="img/portfolio/09-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                      <div class="hover-text">
                        <h4>Adipiscing Elit</h4>
                      </div>
                      <img src="img/portfolio/09-small.jpg" class="img-responsive" alt="Project Title"/> </a> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div id="testimonials">
          <div class="container">
            <div class="section-title text-center">
              <h2>What our clients say</h2>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="testimonial">
                  <div class="testimonial-image"> <img src="img/testimonials/01.jpg" alt=""/> </div>
                  <div class="testimonial-content">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
                    <div class="testimonial-meta"> - John Doe </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="testimonial">
                  <div class="testimonial-image"> <img src="img/testimonials/02.jpg" alt=""/> </div>
                  <div class="testimonial-content">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis."</p>
                    <div class="testimonial-meta"> - Johnathan Doe </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="testimonial">
                  <div class="testimonial-image"> <img src="img/testimonials/03.jpg" alt=""/> </div>
                  <div class="testimonial-content">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
                    <div class="testimonial-meta"> - John Doe </div>
                  </div>
                </div>
              </div>
              <div class="row"> </div>
              <div class="col-md-4">
                <div class="testimonial">
                  <div class="testimonial-image"> <img src="img/testimonials/04.jpg" alt=""/> </div>
                  <div class="testimonial-content">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
                    <div class="testimonial-meta"> - Johnathan Doe </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="testimonial">
                  <div class="testimonial-image"> <img src="img/testimonials/05.jpg" alt=""/> </div>
                  <div class="testimonial-content">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."</p>
                    <div class="testimonial-meta"> - John Doe </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="testimonial">
                  <div class="testimonial-image"> <img src="img/testimonials/06.jpg" alt=""/> </div>
                  <div class="testimonial-content">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis."</p>
                    <div class="testimonial-meta"> - Johnathan Doe </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div id="team" class="text-center">
          <div class="container">
            <div class="col-md-8 col-md-offset-2 section-title">
              <h2>Meet the Team</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div id="row">
              <div class="col-md-3 col-sm-6 team">
                <div class="thumbnail"> <img src="img/team/01.jpg" alt="..." class="team-img"/>
                  <div class="caption">
                    <h4>John Doe</h4>
                    <p>Director</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 team">
                <div class="thumbnail"> <img src="img/team/02.jpg" alt="..." class="team-img"/>
                  <div class="caption">
                    <h4>Mike Doe</h4>
                    <p>Senior Designer</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 team">
                <div class="thumbnail"> <img src="img/team/03.jpg" alt="..." class="team-img"/>
                  <div class="caption">
                    <h4>Jane Doe</h4>
                    <p>Senior Designer</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-6 team">
                <div class="thumbnail"> <img src="img/team/04.jpg" alt="..." class="team-img"/>
                  <div class="caption">
                    <h4>Karen Doe</h4>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div id="contact">
          <div class="container">
            <div class="col-md-8">
              <div class="row">
                <div class="section-title">
                  <h2>Get In Touch</h2>
                  <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
                </div>
                <form name="sentMessage" id="contactForm" novalidate>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="text" id="name" class="form-control" placeholder="Name" required="required"/>
                        <p class="help-block text-danger"></p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input type="email" id="email" class="form-control" placeholder="Email" required="required"/>
                        <p class="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea name="message" id="message" class="form-control" rows="4" placeholder="Message" required></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" class="btn btn-custom btn-lg">Send Message</button>
                </form>
              </div>
            </div>
            <div class="col-md-3 col-md-offset-1 contact-info">
              <div class="contact-item">
                <h3>Contact Info</h3>
                <p><span><i class="fa fa-map-marker"></i> Address</span>4321 California St,<br/>
                  San Francisco, CA 12345</p>
              </div>
              <div class="contact-item">
                <p><span><i class="fa fa-phone"></i> Phone</span> +1 123 456 1234</p>
              </div>
              <div class="contact-item">
                <p><span><i class="fa fa-envelope-o"></i> Email</span> info@company.com</p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="row">
                <div class="social">
                  <ul>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="footer">
          <div class="container text-center">
            <p>&copy; 2020 Interact. Design by <a href="http://www.templatewire.com" rel="nofollow">Shaems</a></p>
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