import React from 'react'; 

import { BrowserRouter as Router } from 'react-router-dom'
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import './index.css'


// add our app to the dom 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<StrictMode>
			<App />
		</StrictMode>
	</Router>,
  );


