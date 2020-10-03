const Pool = require("pg").Pool;
const db = new Pool({
  user: "username",
  host: "localhost",
  database: "dbname-node",
  password: "password",
  port: 5432,
});
db.on("connect", () => {
  console.log("Db connecteed succesfully...");
});
module.exports = db;
