import React, { Fragment } from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "semantic-ui-react";

const Footer = () => {
  return (
		<Fragment>
			<footer>
				<hr />
				{/* <div className="main-content">
					<div className="left box">
						
					</div>
				</div> */}
				<a href="/">
					<img src="images/logo-03.png" alt="logo" height="100px"/>
				</a>

				<div className="bottom">
					<center>
						<span className="credit">H-Shop &copy;{"  "}| </span>
						<span className="credit">
							{new Date().getFullYear()} All rights reserved
						</span>
					</center>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
