import React, { useState, useEffect } from "react";
import oceanVid from "../assets/ocean.mp4";

import "../styles/Home.css";
import logo from "../assets/GCE-Tech-logos_white.png";

const Home: React.FC = () => {
	const [descriptorInd, setDescriptorInd] = useState(0);

	const descriptors = [
		"Software Engineer",
		"Surfer",
		"Brother",
		"Climber",
		"Musician",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setDescriptorInd((descriptorInd + 1) % descriptors.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [descriptorInd]);

	// const menuToggle = document.querySelector('.toggle');
	// const showcase = document.querySelector('.');

	// menuToggle.addEventListener('click', () => {
	//   menuToggle.classList.toggle('active');
	//   showcase.classList.toggle('active');
	// })

	const [toggle, setToggle] = useState(false);

	return (
		<>
			<section className={`video-container ${toggle ? "active" : ""}`}>
				<header>
					<div className="logo-container">
						<img height="150" src={logo}></img>
						<svg height="100" width="100">
							<circle cx="50" cy="50" r="40" />
						</svg>
					</div>

					<div
						className={`menu-toggle ${toggle ? "active" : ""}`}
						onClick={() => setToggle(!toggle)}
					></div>
				</header>
				<video src={oceanVid} muted loop autoPlay></video>
				<div className="text">
					<h1 className="slide-in-left-text descriptor">
						{descriptors[descriptorInd]}
					</h1>
					<h2 className="slide-in-left-text bottom-text">
						Based in: Chico, CA
					</h2>
				</div>
			</section>
		</>
	);
};

export default Home;
