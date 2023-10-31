import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/Contact.css";
const Contact: React.FC = (): JSX.Element => {
	const handleSubmit = (event: any) => {
		// event.preventDefault();
		console.log("Submitted");
	};

	return (
		<div className="contact-page">
			<Navbar active="contact" />
			<Container>
				<h3 className="text-center mt-3">Leave me a message</h3>
				<hr></hr>

				<form
					onSubmit={handleSubmit}
					action="https://formspree.io/f/moqryabn"
					method="POST"
				>
					<Row className="m-md-4 w-100">
						<Col sm={6} xs={12}>
							<div className="name-container">
								<label className="name-label" htmlFor="name">
									Name
								</label>
								<input
									className="name-input"
									type="text"
									id="name"
									name="name"
									placeholder="Your name"
									required
								/>
							</div>
						</Col>

						<Col sm={6} xs={12} className="mt-2 mt-sm-0">
							<div className="email-container">
								<label className="email-label" htmlFor="email">
									Email
								</label>
								<input
									className="email-input"
									type="email"
									id="email"
									name="email"
									placeholder="Your email"
									required
								/>
							</div>
						</Col>
					</Row>
					<div className="message-container">
						<label className="message-label" htmlFor="message">
							Message
						</label>
						<textarea
							className="message-input"
							id="message"
							name="message"
							placeholder="Your message"
							required
						/>
					</div>

					<div className="submit-container">
						<button className="submit-button" type="submit">
							Send
						</button>
					</div>
				</form>
			</Container>
			<Footer />
		</div>
	);
};
export default Contact;
