import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import Navbar from "./Navbar";
import Footer from "./Footer";

import selfie from "../assets/selfie.jpg";
import sarf from "../assets/sarf.jpg";
import climb from "../assets/climb.jpg";
import guitar from "../assets/guitar.png";
import ry from "../assets/ry.jpg";
import resumePDF from "../assets/SoftwareEngineeringResume.pdf";

import "../styles/About.css";
const About: React.FC = (): JSX.Element => {
	const [intro, setIntro] = useState("");
	const [showResume, setShowResume] = useState(false);

	const goal = "i, I'm Gavin       ";
	useEffect(() => {
		setTimeout(() => {
			if (intro.length < goal.length) {
				setIntro(intro + goal[intro.length]);
			} else if (intro.length === goal.length) {
				setIntro(intro + "😎");
			}
		}, Math.random() * 300);
	}, [intro]);

	interface carouselContentItem {
		title: string;
		subtitle: string;
		image: any;
	}

	const carouselContent: Array<carouselContentItem> = [
		{
			title: "Catching a wave",
			subtitle: "",
			image: sarf,
		},
		{
			title: "Climbing",
			subtitle: "Trip to Auburn Quarry",
			image: climb,
		},
		{
			title: "Making music",
			subtitle:
				"I have about 12 years of guitar experience and 8 years playing viola in classical orchestras.",
			image: guitar,
		},
		{
			title: "Goofin with my brothers",
			subtitle: "I'm the oldest of 3 boys",
			image: ry,
		},
	];

	const switchResume = () => {
		setShowResume(!showResume);
	};
	return (
		<>
			<Navbar active="about" />
			<Container className="about-container">
				<main>
					<Row className="my-5">
						<Col sm={12} md={6}>
							<div className="selfie-container">
								<img
									className="selfie d-flex justify-content-center"
									src={selfie}
								></img>
							</div>
						</Col>
						<Col className="d-flex flex-column justify-content-center align-items-center text-container">
							<h1 className="about-title my-4 introduction">
								H{intro}
								{intro.length < goal.length ? "|" : ""}
							</h1>
							<p className="about-text fs-4 text-center mt-3">
								a fullstack software engineer from Monterey,
								California. I'm currently based out of Northern
								California (Chico) but plan on moving back to
								the sea (Los Gatos) by June 2022.
							</p>
							{/* <p className="about-text fs-4 text-center mt-3">
								I have been pursuing my passion for programming
								over the last 7 years and have 2 years of
								professional industry experience. I recently
								left my old job and am looking for work in a
								creative and inspiring environment.
							</p> */}
						</Col>
					</Row>

					<hr></hr>

					<Row className="my-5 text-container">
						<p>
							I have pursued my passion for coding for almost 9
							years now (began with Java programming when I was
							14), and have been actively working over the last
							2.5 years. I have worked at a variety of companies,
							ranging from eco-friendly e-commerce stores, vegan
							skincare lines, to mental wellness/substance abuse
							assistance platforms. My skills lie mainly in web
							development and as I have experience building both
							backend and frontend systems at scale, I consider
							myself a fullstack engineer but lately I have been
							enjoying working on frontend projects a tad bit
							more. I hope to soon find myself in a fast-paced,
							ambitious, but healthy work environment.
						</p>
						<Col sm={12}></Col>
					</Row>

					<hr></hr>

					<Row className="my-4 doing-things">
						<Col
							sm={12}
							md={6}
							className="d-flex flex-column justify-content-center align-items-center"
						>
							<h2 className="about-text fs-4 text-center  text-container">
								If I'm not coding, you can probably find me...
							</h2>
						</Col>

						<Col>
							<Carousel>
								{carouselContent.map((item, index) => (
									<Carousel.Item key={index}>
										<img
											className="d-block w-100"
											src={item.image}
											alt={item.title}
										/>
										<Carousel.Caption>
											<h3>{item.title}</h3>
											<p>{item.subtitle}</p>
										</Carousel.Caption>
									</Carousel.Item>
								))}
							</Carousel>
						</Col>
					</Row>
					<hr></hr>
					<Row>
						<p className="about-text fs-4 my-4 text-center">
							<Button onClick={switchResume}>
								{" "}
								{showResume ? "Hide" : "See"} Resume{" "}
							</Button>
						</p>
						<iframe
							src={
								window.screen.width <= 768
									? "https://resume.creddle.io/embed/dhly7ihudiv"
									: resumePDF
							}
							width={showResume ? "800px" : "0px"}
							height={showResume ? "1150px" : "0px"}
							seamless
						></iframe>
					</Row>
				</main>
			</Container>

			<Footer />
		</>
	);
};
export default About;
