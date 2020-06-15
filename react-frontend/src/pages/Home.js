import React from 'react';
import '../css/Home.css';

import { Link } from 'react-router-dom';

function Home() {
  
    return (
        <div className="Background-home-page">
            
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" /></a><button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i class="fa fa-bars ml-1"></i></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ml-auto">
                            <Link to="/loginhome/explore">
                                <li class="nav-item"><a class="nav-link js-scroll-trigger">Services</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <header class="masthead">
                <div class="container">
                    <div class="masthead-subheading">5300 Colleges. 20+ Applications.</div>
                    <div class="masthead-heading text-uppercase">One Site.</div>
                    <Link to="/loginhome/login">
                            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger">Sign In</a>
                    </Link>
                </div>
            </header>
            
            <section class="page-section bg-light" id="team">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 class="section-subheading text-muted">The great founders of Red Pandas</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="" />
                                <h4>Ashwin Kumar</h4>
                                <p class="text-muted">Berkeley student</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-linkedin-square"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="" />
                                <h4>Mihir Gupta</h4>
                                <p class="text-muted">UCSD Student</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-linkedin-square"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="" />
                                <h4>Andrew Kim</h4>
                                <p class="text-muted">Pro Gamer</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="#!"><i class="fa fa-linkedin-square"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
            </section>
            
            <div class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/envato.jpg" alt="" /></a>
                        </div>
                        <div class="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></a>
                        </div>
                        <div class="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></a>
                        </div>
                        <div class="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <section class="page-section" id="contact">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Contact Us</h2>
                        <h3 class="section-subheading text-muted">We will be happy to hear your feedback!</h3>
                    </div>
                    <form id="contactForm" name="sentMessage" novalidate="novalidate">
                        <div class="row align-items-stretch mb-5">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group">
                                    <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group mb-md-0">
                                    <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-group-textarea mb-md-0">
                                    <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <div id="success"></div>
                            <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Home;