import db from "./connection_mysql.js";
import bcrypt from "bcrypt";

const isInDeletemode = true;

if (isInDeletemode) {
  await db.execute("DROP TABLE IF EXISTS users;");
  await db.execute("DROP TABLE IF EXISTS roles;");
}

await db.execute(
  `CREATE TABLE IF NOT EXISTS roles(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(50));`
);

await db.execute(
  `CREATE TABLE IF NOT EXISTS users(
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(50),
      mail VARCHAR(50),
      password VARCHAR(255),
      role_id INT,
      CONSTRAINT fk_user_role FOREIGN KEY(role_id) REFERENCES roles(id)
      )
      `
);

await db.execute("INSERT INTO roles (role_name) VALUES('Red')");
await db.execute("INSERT INTO roles (role_name) VALUES('Blue')");

const redPasswordHashed = await bcrypt.hash("red", 12);

await db.execute("INSERT INTO users(name, mail, password, role_id) VALUES(?,?,?,?)", [
  "Neo",
  "red@test.dk",
  redPasswordHashed,
  1,
]);

const bluePasswordHashed = await bcrypt.hash("blue", 12);

await db.execute("INSERT INTO users(name, mail, password, role_id) VALUES(?,?,?,?)", [
  "Not ready guy",
  "blue@test.dk",
  bluePasswordHashed,
  2,
]);

db.end();
