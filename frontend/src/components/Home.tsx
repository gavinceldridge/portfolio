import React, { useState, useEffect } from "react";

import Menu from "./Menu";

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

	const [toggle, setToggle] = useState(false);

	const navItems = ["About", "Projects", "Contact"];
	
	interface NavItems {
		items: Array<string>;
	}
	

	return (
		<>
			<section className={`video-container ${toggle ? "active" : ""}`}>
				<header>
					<div className="logo-container">
						<img height="150" src={logo}></img>
					</div>

					<div
						className={`mobile-menu-toggle ${toggle ? "active" : ""}`}
						onClick={() => setToggle(!toggle)}
					></div>
				</header>
				<video src={oceanVid} muted loop autoPlay></video>
				<div className="text">
					<h1 className="slide-in-left-text descriptor">
						{descriptors[descriptorInd]}
					</h1>
					<h2 className="slide-in-left-text bottom-text">
						Currently based in: Northern CA, USA
					</h2>
				</div>
			</section>
			<Menu items = {navItems} />
		</>
	);
};

export default Home;
