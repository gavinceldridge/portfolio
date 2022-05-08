import React from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import "../styles/ProjectPreview.css";

import projectData from "../interfaces/projectData";

interface props {
    project: projectData;
}

const ProjectPreview: React.FC<props> = ({ project }): JSX.Element => {
    return (
        <Col className="project-container">
            <Card className="mb-3" style={{ width: "18rem" }}>
                <a href={project.link} target="_">
                    <Card.Img variant="top" src={project.image} />{" "}
                </a>
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    {project.techStack.map((tech: {url: string, name: string}, index: number) => {
                        return <img className="mx-1 my-2 technology-icon" key={index} src={tech.url} title={tech.name}></img>;
                    })}
                    <Card.Subtitle className="mb-2 text-muted">
                        {project.subtitle}
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
    );
};
export default ProjectPreview;
