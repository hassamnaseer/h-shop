import React, { Fragment } from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <hr />
        <div className="main-content">
          <div className="left box">
            <a href="/"><img src="images/logo-03.png" alt="logo" /></a>
          </div>

          <Container fluid>
            <Row lg={2}>
              <Col sm={5}>
                <div className="center box">
                  <h2>Expertise</h2>
                  <div className="content">
                    <ul>
                      <li>HTML & CSS</li>
                      <li>JavaScript</li>
                      <li>React JS</li>
                      <li>Firebase</li>
                      <li>Python Django</li>
                      <li>Node.JS</li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col sm={7}>
                <div className="center box">
                  <h2>Services</h2>
                  <div className="content">
                    <ul>
                      <li>Custom Designing</li>
                      <li>PSD to HTML as a SPA</li>
                      <li>Frontend Development</li>
                      <li>API Integration</li>
                      <li>Logo Designing</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
            

          <div className="right box">
            <h2>About H-Shop</h2>
            <div className="content">
              <p>H-Shop is an e-commerce portfolio project by <a href="https://www.fiverr.com/hassamnaseer/" target="_blank" rel="noopener noreferrer">Hassam Naseer</a>. H-Shop is developed
              in React JS with <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Google's Firebase</a> support for authorization(Login/Signup) and to store products and images. Read about more in <a href="/">About</a> Section.</p>
              <div className="social">
                <a href="https://www.facebook.com/hassam.naseer/" target="_blank" rel="noopener noreferrer"><Icon size='huge' name="facebook" /></a>
                <a href="https://www.instagram.com/hassamnaseer2326/" target="_blank" rel="noopener noreferrer"><Icon size='huge' name="instagram" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <center>
            <span className="credit">
              Created by <a href="https://www.fiverr.com/hassamnaseer/" target="_blank" rel="noopener noreferrer">Hassam Naseer</a>{"  "}|{" "}
            </span>
            <span className="credit">
              &copy; {new Date().getFullYear()}{" "}All rights reserved
            </span>
          </center>
        </div>

































        {/* <Container>
          <Row>
            <Col lg="5">
              <nav className="footer">
              <img className="footer-img" src="images/logo-01.png" alt="logo" />

              <ul className="footer-ul">
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
              </ul>

              <ul className="footer-ul">
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
              </ul>

              <ul className="footer-ul">
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
              </ul>
              </nav>
            </Col>
          </Row>
        </Container> */}
      </footer>
    </Fragment>
  );
};

export default Footer;
