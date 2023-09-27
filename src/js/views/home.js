import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Planets } from "../component/planets";
import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context);
	return (
	<div className="contenedor mx5">
		<h1>Planets</h1>
		<Planets/>
	</div>
);
}