import { Router } from "express";
import bcrypt from "bcrypt";
import db from "../database/connection_mysql.js";
import jwt from "jsonwebtoken";

const router = Router();

router.get("/api/users/:id", async (req, res) => {
  const user = await db.execute("SELECT * FROM users WHERE id=?", [
    req.params.id,
  ]);
  console.log(req.headers['authorization'])
  res.status(200).send(user);
});

router.post("/api/users", async (req, res) => {
  const user = { ...req.body };
  const saltRounds = 12;
  user.password = await bcrypt.hash(user.password, saltRounds);
  await db.execute("INSERT INTO users(mail, password, role_id) VALUES(?,?,?)", [
    user.mail,
    user.password,
    2,
  ]);
  res.send("ok");
});

router.post("/api/users/login", async (req, res) => {
  const [rows, columns] = await db.execute("SELECT * FROM users WHERE mail=?", [
    req.body.mail,
  ]);
  console.log(req.headers['authorization'])
  if (rows.length > 0) {
    if (await bcrypt.compare(req.body.password, rows[0].password)) {
      const user = { id: rows[0].id, mail: rows[0].mail };
      const accesToken = jwt.sign({user: user}, process.env.ACCES_TOKEN_SECRET);
      return res.json(accesToken);
    } else res.status(401).send("notok");
  } else res.status(401).send();
});

export default router;
