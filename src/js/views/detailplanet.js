import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detailplanet.css";

export const DetailPlanet = () => {
	const { store } = useContext(Context);
    const {idplanet} = useParams();
    const [dataplanet, setDataplanet]=useState(null);
    
    useEffect(() => {
        console.log(store.planets)
        console.log (idplanet)
        if (idplanet !=null) {
          // Cargar los datos del contacto si se está editando
        const planetData = store.planets.find((item, index) => index == idplanet);
         if(planetData){
            setDataplanet(planetData)
         }
        }
      }, [idplanet, store.planets]);
    
      if(!dataplanet){
        return <p>Loading...</p>;
      }

	return (
	<div className="contenedordetail">
		<div className="contenedorimgdatos">
            <div className="imgdetail p-2">imagen</div>
            <div className="contenedortexto p-2">
                <h1>{dataplanet.name}</h1>
                <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit</p>
            </div>
        </div>
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Climate</th>
                    <th scope="col">Population</th>
                    <th scope="col">Orbital <br></br>Period</th>
                    <th scope="col">Rotation<br></br>Period</th>
                    <th scope="col">Diameter</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{dataplanet.name}</td>
                    <td>{dataplanet.climate}</td>
                    <td>{dataplanet.population}</td>
                    <td>{dataplanet.orbital_period}</td>
                    <td>{dataplanet.rotation_period}</td>
                    <td>{dataplanet.diameter}</td>
                    </tr>
                    </tbody>
            </table>
        </div>
	</div>
);
}