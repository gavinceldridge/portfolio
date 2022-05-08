import React from "react";

import { Link } from "react-router-dom";

import "../styles/Footer.css";

const Footer: React.FC = (): JSX.Element => {
    const socials = [
        {
            url: "https://www.linkedin.com/in/gavineldridge/",
            class: "fa-brands fa-linkedin",
        },
		{
			url: "https://github.com/gavinceldridge",
			class: "fa-brands fa-github",
		},
		{
			url: "https://www.instagram.com/gavinceldridge/",
			class: "fa-brands fa-instagram",
		}
    ];

    return (
        <footer>
            <div className="socials">
                {socials.map((social: any) => {
                    return (
                        <a className="fs-1" href={social.url} key={social.url} target="_">
                            <i className={social.class}></i>
                        </a>
                    );
                })}
            </div>
        </footer>
    );
};
export default Footer;
