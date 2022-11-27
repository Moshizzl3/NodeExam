import Router from "express";
import db from "../database/connection_mysql.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/api/authenticate", async (req, res) => {
  const [rows, columns] = await db.execute("SELECT * FROM users WHERE mail=?", [
    req.body.mail,
  ]);
  console.log(rows[0]);
  if (rows.length > 0) {
    if (await bcrypt.compare(req.body.password, rows[0].password)) {
      const user = {
        id: rows[0].id,
        mail: rows[0].mail,
        role: rows[0].role_id,
      };
      const accesToken = jwt.sign(user, process.env.ACCES_TOKEN_SECRET);
      return res.json({ accesToken });
    }
    return res.status(401).send("notok");
  }
  return res.status(401).send();
});

export default router;
