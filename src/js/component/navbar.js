import React from "react";
import { Link } from "react-router-dom";
import startwars from "../../img/startwars.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span><img className ="logostarwars" src={startwars}/></span>
			</Link>
			<div className="ml-auto">
				<div class="btn-group">
  					<button class="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   						 Favorites
  					</button>
  					<ul class="dropdown-menu">
					  	<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
						<li><a class="dropdown-item" href="#">Separated link</a></li>
  					</ul>
				</div>
			</div>
		</nav>
	);
};
