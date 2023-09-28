import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsHeart } from "react-icons/bs";

export const CardNaves = (props) => {
    const { store, actions } = useContext(Context);

    function clickhearts(name) {
        if (!store.hearts.includes(name)) {
            const updatedHearts = [...store.hearts, name];
            actions.setfavorites(updatedHearts);
        }
    }
    
   
	return (
		<div className="card" >
            <div className = "imagenCard">400x200</div>
            <div className="card-body">
                <div className="px-3">
                <h5 className="card-title">{props.name}</h5>
                <p>Model: {props.model}</p>
                <p>Manufacturer: {props.manufacturer}</p>
                </div>
                <div className="d-flex justify-content-between p-3">
                    <Link to={`/detailplanet/${props.index}`}>
                        <button>Learn more!</button>
                    </Link>
                    <button onClick={()=>{clickhearts(props.name)} }><BsHeart/></button>
                </div>
            </div>
          
        </div>
	);
};
