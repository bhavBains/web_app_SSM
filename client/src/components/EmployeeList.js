import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Moment from "react-moment";
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

  deleteEntry = id => {
    axios.delete(`/api/deleteEntry/${id}`).then(res => {
      this.componentDidMount();
    });
  };

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
            <div className="col m3 s12" key={employee._id}>
              <div className="card-panel blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">
                    <h5>{employee.name}</h5>
                  </span>
                  <p>E-mail: {employee.email}</p>
                  <p>Position: {employee.position}</p>
                  <p>Contact: {employee.phone}</p>
                  <p>Salary: {employee.salary}</p>
                  <p>
                    Date Hired:{" "}
                    <Moment format="MM-DD-YYYY">{employee.dateHired}</Moment>
                  </p>
                  <a
                    class="waves-effect waves-light btn white red-text"
                    onClick={this.deleteEntry.bind(this, employee._id)}
                  >
                    <i class="material-icons">delete_forever</i>
                  </a>
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
