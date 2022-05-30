import React, {useState, useEffect} from "react";
import "../styles/MouseAnimator.css";

export default function MouseAnimator() {
	interface coordinates {
		x: number;
		y: number;
	}

	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	} as coordinates);

	const onMouseMove = (e: MouseEvent) => {
		setMousePosition({ x: e.clientX, y: e.clientY });
	};

	useEffect(() => {
		document.addEventListener("mousemove", onMouseMove);
		return () => {
			document.removeEventListener("mousemove", onMouseMove);
		};
	}, [mousePosition]);

	return <div className="cursor" style={
		{
			top: `${mousePosition.y}px`,
			left: `${mousePosition.x}px`,
		}
	}></div>;
}
