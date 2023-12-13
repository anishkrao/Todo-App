import React, { Fragment } from "react";
import "./App.css";
import Footer from "./components/Footer.js";
//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {

  

  return (
    <Fragment>
      <div style={{backgroundColor: "#f1c40f", color: "white"}}><h1 className="text-center">Todo</h1></div>
      <div className="container col-md-7">

        <InputTodo />
        <ListTodos />
        <Footer/>
      </div>
      
    </Fragment>
  );
}

export default App;
