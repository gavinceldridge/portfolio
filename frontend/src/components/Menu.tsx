import React from "react";
import { Link } from "react-router-dom";

interface NavItems {
    items: Array<string>;
    type: string;
}

const Menu: React.FC<NavItems> = ({ items, type = "mobile" }): JSX.Element => {
    return (
        <div className={`${type === "desktop" ? "desktop-menu" : "home-menu"}`}>
            <ul>
                {items.map((item: string) => {
                    return (
                        <li className={type==="desktop" ? "nav-link": ""} key={item}>
                            <Link to={`${item.toLowerCase()}`}>{item}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default Menu;
