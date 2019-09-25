const mongoose = require("mongoose");
const Employee = require("../../models/employee");

module.exports = app => {
  //@route GET api/employees
  //@desc Get all employees data
  app.get("/api/employees", (req, res) => {
    Employee.find()
      .sort({ date: -1 })
      .then(employees => res.json(employees));
  });

  //@route POST api/employees
  //@desc create new employee data
  app.post("/api/addEmployee", (req, res) => {
    let existingEmail = req.body.email;
    Employee.findOne({ email: `${existingEmail}` }).then(employee => {
      if (employee) {
        res.json({ error: "email taken" });
      } else {
        const newEmployee = new Employee({
          name: req.body.name,
          email: req.body.email,
          position: req.body.position,
          phone: req.body.phone,
          salary: req.body.salary,
          dateHired: req.body.dateHired
        })
          .save()
          .then(employee => {
            res.send(employee);
          })
          .catch(err => res.send(err));
      }
    });
  });
};
