import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Product/Product.css";
import { MDBView, MDBMask } from "mdbreact";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Image, Icon } from "semantic-ui-react";
import { getProducts, getProductDescription, getCart } from "../Redux/Actions/Action";
import { Link } from 'react-router-dom';

const Product = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('')
  let arr = []

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  return (
    <Fragment>
      <Container fluid className="top">
        <MDBView className="shop">
          <img
            className="d-block w-100 c-img"
            src="images/grey.png"
            alt="First slide"
          />
          <MDBMask overlay="black-light" />
          <p>Our Shop</p>
        </MDBView>
      </Container>
      <Container fluid className="product-container">
        <Row>
          <Col lg={3}>
            <div className="category_area">
              <aside className="categories">
                <div className="category_heading">
                  <h3>Categories</h3>
                </div>
                <div className="sub_categories">
                  <ul className="list">
                    <li>
                      <p>SHIRTS</p>
                      <span>(6)</span>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </Col>

          <Col lg={9}>
            <Row className="align-items-center">
              <Col lg={12}>
                <div className="search_bar d-flex justify-content-between align-items-center">
                  <div className="single_product_menu d-flex">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="search"
                        aria-describedby="inputGroupPrepend"
                        onChange={onSearchChange}
                      />
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          <Icon name="search" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center">
              {(products !== undefined && products !== null)
                && Object.keys(products).filter((product) => {
                  if(products[product].data().Name.toLowerCase().includes(search)) {
                    arr.push(products[product].data())
                    return arr
                  }
                })
                .map((index, i) => {
                  return (
                    <Col lg={4} sm={6} key={index} className="products-grid">
                      <Link to="/ProductDetails" 
                      onClick={() => { dispatch(getCart(arr[i]))  }}
                      >
                        <Card className="single_product_item">
                        <Image
                          className="product-image"
                          src={arr[i].ImageURL}
                          wrapped
                          ui={false}
                          alt={arr[i].Name}
                        />
                        <Card.Content className="single_product_text">
                          <Card.Header className="product_heading">
                            <h2>{arr[i].Name}</h2>
                          </Card.Header>
                          <Card.Description className="product_price">
                            <h3>Rs {arr[i].Price}</h3>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                      </Link>
                    </Col>
                  );
                  })
                }
            </Row>
          </Col>
        </Row>
        {/* <Link className = "addIcon" to="/AddProduct"> </Link>  */}
      </Container>
    </Fragment>
  );
};

export default Product;
