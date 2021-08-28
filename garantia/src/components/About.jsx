import React from "react";
import Navbar from "./other/Navbar";
import {
    Facebook,
    GitHub,
    Instagram,
    Linkedin,
    Twitter,
    Twitch,
  } from "react-feather";
const About = () => {
  return (
    <div>
      <Navbar />
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="px-5">
                <img src="./images/about.svg" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="header">
                <h1>About Us</h1>
                <p>welcome to our world</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light about-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="py-5 about-body lh-lg">
                {" "}
                <h4>Our Story</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis voluptatem a repellat architecto veniam consequatur
                  quibusdam, repellendus incidunt omnis natus necessitatibus
                  sint quis quam voluptatum quae perferendis iure dicta sed?
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="px-4">
                <img src="./images/story.svg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-center">What is garantia?</h4>
            </div>
          </div>
          <div className="row about-what">
            <div className="col-md-6">
              <div className="px-4">
                <img src="./images/questions.svg" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div className=" lh-lg py-5 px-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  dolor alias harum perspiciatis debitis, placeat, reprehenderit
                  numquam porro in, eaque illum id repellendus. Illo vitae
                  quidem delectus ducimus odit laborum?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-light steps">
          <div className="row">
            <div className="col-md-12">
              <div className="text-dark text-center pb-3">
                <h4>How garantia works</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div class="card p-3" style={{ width: "18rem;" }}>
                <div>
                  {" "}
                  <img
                    src="./images/logingarantia.svg"
                    class="card-img-top  pt-4 px-2"
                    alt="..."
                  />
                </div>

                <div class="card-body text-light">
                    <h4 class="text-dark">Login</h4>
                  <p class="card-text text-dark pt-4 lh-base">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3" style={{ width: "18rem;" }}>
                <img
                  src="./images/register.svg"
                  class="card-img-top  pt-5 px-2"
                  alt="..."
                />
                <div class="card-body text-light">
                <h4 class="text-dark">Register</h4>
                  <p class="card-text text-dark pt-3 lh-base">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3" style={{ width: "18rem;" }}>
                <img src="./images/link.svg" class="card-img-top   px-4" alt="..." />
                <div class="card-body text-light">
                <h4 class="text-dark">Get Link</h4>
                  <p class="card-text text-dark pt-3 lh-base">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="securityimg px-5">
                <img src="./images/security.svg" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="securitytext lh-lg">
                <h4>Is my money safe?</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat aperiam ullam asperiores, tempore ut itaque
                  consectetur tenetur ad hic beatae debitis fugit magni totam
                  temporibus consequuntur adipisci culpa minus! Provident!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contacttext lh-lg px-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, rerum modi? Tempore unde deserunt earum magnam
                  quam, eligendi nesciunt! Sed, mollitia quae. Dolores ullam
                  eligendi, recusandae molestiae pariatur molestias id.
                </p>
                <div> 
                  <button className="btn btn-md btn-warning text-light fw-bold">Contact us</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="px-5">
                <img src="./images/contact.svg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="d-flex justify-content-between p-4 bg-warning">
        <div class="me-5">
          <span className="text-white">
            Get connected with us on social networks:
          </span>
        </div>

        <div>
          <a href="" class="text-white me-4">
            <Facebook />
          </a>
          <a href="" class="text-white me-4">
            <Twitter />
          </a>
          <a href="" class="text-white me-4">
            <Twitch />
          </a>
          <a href="" class="text-white me-4">
            <Instagram />
          </a>
          <a href="" class="text-white me-4">
            <Linkedin />
          </a>
          <a href="" class="text-white me-4">
            <GitHub />
          </a>
        </div>
      </section>
      <section>
        <footer class="page-footer font-small blue pt-4 bg-dark">
          <div class="container-fluid  text-md-left text-light">
            <div class="row py-5">
              <div class="col-md-6 mt-md-0 mt-3 text-center">
                <h5 class="text-light">garantia</h5>
                <p>
                  Keeping your transactions secure
                </p>
              </div>

              <hr class="clearfix w-100 d-md-none pb-3" />

              <div class="col-md-3 mb-md-0 mb-3 text-start">
                <p>Quick Links</p>

                <ul class="list-unstyled ">
                  <li className="me-2">
                    <a href="#!" className="text-decoration-none text-light">About Us</a>
                  </li>
                  <li className="me-2">
                    <a href="#!" className="text-decoration-none text-light">Contact Us</a>
                  </li>
                  <li className="me-2">
                    <a href="#!" className="text-decoration-none text-light">Privacy Policy</a>
                  </li>
                  <li className="me-2"> 
                    <a href="#!" className="text-decoration-none text-light">Terms and Condition</a>
                  </li>
                </ul>
              </div>

              <div class="col-md-3 mb-md-0 mb-3 text-start">
                <p>Services</p>

                <ul class="list-unstyled">
                  <li className="me-2">
                    <a href="#!" className="text-decoration-none text-light">Connect</a>
                  </li>
                  <li className="me-2">
                    <a href="#!" className="text-decoration-none text-light">Security</a>
                  </li>
                  <li className="me-2">
                    <a href="#!" className="text-decoration-none text-light">Payment</a>
                  </li>
                  {/* <li>
                    <a href="#!" className="text-decoration-none text-light">Link 4</a>
                  </li> */}
                </ul>
              </div> 
            </div>
          </div>
 <hr className="text-light px-4"/>
          <div class="footer-copyright text-center py-3 text-light text-decoration-none">
            © 2021 Copyright:
            <a href="https://mdbootstrap.com/" className="text-decoration-none text-light"> garantia.com</a>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default About;
