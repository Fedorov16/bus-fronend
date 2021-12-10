import React, {useEffect} from "react";
import "./App.css";

const App = () => {

	useEffect(() => {
		getUsers();
	});
	async function getUsers() {
		await fetch("https://randomuser.me/api/").then(item => console.log(item));
	}

	return (
		<div className="App">
			new project
		</div>
	);
};

export default App;
