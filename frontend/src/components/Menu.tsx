import React from "react";

interface NavItems {
	items: Array<string>;
}

const Menu: React.FC<NavItems> = ({ items }): JSX.Element => {
	console.log(items);
	return (
		<div className="menu">
			<ul>
				{items.map((item: string) => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
		</div>
	);
};
export default Menu;
