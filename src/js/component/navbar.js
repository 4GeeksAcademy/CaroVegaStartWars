import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import {  FaTrashCan} from "react-icons/fa6";
import startwars from "../../img/startwars.jpg";


export const Navbar = () => {
	const { store } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span><img className ="logostarwars" src={startwars}/></span>
			</Link>
			<div className="ml-auto">
				<div className="btn-group">
  					<button className="btn btn-primary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   						 Favorites {store.hearts.length}
  					</button>
  					<ul className="dropdown-menu">
					  {store.hearts.map((item, index) => {
						return (
						<li
							key={index}
							className="divcard m-5">
								<div className="d-flex justify-content-center"><p className="px-2">{item}</p>	<button onClick={()=>deletehearts(index)}><FaTrashCan/></button></div>
											
						</li>
					);
				})}
					  	
  					</ul>
				</div>
			</div>
		</nav>
	);
};
