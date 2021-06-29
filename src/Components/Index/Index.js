import React, { Fragment } from "react";
import "./Index.css";
import { Route } from "react-router-dom";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Home from "../Home/Home.js";
import Product from "../Product/Product.js";
import Contact from "../Contact/Contact.js";
import About from "../About/About.js";
import AddProduct from "../AddProduct/AddProduct";
import ProductDetails from "../ProductDetails/ProductDetails";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";

const Index = (props) => {
  console.log(props.user);
  return (
    <Fragment>
      <Header user={props.user.uid} />
      <Route exact path="/" render={() => <Home />} />

      <Route exact path="/Shop" render={() => <Product />} />

      <Route exact path="/Contact" render={() => <Contact />} />

      <Route exact path="/About" render={() => <About />} />

      <Route exact path="/AddProduct" render={() => <AddProduct />} />

      <Route exact path="/ProductDetails" render={() => <ProductDetails user={props.user.uid} />} />

      <Route exact path="/Cart" render={() => <Cart user={props.user.uid} />} />

      <Route exact path="/Checkout" render={() => <Checkout user={props.user} />} />
      <Footer />
    </Fragment>
  );
};

export default Index;
