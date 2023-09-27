import React from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";

export const Card = (props) => {
	return (
		<div className="card" >
            <div className = "imagenCard">400x200</div>
            <div className="card-body">
                <div className="px-3">
                <h5 className="card-title">{props.name}</h5>
                <p>Population: {props.population}</p>
                <p>Terrain: {props.terrain}</p>
                </div>
                <div className="d-flex justify-content-between p-3">
                    <Link to={`/detailplanet/${props.index}`}>
                        <button>Learn more!</button>
                    </Link>
                    <button><BsHeart/></button>
                </div>
            </div>
          
        </div>
	);
};
