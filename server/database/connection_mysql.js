import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "127.0.0.1",
  user: "Mo",
  password: "mopass",
  database: "mandatory2",
});

export default connection;
