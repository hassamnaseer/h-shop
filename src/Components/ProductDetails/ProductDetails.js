import React, { Fragment } from "react";
import "./ProductDetails.css";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import $ from "jquery";
import { Link } from 'react-router-dom'
import "../Product/Product.css";
import { MDBView, MDBMask } from "mdbreact";
import { useSelector } from "react-redux";
import firebase from 'firebase/app';

const ProductDetails = (props) => {
  const cart = useSelector((state) => state.cart);
  let quantity = 1;
  const product = useSelector((state) => state.productDescription);
  const user = props.user;
  const db = firebase.firestore();
  

  const productCount = (el, operation) => {
    var min = el.attr("min") || false;
    var max = el.attr("max") || false;

    if (operation === "minus") {
      var value = el[0].value;
      value--;
      if (!min || value >= min) {
        el[0].value = value;
        quantity = value
      }
    } else if (operation === "plus") {
      var value = el[0].value;
      value++;
      if (!max || value <= max) {
        el[0].value = value;
        quantity = value
      }
    }
  };

  const add_to_cart = () => {
    const arr = []
    const arr1 = []
     db.collection("cart").doc('cart1').get().then((doc) => {
      doc.data().cart.map((c) => {
        arr.push(c.user)
        if (c.user === user) {
          c.products.map((p) => {
            arr1.push(p.productName)
          })
        }
      })
      doc.data().cart.map((c) => {
        const abc = c
        if(arr.includes(user)) {
          if (arr1.includes(product.Name)) {
            console.log('product already in cart')
          }
          else {
            if (c.user === user) {
              db.collection("cart").doc("cart1").update({
                cart: firebase.firestore.FieldValue.arrayRemove(c)
              })
              abc.products.push({productName: product.Name, quantity: quantity})
              db.collection("cart").doc("cart1").update({
                cart: firebase.firestore.FieldValue.arrayUnion(abc)
              })
            }
          }
        } else {
          abc.products.push({productName: product.Name, quantity: quantity})
          let a = []
          a.push({productName: product.Name, quantity: quantity})
          db.collection("cart").doc("cart1").update({
            cart: firebase.firestore.FieldValue.arrayUnion({products: a, user: user})
          })
        }
      })
    });
  }

  return (
    <Fragment>
      <Container fluid className="top">
        <MDBView className="des_top">
          <img
            className="d-block w-100 c-img"
            src="images/grey.png"
            alt="First slide"
          />
          <MDBMask overlay="black-light" />
          <p>Product Description</p>
        </MDBView>
      </Container>
      {product === null || product === undefined ? <h1 className="ifNoProduct">Please select a product first from <Link to="/Shop">Shop</Link></h1> :
      <Container>
        <Row className="s_product_inner justify-content-between">
          <Col lg={5} xl={5}>
            <div className="product_slider_img">
              <img src={product.ImageURL} />
            </div>
          </Col>
          <Col lg={7} xl={7}>
            <div className="s_product_text">
              <h3>{product.Name}</h3>
              <h2>Rs {product.Price}</h2>
              <ul className="list">
                <li>
                    Availibility : In Stock
                </li>
              </ul>
              <p>{product.Description}</p>
              <div className="card_area d-flex justify-content-start align-items-center">
                <div className="product_count">
                  <span className="number-decrement">
                    {" "}
                    <a
                      onClick={() => {
                        productCount($(".input-number"), "minus");
                      }}
                    >
                      <Icon name="minus" />
                    </a>
                  </span>
                  <input
                    className="input-number"
                    type="text"
                    value="1"
                    min="1"
                    max="10"
                  />
                  <span className="number-increment">
                    {" "}
                    <a
                      onClick={() => {
                        productCount($(".input-number"), "plus");
                      }}
                    >
                      <Icon name="plus" />
                    </a>
                  </span>
                </div>

                <a onClick={() => add_to_cart()} className="btn_3">
                  add to cart
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    }
    </Fragment>
  );
}

export default ProductDetails;
