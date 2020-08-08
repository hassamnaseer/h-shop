import React, { useState } from "react";
import "./LoginSignup.css";
import { Col, Container, Row } from "react-bootstrap";
import { MDBInput, MDBBtn  } from "mdbreact";
import { auth, generateUserDocument } from "../Config/Fire";
import { BtnStyle } from './BtnStyle.js'
import { Link } from 'react-router-dom';
import { Label, Modal } from 'semantic-ui-react'
const Signup = () => {

  const [firstName, setFirstName] = useState("");
  const [fNameError, setFNameError] = useState(false);

  const [secondName, setSecondName] = useState("");
  const [sNameError, setSNameError] = useState(false);
  
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  
  const [modalMsg, setModalMsg] = useState("");
  const [modal, setModal] = useState(false);
  
  const hideModal = () => {
    setTimeout(() => {
      setModal(false);
    }, 10000);
  }
  const handleFNameChange = (event) => {
    setFirstName(event.target.value);
    setFNameError(false);
    document.getElementById('firstName').classList.remove('error');
  }

  const handleSNameChange = (event) => {
    setSecondName(event.target.value);
    setSNameError(false);
    document.getElementById('secondName').classList.remove('error');
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

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordError(false);
    document.getElementById('confirmPassword').classList.remove('error');
    if(event.target.value === password) {
      document.getElementById('password').classList.remove('error');
    }
  }

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();

    if(firstName === "") {
      setFNameError(true);
      document.getElementById('firstName').classList.add('error');
    }

    else if(secondName === "") {
      setSNameError(true);
      document.getElementById('secondName').classList.add('error');
    }

    else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      setEmailError(true);
      document.getElementById('email').classList.add('error');
    }

    else if(password.length < 6 ) {
      setPasswordError(true);
      document.getElementById('password').classList.add('error');
    }

    else if(confirmPassword.length < 6) {
      setConfirmPasswordError(true);
      document.getElementById('confirmPassword').classList.add('error');
    }

    else if(password !== confirmPassword) {
      setConfirmPasswordError(true);
      document.getElementById('confirmPassword').classList.add('error');
    }

    else {
      try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        generateUserDocument(user, {firstName, secondName});
        
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setFirstName("");
        setSecondName("");
      } catch (error) {
        console.error(error);
        setModalMsg(error.message)
        setModal(true)
        hideModal();
      }
    }
  };

  return (
    <div>
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
              <p className="heading text-center py-1">Sign Up</p>
              <div className="grey-text">
              
              {fNameError && <Label pointing='below'>Please enter a valid First Name</Label>}
                <MDBInput
                  label="First Name"
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  required
                  onChange={handleFNameChange}
                  value={firstName}
                  id="firstName"
                />
                
                {sNameError && <Label pointing='below'>Please enter a valid Last Name</Label>}
                <MDBInput
                  label="Second Name"
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  required
                  onChange={handleSNameChange}
                  value={secondName}
                  id="secondName"
                />
                
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
                
                {confirmPasswordError && <Label pointing='below'>Password Mismatch</Label>}
                <MDBInput
                  label="Confirm Password"
                  type="password"
                  validate
                  error="wrong"
                  success="right"
                  onChange={handleConfirmPasswordChange}
                  value={confirmPassword}
                  required
                  id="confirmPassword"
                />
              </div>
              <div className="text-center py-4 mt-3">
              <BtnStyle><MDBBtn type="submit" 
              onClick={(event) => {createUserWithEmailAndPasswordHandler(event, email, password)}}>
                  Sign Up
                </MDBBtn>
                <p>Already a user? <Link id="a" to="/"><strong>Login</strong></Link></p></BtnStyle>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
