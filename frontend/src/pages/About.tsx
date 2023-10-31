import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import selfie from "../assets/selfie.jpg";
import sarf from "../assets/sarf.jpg";
import climb from "../assets/climb.jpg";
import guitar from "../assets/guitar.png";
import ry from "../assets/ry.jpg";
import resumePDF from "../assets/Resume.pdf";

import "../styles/About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
	const technologies = [
		"TypeScript",
		"React",
		"C# / .NET ",
		"AWS Cloud Platform",
		"Postgres (PSQL)",
		"Svelt",
		"Express",
		"MongoDB",
		"Sass",
		"Docker",
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
									alt={"Gavins profile pic"}
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
								a fullstack software engineer originally from
								Monterey, California, though I'm currently based
								out of San Francisco.
							</p>
						</Col>
					</Row>

					<hr></hr>

					<Row className="my-5 text-container">
						<p>
							I have pursued my passion for coding for almost 9
							years now (began with Java programming when I was
							14), and have been actively working over the last 3
							years. I have worked at a variety of companies,
							ranging from eco-friendly e-commerce stores, stem
							cell growth factor skincare lines, to mental
							wellness/substance abuse assistance platforms. I
							currently work at{" "}
							<a href="https://getgoodlab.com" target="_">
								Good.Lab
							</a>{" "}
							as a fullstack engineer building out the leading ESG
							solution for the middle market.
						</p>
						<Col sm={12}></Col>
					</Row>

					<hr></hr>

					<Row className="d-flex flex-row justify-content-center align-items-center">
						<Col sm={12} md={4}>
							<h2 className="about-text fs-4">
								Some of my current favorite technologies
								include:
							</h2>
						</Col>
						<Col sm={12} md={8}>
							<ul className="about-text fs-4 technologies">
								{technologies.map((tech) => (
									<li key={tech} className="technology">
										{tech}
									</li>
								))}
							</ul>
						</Col>
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
							title={"resume"}
							src={
								window.screen.width <= 768
									? "https://resume.creddle.io/resume/dhly7ihudiv"
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
