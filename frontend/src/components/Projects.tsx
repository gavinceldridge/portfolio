import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Navbar from "./Navbar";
import ProjectPreview from "./ProjectPreview";

import veganBootcamp from "../assets/vegan-bootcamp.webp";
import apex from "../assets/apex.jpg";
import weatherTheTrip from "../assets/weather-the-trip.png";
import nest from "../assets/nest.png";
import reframe from "../assets/reframe-logo.png";

import projectData from "../interfaces/projectData";
import technologyFavicon from "../enums/technologyFavicons";

const Projects: React.FC = (): JSX.Element => {


    const projects: Array<projectData> = [
        {
            title: "Vegan Bootcamp (Vegan Hacktivists)",
            subtitle:
                "Vegan Bootcamp is a free challenge website that will take you step-by-step towards a Vegan diet and lifestyle. You will be guided through lessons in over 25 subjects such as nutrition, recipes, philosophy, climate, cosmetics, welfare, budgeting, clothing, family, and many more!",
            image: veganBootcamp,
            link: "",
            techStack: [
                technologyFavicon.typescript,
                technologyFavicon.php,
                technologyFavicon.laravel,
            ],
        },
        {
            title: "Reframe",
            subtitle:
                "A landing page for new Reframe users to figure out their goals, commit to a plan, and sign up.",
            image: reframe,
            link: "https://joinreframe.app/",
            techStack: [
                technologyFavicon.react,
                technologyFavicon.bootstrap,
                technologyFavicon.netlify,
            ],
        },
        {
            title: "Nest Home Thermostat Controller",
            subtitle:
                "A web-based thermostat controller for the Nest Home Thermostat. Includes an eco-friendly feature which automatically turns the AC off when the outside temperature is cooler than the inside AC.",
            image: nest,
            link: "https://github.com/gavinceldridge/Google-Nest-Auto-Temp-Controller",
            techStack: [
                technologyFavicon.react,
                technologyFavicon.bootstrap,
                technologyFavicon.weather,
            ],
        },
        {
            title: "Weather The Trip",
            subtitle:
                "Web app utilizing Google Maps and Weatherbit to estimate and help prevent surprise weather phenomena along a trip prior to driving.",
            image: weatherTheTrip,
            link: "https://github.com/gavinceldridge/Weather-The-Trip",
            techStack: [
                technologyFavicon.python,
                technologyFavicon.googleApis,
                technologyFavicon.psql,
            ],
        },
        {
            title: "Apex Legends Twitch Bot",
            subtitle:
                "An open-source Twitch chatbot that will allow a streamer's chat to democratically select the next Legend.",
            image: apex,
            link: "https://github.com/gavinceldridge/ApexTwitchBot",
            techStack: [
                technologyFavicon.javascript,
                technologyFavicon.glitch,
                technologyFavicon.twitch,
            ],
        },
    ];

    return (
        <>
            <Navbar active="projects" />
            <Container>
                <h2 className="text-center mt-3">My Projects</h2>
                <hr></hr>
                <Row className="mt-4">
                    {projects.map((project, index) => {
                        return <ProjectPreview project={project} key={index} />;
                    })}
                </Row>
            </Container>
        </>
    );
};
export default Projects;
