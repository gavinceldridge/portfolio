import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectPreview from "../components/ProjectPreview";
import projects from "../constants/projects";

const Projects: React.FC = (): JSX.Element => {
	return (
		<>
			<Navbar active="projects" />
			<Container>
				<h2 className="text-center mt-3">My Projects & Experience</h2>
				<hr></hr>
				<Row className="mt-4">
					{projects.map((project, index) => {
						return <ProjectPreview project={project} key={index} />;
					})}
				</Row>
			</Container>
			<Footer />
		</>
	);
};
export default Projects;
