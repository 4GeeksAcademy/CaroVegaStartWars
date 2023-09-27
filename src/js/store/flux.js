const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
				planets: [],
				hearts:[]
			},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadDataplanets: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				const {planets}= getStore();
				for(let i=1; i<=60; i++){
				fetch("https://www.swapi.tech/api/planets"+"/"+ i.toString()
				)
					.then(res => {
						if (res.status>= 200 && res.status<=300){
							console.log("el request se hizo bien");
							return res.json();
						}else if (res.status ==404){
							
							console.log(`hubo un error ${res.status} en el request`)
							createuser();
						}
					})
					.then(data => {
							console.log (data.result.properties)
							const{addplanets}=getActions();
							addplanets(data.result.properties);
							// console.log(planets)
					  })
					.catch(error => console.error(error));
				 
					}
					
			},
			addplanets:(data)=>{
				const {planets}=getStore()
				setStore({planets:[...planets, data]})
			},
			setfavorites:(name)=>{
				setStore({hearts:name})
			},
			deletehearts:(index)=>{
				console.log(index)
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
