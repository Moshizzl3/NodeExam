import { Router } from "express";
import bcrypt from "bcrypt";
import db from "../database/connection_mysql.js";

const router = Router();

router.get("/api/users/:mail", async (req, res) => {
  const [rows, columns] = await db.execute("SELECT * FROM users WHERE mail=?", [
    req.params.mail,
  ]);
  console.log(rows[0]);
  if (rows[0]) {
    return res.status(200).send(rows[0]);
  } else return res.status(404).send({ mesaage: "no" });
});

router.post("/api/users", async (req, res) => {
  const user = { ...req.body };
  const saltRounds = 12;
  user.password = await bcrypt.hash(user.password, saltRounds);
  await db.execute(
    "INSERT INTO users(name, mail, password, role_id) VALUES(?,?,?,?)",
    [user.name, user.mail, user.password, 2]
  );
  res.send("ok");
});

router.patch("/api/users", async (req, res) => {
  console.log("inde")
  const mail = req.body.mail;
  let password = req.body.password;
  console.log(password)
  const saltRounds = 12;
  password = await bcrypt.hash(password, saltRounds);
  const test = await db.execute("UPDATE users SET password = ? WHERE mail = ?;", [
    password,
    mail,
  ]);

  res.sendStatus(200)
});

export default router;
