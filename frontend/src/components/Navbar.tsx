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
                src={toggle ? blackX : blackMenu}
                onClick={() => setToggle(!toggle)}
                alt="black-menu"
                className="menu-toggle"
            ></img>

            <div className={`mobile-menu ${toggle ? "active" : ""}`}>
                <ul>
                    {links.map((link: string) => {
                        return (
                            <li key={link}>
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
