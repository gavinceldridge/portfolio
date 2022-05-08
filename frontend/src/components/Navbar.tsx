import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import logo from "../assets/GCE-Tech-logos_black.png";
import blackMenu from "../assets/black-menu.png";
import blackX from "../assets/black-x.png";

interface props {
    active: string;
}

const Navbar: React.FC<props> = ({ active }): JSX.Element => {
    const [toggle, setToggle] = useState(false);
    const links: Array<string> = ["About", "Projects", "Contact"];
    return (
        <nav className={`${toggle ? "expand" : ""}`}>
            <Link to="/">
                <img src={logo} alt="gce-logo"></img>
            </Link>
            <ul className="menu">
                {links.map((link: string) => {
                    return (
                        <li key={link}>
                            <Link
                                to={`/${link.toLowerCase()}`}
                                className={`${
                                    active.toLowerCase() === link.toLowerCase()
                                        ? "nav-active"
                                        : ""
                                }`}
                            >
                                {link}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <img
                src={
                    toggle
                        ? "https://cdn3.iconfinder.com/data/icons/status/100/close_1-512.png"
                        : blackMenu
                }
                onClick={() => {
                    if (toggle) {
                        const nav = document.querySelector("nav");
                        const menu = document.querySelector(".nav-list");
                        const x = document.querySelector(".menu-toggle");
                        if (menu) menu.className = "nav-list fade-out";
                        if (nav) nav.classList.add("close");
                        if (x) x.classList.add("fade-out");

                        setTimeout(() => {
                            setToggle(!toggle);
                        }, 1000);
                    } else {
                        setToggle(!toggle);
                    }
                }}
                alt="black-menu"
                className={`${toggle ? "fade-in" : ""} menu-toggle`}
            ></img>

            <div className={`mobile-menu ${toggle ? "active" : ""}`}>
                <ul className={`nav-list ${toggle ? "alive" : "die"}`}>
                    {links.map((link: string, index: number) => {
                        return (
                            <li key={link} className="">
                                <Link
                                    to={`/${link.toLowerCase()}`}
                                    className={`${
                                        active.toLowerCase() === link
                                            ? "nav-active"
                                            : ""
                                    }`}
                                >
                                    {link}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
