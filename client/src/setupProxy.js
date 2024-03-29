const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/api/employees", "/api/addEmployee", "/api/deleteEntry"], {
      target: "http://localhost:8080"
    })
  );
};
