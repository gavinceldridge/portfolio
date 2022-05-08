import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact:React.FC = ():JSX.Element => {
	return (
		<>
            <Navbar active="contact" />
            <Container>
                <h2 className="text-center mt-3">Reach Out!</h2>
                <hr></hr>
				<Row className="mt-4">
					<Col>
						<h3>Email</h3>
						<p>
							<a href="mailto:gceldridgetech@gmail.com">
								gceldridgetech@gmail.com
							</a>
						</p>
					</Col>
					<Col>
						<h3>LinkedIn</h3>
						<p>
							<a href="linkedin.com/in/gavineldridge" target="_">
								My LinkedIn
							</a>
						</p>
					</Col>
					<Col>
						<h3>Phone</h3>
						<p>
							<a href="tel:+1-831-277-2449">
								(831) 277-2449
							</a>
						</p>
					</Col>
					<Col>
						<h3>Github</h3>
						<p>
							<a href="https://github.com/gavinceldridge" target="_">
								My Github
							</a>
						</p>
					</Col>
				</Row>
            </Container>
			<Footer />
        </>
	);
}
export default Contact;