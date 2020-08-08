import React, { useState} from "react";
import "./LoginSignup.css";
import { Col, Container, Row } from "react-bootstrap";
import { MDBInput, MDBBtn } from "mdbreact";
import { Label, Modal, Dimmer, Loader } from 'semantic-ui-react';
import { BtnStyle } from './BtnStyle.js';
import { auth } from '../Config/Fire';
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [modalMsg, setModalMsg] = useState("");
  const [modal, setModal] = useState(false);
  const [loader, showLoader] = useState(false);

  const hideModal = () => {
    setTimeout(() => {
      setModal(false);
    }, 10000);
  };

  const loginWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();

    if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      setEmailError(true);
      document.getElementById('email').classList.add('error');
    }
    else if(password.length < 6 ) {
      setPasswordError(true);
      document.getElementById('password').classList.add('error');
    }
    else {
      auth.signInWithEmailAndPassword(email, password).then(() => {
        console.log("Login Success");
        showLoader(true);
      }).catch(error => {
        console.error("Error signing in with password and email", error);
        setModalMsg(error.message)
        setModal(true)
        hideModal();
      });
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
    document.getElementById('email').classList.remove('error');
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(false);
    document.getElementById('password').classList.remove('error');
  }

  return (
    <div>

      {loader && <Dimmer active inverted>
        <Loader size='large'></Loader>
      </Dimmer>}
      <Container>
      <Modal
        className="text-center"
        open={modal}
        onClose={() => setModal(false)}
        content={modalMsg + " Please try again!"}
      />
        <Row className="h">
          <Col lg="3">
            <img src="images/logo-01.png" alt="logo" />
          </Col>
        </Row>
        <Row className="h">
          <Col lg="5">
            <form>
              <p className="heading text-center py-1">Login</p>
              <div className="grey-text">
                {emailError && <Label pointing='below'>Please enter a valid Email</Label>}
                <MDBInput
                  label="Your Email"
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  required
                  onChange={handleEmailChange}
                  value={email}
                  id="email"
                />
                {passwordError && <Label pointing='below'>Please enter a valid Password</Label>}
                <MDBInput
                  label="Password"
                  type="password"
                  validate
                  error="wrong"
                  success="right"
                  required
                  onChange={handlePasswordChange}
                  value={password}
                  id="password"
                />
              </div>
              <div className="text-center py-4 mt-3">
              <BtnStyle><MDBBtn type="submit" onClick={(event) => {loginWithEmailAndPasswordHandler(event, email,password)}}>
                  Login
                </MDBBtn></BtnStyle>
                <p>or Create an account! <Link id="a" to="/signup"><strong>Sign Up</strong></Link></p>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
