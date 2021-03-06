import React, { Fragment, useEffect, useState } from "react";
import "./Cart.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCart, sendTotalToCheckout } from "../Redux/Actions/Action";
import { Icon } from "semantic-ui-react";
import $ from "jquery";
import firebase from "firebase/app";
import { Link } from "react-router-dom";

const Cart = (props) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	const [length, setLength] = useState(0);
	const [cartProducts, setCartProducts] = useState();
  const [cartProductsQuantity, setCartProductsQuantity] = useState();

	let total1 = 0;
	const db = firebase.firestore();
	const user = props.user;
	let currentProductQuantity = 0;
	const cartToCheckout = {total: total1, products: [], temp: []};
	const cart_p = [];
  const cart_p_q = [];
  const cart_temp = [];
  
  const [tempProductsQuantity, setTemp] = useState([])

	useEffect(() => {
		db.collection("cart")
			.doc("cart1")
			.get()
			.then((doc) => {
				doc.data().cart.map((c) => {
					const abc = c;
					if (c.user === user) {
						c.products.map((product) => {
							db.collection("test")
								.doc(product.productName)
								.get()
								.then((doc) => {
									cart_p.push(doc.data());
                  cart_p_q.push(product.quantity);
                  cart_temp.push({
										quantity: product.quantity,
										product: product.productName,
									});
									setCartProductsQuantity(cart_p_q);
									setCartProducts(cart_p);
                  setLength(cart_p.length);
                  setTemp(cart_temp)
                  console.log(cart_temp);
								});
						});
					}
				});
			});
	}, []);

	const productCount = (el, operation, index, m) => {
		var min = el.attr("min") || false;
		var max = el.attr("max") || false;

		if (operation === "minus") {
			var value = el[index].placeholder;
			value--;
			if (!min || value >= min) {
				el[index].value = value;
				el[index].placeholder = value;
				document.getElementById("data" + index).innerHTML = m * value;
				document.getElementById("total").innerHTML =
					parseInt(document.getElementById("total").innerHTML) - m;
			}
		} else if (operation === "plus") {
			var value = el[index].placeholder;
			value++;
			if (!max || value <= max) {
				el[index].value = value;
				el[index].placeholder = value;
				document.getElementById("data" + index).innerHTML = m * value;
				document.getElementById("total").innerHTML =
					parseInt(document.getElementById("total").innerHTML) + m;
			}
		}
  };
  
  const calculate = () => {
    cartToCheckout.temp = tempProductsQuantity
    console.log(cartToCheckout);
    dispatch(sendTotalToCheckout(cartToCheckout));
  }

	return (
		<Fragment>
			<section className="cart_area">
				<Container className="cart_container">
					<div className="cart_inner">
						<Row>
							<Col>
								<Table responsive="sm">
									<thead>
										<tr>
											<th scope="col">Product</th>
											<th scope="col">Price</th>
											<th scope="col">Quantity</th>
											<th scope="col">Total</th>
										</tr>
									</thead>
									<tbody>
										{length > 0 &&
											cartProducts.map((cartProduct, index) => {
												currentProductQuantity = cartProductsQuantity[index];
												total1 +=
                          parseInt(cartProduct.Price) * currentProductQuantity;
                        cartToCheckout.total = total1
                        cartToCheckout.products.push(cartProduct)
												return (
													<tr key={index}>
														<td>
															<div className="media">
																<div className="d-flex">
																	<img src={cartProduct.ImageURL} alt="" />
																</div>
																<div className="media-body">
																	<p>{cartProduct.Name}</p>
																</div>
															</div>
														</td>
														<td>
															<h5>Rs. {cartProduct.Price}</h5>
														</td>
														<td>
															<div className="product_count">
																{/* <span className="input-number-decrement">
																	<a
																		onClick={() => {
																			productCount(
																				$(".input-number"),
																				"minus",
																				index,
																				parseInt(cartProduct.Price),
																			);
																		}}
																	>
																		<Icon name="angle down" />
																	</a>
																</span> */}
																<input
																	id={"input" + index}
																	className="input-number"
																	type="text"
																	placeholder={currentProductQuantity}
																	min="1"
                                  max="9"
                                  readOnly
																/>
																{/* <span className="input-number-increment">
																	<a
																		onClick={() => {
																			productCount(
																				$(".input-number"),
																				"plus",
																				index,
																				parseInt(cartProduct.Price),
																			);
																		}}
																	>
																		<Icon name="angle up" />
																	</a>
																</span> */}
															</div>
														</td>
														<td>
															<h5>
																Rs.{" "}
																<p id={"data" + index}>
																	{parseInt(cartProduct.Price) *
																		currentProductQuantity}
																</p>
															</h5>
														</td>
													</tr>
												);
											})}
										<tr>
											<td></td>
											<td></td>
											<td>
												<h5 id="down">Subtotal</h5>
											</td>
											<td>
												<h5 id="down">
													Rs. <p id="total">{total1}</p>
												</h5>
											</td>
										</tr>
									</tbody>
								</Table>
							</Col>
						</Row>
						<Row>
							<div className="checkout_btn_inner float-right">
								<Link to="/Shop" className="btn11">
									<p>Continue Shopping</p>
								</Link>
							</div>
							<div className="checkout_btn_inner float-right" onClick={() => calculate()} >
								<Link to="/Checkout" className="btn11">
									<p>Proceed to Checkout</p>
								</Link>
							</div>
						</Row>
					</div>
				</Container>
			</section>
		</Fragment>
	);
};

export default Cart;
