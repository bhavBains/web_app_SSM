import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios.get("/api/employees").then(res => {
      console.log(res);
      this.setState({ employees: res.data });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.employees.map(employee => (
          <div className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">
                    <h2>{employee.name}</h2>
                  </span>
                  <h6>E-mail: {employee.email}</h6>
                  <h6>Position: {employee.position}</h6>
                  <h6>Contact: {employee.contact}</h6>
                  <h6>Salary: {employee.salary}</h6>
                  <h6>Hiring Date: {employee.dateHired}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default EmployeeList;
