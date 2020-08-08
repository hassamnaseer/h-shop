import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import $ from "jquery";
import "../Product/Product.css";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { getLatestProducts, getCart } from "../Redux/Actions/Action";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const products = useSelector((state) => state.latestProducts);
  const dispatch = useDispatch();
  const [showTimer, setShowTimer] = useState(true);
  var interval = 0;
  let arr = []

  useEffect(() => {
    dispatch(getLatestProducts());
    interval = setInterval(function () {
      makeTimer();
    }, 1000);
  }, []);

  function makeTimer() {
    var endTime = new Date("30 September 2020 23:59:59 GMT+05:00");
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;

    if (timeLeft === 0) {
      clearInterval(interval);
      setShowTimer(false);
    }

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#days").html("<span>Days</span>" + days);
    $("#hours").html("<span>Hours</span>" + hours);
    $("#minutes").html("<span>Minutes</span>" + minutes);
    $("#seconds").html("<span>Seconds</span>" + seconds);
  }

  return (
    <Fragment>
      {products !== undefined &&
        products !== null &&
        Object.keys(products).map((index, product) => {
          arr.push(products[product].data())
        })}

      <MDBContainer fluid className="home-container">
        <MDBCarousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView className="item1">
                <img
                  className="d-block w-100 c-img"
                  src="images/grey.png"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption className="caption-0">
                <h3 className="h3-responsive">
                  Introducing a fast range of Clothing products.
                  <br />
                  Our vast collection has always been up to the standards so we
                  can provide our customers with the best.
                </h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="2">
              <MDBView className="item2">
                <img
                  className="d-block w-100 c-img"
                  src="images/grey.png"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption className="caption-1">
                <h3 className="h3-responsive">
                  Are you looking for awesome T-Shirts, Polo Shirts and many
                  more? <br />
                  Look no Further!
                  <br />
                  <br />
                </h3>
              </MDBCarouselCaption>
              <MDBCarouselCaption className="caption-2">
                <h3 className="h3-responsive">
                  <Link id="shop" to="/Shop">
                    <span>Shop Now</span>
                  </Link>
                </h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="3">
              <MDBView className="item3">
                <img
                  className="d-block w-100 c-img"
                  src="images/grey.png"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption className="caption-1">
                <h3 className="h3-responsive">
                  We have an awesome variety of Jeans and Cotton Pants. <br />
                  Let's have a look, shall we?
                  <br />
                  <br />
                </h3>
              </MDBCarouselCaption>
              <MDBCarouselCaption className="caption-2">
                <h3 className="h3-responsive">
                  <Link id="shop" to="/Shop">
                    <span>Shop Now</span>
                  </Link>
                </h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="4">
              <MDBView className="item4">
                <img
                  className="d-block w-100 c-img"
                  src="images/grey.png"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption className="caption-1">
                <h3 className="h3-responsive">
                  We also provide you with best quality winter products! <br />
                  Excited? Come, let's see what we got for you!
                  <br />
                  <br />
                </h3>
              </MDBCarouselCaption>
              <MDBCarouselCaption className="caption-2">
                <h3 className="h3-responsive">
                  <Link id="shop" to="/Shop">
                    <span>Shop Now</span>
                  </Link>
                </h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>

      <Container fluid className="product-container latest-product-container">
        <Row>
          <Col lg={12}>
            <Row className="align-items-center">
              <Col lg={12}>
                <h3 id="latest-products">Latest Products</h3>
              </Col>
            </Row>

            <Row className="align-items-center">
              {products !== undefined &&
                products !== null &&
                Object.keys(products).map((index, product) => {
                  return (
                    <Col lg={3} sm={6} key={index} className="products-grid">
                      <Link
                        to="/ProductDetails"
                        onClick={() => {
                          dispatch(getCart(arr[index]));
                        }}
                      >
                        <Card className="single_product_item">
                          <Image
                            className="product-image"
                            src={products[product].data().ImageURL}
                            wrapped
                            ui={false}
                            alt={products[product].data().Name}
                          />
                          <Card.Content className="single_product_text">
                            <Card.Header className="product_heading">
                              <h2>{products[product].data().Name}</h2>
                            </Card.Header>
                            <Card.Description className="product_price">
                              <h3>Rs {products[product].data().Price}</h3>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Link>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Container>

      {showTimer && (
        <section className="our_offer section_padding">
          <Container fluid>
            <Row className="align-items-center justify-content-between">
              <Col className="align-items-center" lg={6} md={6}>
                <div className="offer_img">
                  <img src="images/sale-01-01.png" alt="" />
                </div>
              </Col>
              <Col lg={6} md={6}>
                <div className="offer_text">
                  <h2>
                    <q>30% Off on All Products</q>
                  </h2>
                  <div className="date_countdown">
                    <div id="timer">
                      <div id="days" className="date"></div>
                      <div id="hours" className="date"></div>
                      <div id="minutes" className="date"></div>
                      <div id="seconds" className="date"></div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      <Container fluid className="product-container latest-product-container">
        <Row>
          <Col lg={12}>
            <Row className="align-items-center">
              <Col lg={12}>
                <h3 id="latest-products">Top Products</h3>
              </Col>
            </Row>

            <Row className="align-items-center">
              {products !== undefined &&
                products !== null &&
                Object.keys(products).map((index, product) => {
                  return (
                    <Col lg={3} sm={6} key={index} className="products-grid">
                      <Link
                        to="/ProductDetails"
                        onClick={() => {
                          dispatch(getCart(arr[index]));
                        }}
                      >
                        <Card className="single_product_item">
                          <Image
                            className="product-image"
                            src={products[product].data().ImageURL}
                            wrapped
                            ui={false}
                            alt={products[product].data().Name}
                          />
                          <Card.Content className="single_product_text">
                            <Card.Header className="product_heading">
                              <h2>{products[product].data().Name}</h2>
                            </Card.Header>
                            <Card.Description className="product_price">
                              <h3>Rs {products[product].data().Price}</h3>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </Link>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
