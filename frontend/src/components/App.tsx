import React, { useState } from "react";
import "../styles/bootstrap-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import TextConversions from "./TextConversions";
import MouseAnimator from "./MouseAnimator";


const App: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/text" element={<TextConversions />} />
				</Routes>
				<MouseAnimator />
			</BrowserRouter>
		</>
	);
};

export default App;
