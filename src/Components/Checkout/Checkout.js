import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { firestore } from "../Config/Fire";
import emailjs from "emailjs-com";
function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

const Checkout = (props) => {
  const user = props.user
  const dispatch = useDispatch();
	const cart = useSelector((state) => state.total);

  const [firstNameInput, setFirstName] = useState(user.firstName);
  const [lastNameInput, setLastName] = useState(user.secondName);
	const [emailInput, setEmail] = useState(user.email);
	const [addressInput, setAddress] = useState("");
  const [phoneInput, setPhone] = useState("");
  const [cartInfo, setCartInfo] = useState(null)
  
	const [success, setSuccess] = useState("");

	const classes = useStyles();
	const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  
  useEffect(() => {
    setCartInfo(cart)
  }, [cart])

	const handleClick = () => {
		if (
			firstNameInput !== "" &&
			lastNameInput !== "" &&
			emailInput !== "" &&
      addressInput !== "" &&
      phoneInput !== ""
		) {
			setOpenSuccess(true);
			setSuccess(
				"We have recieved your query. We'll get back to you as soon as possible.",
			);
		} else {
			setOpenError(true);
		}
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenSuccess(false);
		setOpenError(false);
	};

	const handleFirstNameInput = (event) => {
		setFirstName(event.target.value);
  };
  
  const handleLastNameInput = (event) => {
		setLastName(event.target.value);
	};

	const handleEmailInput = (event) => {
		setEmail(event.target.value);
	};

	const handleAddressInput = (event) => {
		setAddress(event.target.value);
  };
  
  const handlePhoneInput = (event) => {
		setPhone(event.target.value);
	};

	const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const dataToSend = {
			firstName: firstNameInput,
			secondName: lastNameInput,
      email: emailInput,
      address: addressInput,
      phone: phoneInput,
    };


    const message = event.target
// `First Name: ${firstNameInput}
// Last Name: ${lastNameInput}
// Email Address: ${emailInput}
// Delivery Address: ${addressInput}
// Phone No.: ${phoneInput}
// `

let templateParams = {
	from_name: "hassannaseer900@gmail.com",
	to_name: "hassannaseer900@gmail.com",
	subject: "New Email",
	message_html: message,
};




		if (firstNameInput !== "" && lastNameInput !== "" && emailInput !== "" && addressInput !== "" && phoneInput !== "") {
      emailjs
				.sendForm(
					"service_eygaws2",
					"template_jjzcneb",
					message,
					"user_ZH6odL34DQePiATWCXJzf",
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					},
				);
      setOpenSuccess(true);
			setSuccess(
				"We have recieved your query. We'll get back to you as soon as possible.",
			);
      cart.temp.map((_product, index) => {
				const quantity = _product.quantity;
				const product = _product.product;
				const newQuantity = cart.products[index].quantity - quantity;
        
        firestore.collection("test").doc(product).update({
          quantity: newQuantity
        })
        
			});
		} else {
      setOpenError(true);
    }
	};

	return (
		<div>
			<MDBContainer>
				<MDBRow>
					<MDBCol className="form-body" sm="8" md="6" lg="5" xl="5">
						<p className="h2 text-center mb-3">Checkout</p>
						<p className="h6 text-center mb-4 form-text">
							You have added {cart.products.length} products in your cart. Total
							is {cart.total}
						</p>
						<div style={{ width: "fit-content", margin: "auto" }}>
							{cart.temp &&
								cart.temp.map((product) => {
									return (
										<p className="h6 mb-4 form-text">{`${product.quantity}x ${product.product}`}</p>
									);
								})}
						</div>
						<br />
						<hr />
						<br />
						<p className="h2 text-center mb-3">Delivery Information</p>
						<br />
						<form onSubmit={handleSubmit}>
							<label htmlFor="FirstName" className="text">
								First Name
							</label>
							<input
								required
								type="text"
								name="FirstName"
								className="form-control"
								onChange={handleFirstNameInput}
								value={firstNameInput}
							/>
							<br />
							<label htmlFor="LastName" className="text">
								Last Name
							</label>
							<input
								required
								type="text"
								name="LastName"
								className="form-control"
								onChange={handleLastNameInput}
								value={lastNameInput}
							/>
							<br />
							<label htmlFor="Email" className="text">
								Email
							</label>
							<input
								required
								type="email"
								name="Email"
								className="form-control"
								onChange={handleEmailInput}
								value={emailInput}
							/>
							<br />
							<label htmlFor="Address" className="text">
								Address
							</label>
							<input
								required
								type="text"
								name="Address"
								className="form-control"
								onChange={handleAddressInput}
								value={addressInput}
							/>
							<br />
							<label htmlFor="Phone" className="text">
								Phone No.
							</label>
							<input
								required
								type="text"
								name="Phone"
								className="form-control"
								onChange={handlePhoneInput}
								value={phoneInput}
							/>
							<br />

							{cart.temp &&
								cart.temp.map((product, index) => {
									return (
										<input
											hidden
											name={`product${index}`}
											value={`${product.quantity}x ${product.product}`}
											className="form-control"
											readOnly
										/>
									);
								})}

							<input
								hidden
								name={`total`}
								value={`${cart.total}`}
								className="form-control"
								readOnly
							/>

							<button
								style={{ margin: "auto", border: "none" }}
								type="submit"
								className="btn11"
							>
								Checkout
							</button>
						</form>
					</MDBCol>
				</MDBRow>

				<div className={classes.root}>
					<Snackbar
						open={openSuccess}
						autoHideDuration={10000}
						onClose={handleClose}
					>
						<Alert onClose={handleClose} severity="success">
							Your order is successfully placed! Thank you!
						</Alert>
					</Snackbar>
					<Snackbar
						open={openError}
						autoHideDuration={8000}
						onClose={handleClose}
					>
						<Alert onClose={handleClose} severity="error">
							Oops, Something went wrong! Please try again.
						</Alert>
					</Snackbar>
				</div>
			</MDBContainer>
		</div>
	);
};

export default Checkout;
