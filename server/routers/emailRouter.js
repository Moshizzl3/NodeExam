import { Router } from "express";
import { sendMail } from "../utils/emailGenerator.js";
import jwt from "jsonwebtoken"
const router = Router();

router.post("/mail/forgot", (req, res) => {
  const user =req.body
  sendMail(user, jwt.sign(user, process.env.EMAIL_TOKEN_SECRET))
    .then((mail) => {
      res.status(200).send({ data: mail });
    })
    .catch((err) => {
      res.status(404).send({ data: err });
    });
});

export default router;
