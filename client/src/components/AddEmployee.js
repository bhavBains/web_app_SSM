import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      position: "",
      phone: "",
      salary: "",
      dateHired: "",
      error: ""
    };
  }

  handleChange = e => {
    const nam = e.target.name;
    const val = e.target.value;
    console.log(this.state.dateHired);
    this.setState({ [nam]: val });
  };

  handleSubmit = e => {
    e.preventDefault();
    let data = this.state;
    axios.post("/api/addEmployee", data).then(res => {
      this.setState({ error: res.data.error });
      // window.history.back();
      window.location.href = "/";
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  required
                  className="validate"
                  placeholder="Name"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.handleChange}
                />
                <label></label>
                <span
                  className="helper-text"
                  data-error="Please check your input"
                  data-success="This looks nice"
                ></span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  required
                  className="validate"
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.handleChange}
                />
                <label></label>
                <span className="red-text helper-text">{this.state.error}</span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  required
                  className="validate"
                  placeholder="Position"
                  type="text"
                  name="position"
                  id="position"
                  onChange={this.handleChange}
                />
                <label></label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  required
                  className="validate"
                  placeholder="Contact Number"
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={this.handleChange}
                />
                <label></label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  className="validate"
                  placeholder="Salary"
                  type="text"
                  name="salary"
                  id="salary"
                  onChange={this.handleChange}
                />
                <label></label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  className="validate"
                  placeholder="Date Hired(mm/dd/yyyy)"
                  type="date"
                  name="dateHired"
                  id="dateHired"
                  onChange={this.handleChange}
                />
                <label></label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="submit"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddEmployee;
