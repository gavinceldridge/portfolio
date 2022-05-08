import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import Navbar from "./Navbar";
import Footer from "./Footer";

import selfie from "../assets/selfie.jpg";
import sarf from "../assets/sarf.jpg";
import climb from "../assets/climb.jpg";
import ryder from "../assets/ryder-and-i.jpg";
import guitar from "../assets/guitar.png";
import ry from "../assets/ry.jpg";

import "../styles/About.css";
const About: React.FC = (): JSX.Element => {
    const [intro, setIntro] = useState("");

    const goal = "i, I'm Gavin       ";
    useEffect(() => {
        setTimeout(() => {
            if (intro.length < goal.length) {
                setIntro(intro + goal[intro.length]);
            } else if (intro.length === goal.length) {
                setIntro(intro + "😎");
            }
        }, Math.random() * 300);
    }, [intro]);

    interface carouselContentItem {
        title: string;
        subtitle: string;
        image: any;
    }

    const carouselContent: Array<carouselContentItem> = [
        {
            title: "Enjoying the ocean",
            subtitle: "I grew up in a surfing family and have a deep appreciation for the ocean.",
            image: sarf,
        },
        {
            title: "Climbing things!",
            subtitle: "Trip to Auburn Quarry",
            image: climb,
        },
        {
            title: "Making music",
            subtitle: "I have about 12 years of guitar experience and 8 years playing viola in classical orchestras.",
            image: guitar,
        },
        {
            title: "Goofin with my brothers",
            subtitle: "I'm the oldest of 3 boys",
            image: ry
        }
    ]

    return (
        <>
            <Navbar active="about" />
            <Container className="about-container">
                <main>
                    <Row className="my-5">
                        <Col sm={12} md={6}>
                            <div className="selfie-container">
                                <img
                                    className="selfie d-flex justify-content-center"
                                    src={selfie}
                                ></img>
                            </div>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center align-items-center">
                            <h1 className="about-title my-4 introduction">
                                H{intro}
                                {intro.length < goal.length ? "|" : ""}
                            </h1>
                            <p className="about-text fs-4 text-center mt-3">
                                a fullstack software engineer from Monterey,
                                California. I'm currently based out of Northern
                                California (Chico) but plan on moving back to
                                the sea (Los Gatos) by June 2022.
                            </p>
                            <p className="about-text fs-4 text-center mt-3">
                                I have been pursuing my passion for programming
                                over the last 7 years and have 2 years of
                                professional industry experience. I recently
                                left my old job and am looking for work in a
                                creative and inspiring environment.
                            </p>
                            <p className="about-text fs-4 mt-4 text-center">
                                <a href="https://drive.google.com/file/d/1hPBvS03ukO_Me73Kli8HhWKafhR7X4Ff/view?usp=sharing" target="_"><Button> Read my resume</Button></a>
                            </p>
                        </Col>
                    </Row>

                    <hr></hr>

                    <Row className="my-4 doing-things">
                        <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                        
                            <h2 className="about-text fs-4 text-center">
                                When I'm not coding, you can probably find me...
                            </h2>

                        </Col>

                        <Col>
                            <Carousel>
                                {carouselContent.map((item, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={item.image}
                                            alt={item.title}
                                        />
                                        <Carousel.Caption>
                                            <h3>{item.title}</h3>
                                            <p>{item.subtitle}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                                
                            </Carousel>
                        </Col>
                    </Row>

                    {/* <p className="about-text fs-4">
                        From a young age, I have been intrinsically fascinated
                        and inspired by technology, awe-struck by its almost
                        limitless potential for creativity, entertainment,
                        sharing, and problem solving. I began programming in
                        Java around the age of 14 but really caught the bug in
                        my highschool days after taking an AP computer science
                        class in Java. I knew software engineering was my
                        calling once I realized that I was genuinely excited to
                        be going to school, something that I hadn't been used to
                        since Kindergarten. Quickly, I found myself staying up
                        late recreating games such as tetris, snake, tron,
                        hang-man, ultimate tic tac toe, and flappy bird as a
                        form of enjoyment. When my Pre-Calc teacher told our
                        class we would need graphing calculators, I refused to
                        spend money when I could just code one myself.
                    </p>
                    <p className="about-text fs-4">
                        After high school, I studied at CSU Chico for 2 years.
                        However, a certain pandemic forced me to reconsider how
                        I was spending my finances and instead of continuing my
                        degree, I opted to take{" "}
                        <a
                            href="https://www.springboard.com/courses/software-engineering-career-track/"
                            target="_"
                        >
                            a coding bootcamp from Springboard
                        </a>{" "}
                        which would teach me many of the latest and most
                        in-demand skills for software engineers. Springboard
                        offered a job guarantee after graduating or they would
                        refund my payment. I began working my first real
                        software engineering job with FACTORFIVE Skincare, a
                        local Chico business focused on creating stem cell
                        growth factor skincare products, around April of 2021, a
                        little after I was half-way through with the bootcamp
                        and continued to work there until March of 2022.
                    </p>
                    <p className="about-text fs-4">
                        Most of my projects are inspired from sort of problem or
                        inconvenience I have encountered, such as my{" "}
                        <a href="/projects/thermostat-controller">
                            Nest Home Thermostat Controller
                        </a>{" "}
                        which will automatically turn off my thermostat during
                        the summer months should the temperature outside be
                        cooler than what the thermostat is currently set to.
                    </p> */}
                </main>
            </Container>
            {/* <Footer /> */}
        </>
    );
};
export default About;
