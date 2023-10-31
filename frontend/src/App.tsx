import React from "react";
import "./styles/bootstrap-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Projects from "./pages/Projects";
import TextConversions from "./components/TextConversions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LinksPage from "./pages/LinksPage";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/text" element={<TextConversions />} />
				<Route path="/links" element={<LinksPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
