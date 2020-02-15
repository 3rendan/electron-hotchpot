import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import * as serviceWorker from "./serviceWorker";
import Index from './views/Index.js';
import ShowItem from './views/ShowItem.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';


let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Header/>
    <Route path="/" exact strict component={Index}/>
    <Route path="/about" exact strict render={
      ()=> {
        return( <h1>about</h1> );
      }
    }/>
    <Footer/>
  </Router>,
  document.getElementById("root")
);



serviceWorker.unregister();
