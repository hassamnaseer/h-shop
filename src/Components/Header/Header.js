import React, { Fragment, useEffect, useState } from 'react';
import './Header.css';
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import { auth } from "../Config/Fire.js";
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';

const Header = (props) => {
  const [hamBtn, setHamBtn] = useState();
  const [cartQuantity, setCartQuantity] = useState(0)
  const db = firebase.firestore();

  useEffect(() => {
    setHamBtn(document.querySelector('.menu-btn'));
    db.collection("cart").doc('cart1').get().then((doc) => {
      doc.data().cart.map((c) => {
        if (c.user === props.user) {
          setCartQuantity(c.products.length)
        }
      })
    })
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerClicked = () => {
    document.querySelector('nav ul').classList.toggle('show');
    if(!menuOpen) {
      hamBtn.classList.add('open');
      setMenuOpen(true);
    } else {
      hamBtn.classList.remove('open');
      setMenuOpen(false);
    }
  }

  return (
    <Fragment>
      <header>
        <Container fluid className="header-container">
          <Row className="align-items-center">
            <Col lg="12">
              <nav className="top-header">
                <a href="/"><img src="images/logo-01.png" alt="logo" /></a>

                  <ul className="header-ul">
                    <li><Link to="/" onClick={() => burgerClicked() }>Home</Link></li>
                    <li><Link to="/Shop" onClick={() =>  burgerClicked()}>Shop</Link></li>
                    <li><Link to="/Contact" onClick={() =>  burgerClicked()}>Contact</Link></li>
                    <li><Link to="/About" onClick={() =>  burgerClicked()}>About</Link></li>
                    <li><Link to="/Cart" onClick={() =>  burgerClicked()}><Icon name="cart" /><p className="cartAmount">{cartQuantity}</p></Link></li>
                    <li><Link to="/" className="btn2"  onClick={() => auth.signOut()}>Logout</Link></li>
                  </ul>

                  <Link to="/" className="btn1"  onClick={() => auth.signOut()}>Logout</Link>

                  <div className="menu-btn" onClick={() => burgerClicked()}>
                    <div className="btn-burger"></div>
                  </div>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>
    </Fragment>
  )
}

export default Header