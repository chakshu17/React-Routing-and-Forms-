import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
	const navStyle = {
		color: "white",
  };
  
	return (
		<div className="navBar">
			<h3>Nav</h3>
			<ul className="nav-list">
				<Link style={navStyle} to="/about">
					<li>About</li>
				</Link>
				<Link  style={navStyle} to="/shop">
					<li>Shop</li>
				</Link>
			</ul>
		</div>
	);
}

export default Nav;
