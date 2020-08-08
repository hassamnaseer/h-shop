import React, { Fragment } from "react";
import './About.css';
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Fragment>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="8">
            <h2 className="heading-1">About H-Shop</h2>
            <p className="about">
              H-Shop is an e-commerce portfolio project by <a href="https://www.fiverr.com/hassamnaseer/" target="_blank" rel="noopener noreferrer">Hassam Naseer</a>.
              H-Shop is developed in React JS with <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">Google's Firebase</a> support for authorization(Login/Signup) and to store products and images.
              <br /><br />
              This Single Page Application is developed using best programming practices, optimization and true essence of React JS. This project is developed in a way that with just a minor changes,
              it can be used as a ready to go project for anyone.
              <br /><br />
              As this is just a sort of demo project, there was no need for making a checkout component. This component can easily be made as it just requires a form and some email service without backend like EmailJS or can be made in Express as well.
            </p>

            <h2 className="heading-1">About Developer</h2>
            <p className="about">
              I am an experienced and passionate Web Designer and Developer. I Specialize in developing Single Page Applications with ReactJS, Redux and Redux Thunk.
              Being a CS graduate, I have lots of experience and training in development with best possible practices to provide high-end applications to boost your business. <br /><br />
              I have been developing websites using HTML/CSS and JavaScript for a long time and now I specialize in ReactJS with lots of knowledge and experience.
              I have also worked in RestAPI and backend development so I can also understand any errors, if they occur, when integrating APIs to the frontend. <br /><br />
              Please feel free to check my profile on <a href="https://www.fiverr.com/hassamnaseer/" target="_blank" rel="noopener noreferrer">Fiverr</a> &nbsp;
              &amp; &nbsp; <a href="https://www.upwork.com/o/profiles/users/~01e92bfedcd19ace51/" target="_blank" rel="noopener noreferrer">Upwork</a>
            </p>

            <h2 className="heading-1">Attributions</h2>
            <p className="about">
              As this is just a portfolio project so I had to use images from another website. I used images and product names from <a href="https://fadano.com/" target="_blank" rel="noopener noreferrer">Fadano</a>.<br /><br />
              In the Home page (sale section), I used this <a href='https://www.freepik.com/free-photos-vectors/watercolor' target="_blank" rel="noopener noreferrer">Watercolor vector created by freepik - www.freepik.com</a>.<br /><br />
              As for the carousel images and some other pages top backgrounds, I used images which are all as follows:<br /><br />
              <ul>
              <li><span>Photo by <a href="https://unsplash.com/@artificialphotography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Artificial Photography</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a></span></li>
              <li><span>Photo by <a href="https://unsplash.com/@belart84?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Artem Beliaikin</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a></span></li>
              <li><span>Photo by <a href="https://unsplash.com/@derickray?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Derick McKinney</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a></span></li>
              <li><span>Photo by <a href="https://unsplash.com/@derickray?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Derick McKinney</a> on <a href="https://unsplash.com/photos/cmbbXRjYUZA?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a></span></li>
              <li><span>Photo by <a href="https://unsplash.com/@randomlies?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Ashim D’Silva</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a></span></li>
              </ul>

              I give thanks to all owners of these resources and if I have missed any attribution, I apologize to the owner and can contact me to remove them or add them to the attributions.
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default About