import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { CardCharacters} from "./cardnaves.js";
import "../../styles/home.css";

export const Characters = () => {
	const { store } = useContext(Context);
	return (
	<div className="contenedorcardsplanets">
		
				{store.startships.map((item, index) => {
					return (
						<div
							key={index}
							className="divcard m-5">
								<CardCharacters name={item.name} model ={item.model} manufacturer={item.manufacturer} index={index}/>		
											
						</div>
					);
				})}
			
	</div>
);
}