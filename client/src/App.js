import React from "react";
import { BrowserRouter, Switch , Route } from "react-router-dom";
import Home from "./components/Home";
import MyData from "./components/MyData";
const Router = () =>{
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />  
        <Route exact path="/mydata"  component={MyData}/> 
    </Switch>
    </BrowserRouter>
    
  )
}


function App() {
  return(
    <>
    <Router  />
    </>
  );
}
export default App;