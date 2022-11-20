import { Router } from "express";
import session from "express-session";
import bcrypt from "bcrypt";

const router = Router();

const users = [{ id: 1, name: "Mo", password: "123" }];

router.get("/api/users/:id", (req, res) => {
  const user = users.find((user) => user.id === Number(req.params.id));
  session.user = user;
});

router.post("/api/users", async (req, res) => {
  const user = { ...req.body };
  const saltRounds = 12;
  user.password = await bcrypt.hash(user.password, saltRounds);

  users.push(user);
  console.log(users);
  res.send("ok");
});

router.post("/api/users/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  const isTrue = await bcrypt.compare(req.body.password, user.password);
  if (isTrue) {
    res.status(200).send({ data: user });
    session.user = user;
  } else res.status(401).send();
});

export default router;
