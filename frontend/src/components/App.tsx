import React, { useState } from "react";
import "../styles/bootstrap-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import TextConversions from "./TextConversions";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/text" element={<TextConversions />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
