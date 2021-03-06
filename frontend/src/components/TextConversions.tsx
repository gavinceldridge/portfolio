import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function TextConversions() {
	const [text, setText] = useState("");
	const [result, setResult] = useState("");

	const toJadenCase: (text: string) => string = (text) => {
		const words = text.split(" ");
		const result = words.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		});
		return result.join(" ");
	};

	const toAlternatingCase: (text: string) => string = (text) => {
		const words = text.split("");
		console.log(words);
		for(let i: number = 0; i < words.length; i++) {
			if(i % 2 === 0) {
				words[i] = words[i].toUpperCase();
			} else {
				words[i] = words[i].toLowerCase();
			}
		}
		return words.join("");
	};

	const copyToClipboard: (text: string) => void = (text) => {
		navigator.clipboard.writeText(text);
	};

	const updateText = (e: any) => {
		const text: string = e.target.value;
		setText(text);
		const activeConversion = document.querySelector(".active");
		if (activeConversion?.textContent === "Jaden Smith") {
			setResult(toJadenCase(text));
		} else if (activeConversion?.textContent === "AlTeRnAtInG cApS") {
			setResult(toAlternatingCase(text));
		}
	};

	const updateSelect = (e: any) => {

		const options = document.querySelectorAll("option");
		options.forEach((option) => {
			option.classList.remove("active");
		});
		e.target.classList.add("active");

		const conversion: string = e.target.value;
		if (conversion === "Jaden Smith") {
			setResult(toJadenCase(text));
		} else if (conversion === "AlTeRnAtInG cApS") {
			setResult(toAlternatingCase(text));
		}
	};

	return (
		<Container>
			<Row>
				<Col>
					<Form>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1"
						>
							<Form.Label>Text to convert</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								value={text}
								onChange={updateText}
							/>
						</Form.Group>
						<Form.Select
							aria-label="Default select example"
							id="conversion-type"
							onChange={updateSelect}
						>
							<option className="active">
								Jaden Smith
							</option>
							<option >
								AlTeRnAtInG cApS
							</option>
						</Form.Select>
						<Button
							variant="primary"
							className="mt-2"
							onClick={() => {
								console.log(result);
								copyToClipboard(result);
							}}
						>
							Copy
						</Button>
					</Form>
					<p>{}</p>
				</Col>
			</Row>
		</Container>
	);
}
