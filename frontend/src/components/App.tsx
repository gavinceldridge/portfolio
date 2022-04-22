import React, { useState } from "react";
import "../sass/bootstrap-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
