import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    // <div className="App container">
    //   <EmployeeList />
    // </div>
    <BrowserRouter className="App">
      <div className="container">
        {/* <EmployeeList /> */}
        <Route exact={true} path="/" component={EmployeeList} />
        <Route exact path="/addEmployee" component={AddEmployee} />
      </div>
    </BrowserRouter>
  );
}

export default App;
