import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
      // console.log(res.data);
      this.setState({ employees: res.data });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="fixed-action-btn">
          <Link to="/addEmployee" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
        <div className="row">
          {this.state.employees.map(employee => (
            <div className="col m3" key={employee._id}>
              <div className="card-panel blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">
                    <h5>{employee.name}</h5>
                  </span>
                  <p>E-mail: {employee.email}</p>
                  <p>Position: {employee.position}</p>
                  <p>Contact: {employee.phone}</p>
                  <p>Salary: {employee.salary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default EmployeeList;
