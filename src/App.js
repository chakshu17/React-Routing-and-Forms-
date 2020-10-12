import React from "react";
import "./App.css";
import About from "./Components/About";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";
import LoginForm from "./Formik/components/FormikForm/LoginForm";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./Components/ItemDetail";
function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/shop" exact component={Shop} />
					<Route path="/shop/:id" component={ItemDetail}   />
				
				</Switch>
			</div>
		</Router>
	);
}

const Home = () => (
	<div>
		<h1>Home Page</h1>
	</div>
);
export default App;
