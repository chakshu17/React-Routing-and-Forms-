import React from "react";
import "./App.css";
import About from "./Components/About";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";
import LoginForm from "./Formik/components/FormikForm/LoginForm";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/shop" component={Shop} />
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
