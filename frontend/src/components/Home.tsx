import React from "react";
import oceanVid from "../assets/ocean.mp4";

import "../styles/Home.css";
import logo from "../assets/GCE-Tech-logos_white.png";

const Home: React.FC = () => {
	return (
		<>
			<section className="showcase">
				<header>
					{/* <h2>Gavin Eldridge</h2> */}
					<img height="150" src={logo}></img>
					<div className="menu-toggle"></div>
				</header>
				<video src={oceanVid} muted loop autoPlay></video>
				<div className="text">
					<h1 className="slide-in-left-text descriptor">Software Engineer</h1>
					<h2 className="slide-in-left-text">Based in: Chico, CA</h2>
				</div>
			</section>

		</>
	);
};

export default Home;
