import React, { Component } from "react";
import createStore from "./store/createStore";
import AppsContainer from "./AppContainer";

  export default class Root extends Component{
   renderApp(){
     const initialState = window.___INTITIAL_STATE__;
     const store = createStore(initialState);
     return(
       <AppsContainer store={store} />
     );
   }

   render(){
     return this.renderApp();
   }
}
