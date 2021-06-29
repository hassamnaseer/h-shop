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
							H-Shop is an e-commerce final year project from <q>BESE 23-A</q>.
							Members of this project are:
							<br />
							<br />
							<ul>
								<li>Hassan Naseer Warraich</li>
								<li>Farrukh Munir</li>
								<li>Waqas Nasim</li>
								<li>Maaz Ullah Mumtaz</li>
							</ul>
							H-Shop is a <q>Single Page Application</q> developed using React
							JS, a frontend library of JavaScript. This project is developed in
							a way that with just minor changes, it can be used as a ready to
							go project for anyone.
						</p>

						<h2 className="heading-1">Attributions</h2>
						<p className="about">
							The product images are used from{" "}
							<a
								href="https://fadano.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Fadano
							</a>
							, an e-commerce website actively used in Pakistan. Images can be
							replaced at any time.
							<br />
							<br />
							In the Home page (sale section), we used this{" "}
							<a
								href="https://www.freepik.com/free-photos-vectors/watercolor"
								target="_blank"
								rel="noopener noreferrer"
							>
								Watercolor vector created by freepik - www.freepik.com
							</a>
							.<br />
							<br />
							As for the carousel images and some other pages top backgrounds,
							we used images which are all as follows:
							<br />
							<br />
							<ul>
								<li>
									<span>
										Photo by{" "}
										<a
											href="https://unsplash.com/@artificialphotography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
											target="_blank"
											rel="noopener noreferrer"
										>
											Artificial Photography
										</a>{" "}
										on{" "}
										<a
											href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
											target="_blank"
											rel="noopener noreferrer"
										>
											Unsplash
										</a>
									</span>
								</li>
								<li>
									<span>
										Photo by{" "}
										<a
											href="https://unsplash.com/@belart84?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
											target="_blank"
											rel="noopener noreferrer"
										>
											Artem Beliaikin
										</a>{" "}
										on{" "}
										<a
											href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
											target="_blank"
											rel="noopener noreferrer"
										>
											Unsplash
										</a>
									</span>
								</li>
								<li>
									<span>
										Photo by{" "}
										<a
											href="https://unsplash.com/@derickray?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
											target="_blank"
											rel="noopener noreferrer"
										>
											Derick McKinney
										</a>{" "}
										on{" "}
										<a
											href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
											target="_blank"
											rel="noopener noreferrer"
										>
											Unsplash
										</a>
									</span>
								</li>
								<li>
									<span>
										Photo by{" "}
										<a
											href="https://unsplash.com/@derickray?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
											target="_blank"
											rel="noopener noreferrer"
										>
											Derick McKinney
										</a>{" "}
										on{" "}
										<a
											href="https://unsplash.com/photos/cmbbXRjYUZA?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
											target="_blank"
											rel="noopener noreferrer"
										>
											Unsplash
										</a>
									</span>
								</li>
								<li>
									<span>
										Photo by{" "}
										<a
											href="https://unsplash.com/@randomlies?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
											target="_blank"
											rel="noopener noreferrer"
										>
											Ashim D’Silva
										</a>{" "}
										on{" "}
										<a
											href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
											target="_blank"
											rel="noopener noreferrer"
										>
											Unsplash
										</a>
									</span>
								</li>
							</ul>
							All rights are reserved by the respected owners of these
							documents.
						</p>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
}

export default About