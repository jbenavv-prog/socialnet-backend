module.exports = (app) => {
  app.use("/api/accounts", require("./accounts.route.js"));
};
