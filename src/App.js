import React from "react";
import "./App.css";
import about from "./Components/about";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";
import LoginForm from "./Formik/components/FormikForm/LoginForm";

function App() {
	return (
		<div className="App">
			<h1>App</h1>
			<Nav />
			
			<Shop />
		</div>
	);
}

export default App;
