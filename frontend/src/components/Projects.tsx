import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ProjectPreview from "./ProjectPreview";

import veganBootcamp from "../assets/vegan-bootcamp.webp";
import apex from "../assets/apex.jpg";
import weatherTheTrip from "../assets/weather-the-trip.png";
import nest from "../assets/nest.png";
import reframe from "../assets/reframe-logo.png";

import projectData from "../interfaces/projectData";
import technologyFavicon from "../enums/technologyFavicons";

const Projects: React.FC = (): JSX.Element => {
    const technologies: any = {
        react: {
            url: "https://reactjs.org/favicon-32x32.png?v=f4d46f030265b4c48a05c999b8d93791",
            name: "React",
        },
        typescript: {
            url: "https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae",
            name: "TypeScript",
        },
        javascript: {
            url: "https://2ality.com/2011/10/logo-js/js.jpg",
            name: "JavaScript",
        },
        flask: {
            url: "https://flask.palletsprojects.com/en/2.1.x/_static/flask-icon.png",
            name: "Flask",
        },
        python: { url: "https://www.python.org/static/favicon.ico", name: "Python" },
        java: {
            url: "https://www.oracle.com/webfolder/technetwork/java/favicon.ico",
            name: "Java",
        },
        heroku: { url: "https://www.herokucdn.com/favicon.ico", name: "Heroku" },
        psql: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png",
            name: "PostgreSQL",
        },
        mongodb: { url: "https://www.mongodb.com/favicon.ico", name: "MongoDB" },
        node: {
            url: "https://nodejs.org/static/images/logos/nodejs-new-white.png",
            name: "Node.js",
        },
        express: { url: "https://expressjs.com/images/favicon.png", name: "Express.js" },
        twitch: {
            url: "https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png",
            name: "Twitch API",
        },
        bootstrap: { url: "https://getbootstrap.com/favicon.ico", name: "Twitter Bootstrap" },
        laravel: {
            url: "https://laravel.com/img/favicon/favicon-32x32.png",
            name: "Laravel",
        },
        php: { url: "https://www.php.net/favicon.ico", name: "PHP" },
        netlify: {
            url: "https://www.netlify.com/v3/static/favicon/favicon-32x32.png",
            name: "Netlify",
        },
        glitch: { url: "https://glitch.com/favicon.ico", name: "Glitch Hosting" },
        weather: {
            url: "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/icons/logo_32x32.png",
            name: "Open Weather API",
        },
        googleApis: {
            url: "https://www.gstatic.com/devrel-devsite/prod/v6cd15f45ec209c8961e07ea7e57ed9a0e9da4333bc915e67d1fcd2b2a9ec62d1/developers/images/favicon.png",
            name: "Google APIs",
        },
    };

    const projects: Array<projectData> = [
        {
            title: "Vegan Bootcamp (Vegan Hacktivists)",
            subtitle:
                "Vegan Bootcamp is a free challenge website that will take you step-by-step towards a Vegan diet and lifestyle. You will be guided through lessons in over 25 subjects such as nutrition, recipes, philosophy, climate, cosmetics, welfare, budgeting, clothing, family, and many more!",
            image: veganBootcamp,
            link: "https://veganbootcamp.org/",
            techStack: [
                technologies.typescript,
                technologies.php,
                technologies.laravel,
            ],
        },
        {
            title: "Reframe",
            subtitle:
                "A landing page for new Reframe users to figure out their goals, commit to a plan, and sign up.",
            image: reframe,
            link: "https://joinreframe.app/",
            techStack: [
                technologies.react,
                technologies.bootstrap,
                technologies.netlify,
            ],
        },
        {
            title: "Nest Home Thermostat Controller",
            subtitle:
                "A web-based thermostat controller for the Nest Home Thermostat. Includes an eco-friendly feature which automatically turns the AC off when the outside temperature is cooler than the inside AC.",
            image: nest,
            link: "https://github.com/gavinceldridge/Google-Nest-Auto-Temp-Controller",
            techStack: [
                technologies.react,
                technologies.bootstrap,
                technologies.weather,
            ],
        },
        {
            title: "Weather The Trip",
            subtitle:
                "Web app utilizing Google Maps and Weatherbit to estimate and help prevent surprise weather phenomena along a trip prior to driving.",
            image: weatherTheTrip,
            link: "https://github.com/gavinceldridge/Weather-The-Trip",
            techStack: [
                technologies.python,
                technologies.googleApis,
                technologies.psql,
            ],
        },
        {
            title: "Apex Legends Twitch Bot",
            subtitle:
                "An open-source Twitch chatbot that will allow a streamer's chat to democratically select the next Legend.",
            image: apex,
            link: "https://github.com/gavinceldridge/ApexTwitchBot",
            techStack: [
                technologies.javascript,
                technologies.glitch,
                technologies.twitch,
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
            <Footer />
        </>
    );
};
export default Projects;
