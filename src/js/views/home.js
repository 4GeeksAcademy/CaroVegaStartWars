import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Planets } from "../component/planets";
import { Starships } from "../component/starships";

import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context);
	return (
	<div className="contenedor mx5">
		<h1>Planets</h1>
			<Planets/>
		<h1>Starships</h1>
			<Starships/>
	</div>
);
}