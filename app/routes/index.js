module.exports = (app) => {
  app.use("/api/accounts", require("./accounts.route.js"));
  app.use("/api/auth", require("./auth.route"));
};