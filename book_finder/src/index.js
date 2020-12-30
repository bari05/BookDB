import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Navbar/>
          <div>
              <Route path={"/"} exact={true} component={App}/>
          </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
