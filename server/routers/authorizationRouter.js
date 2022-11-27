import Router from "express";
import jwt from "jsonwebtoken";

const router = Router();

router.get("/api/redPill/page", authenticateToken, (req, res) => {
  if (req.user.role != 1) {
    return res.sendStatus(401);
  }
  return res.sendStatus(200);
});

router.get("/api/bluepill/page", authenticateToken, (req, res) => {
  if (req.user.role != 2) {
    return res.sendStatus(401);
  }
  return res.sendStatus(200);
});

router.get("/api/mail/token", authenticateMailToken, (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  return res.status(200).send({data: req.user.mail});
});



function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCES_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function authenticateMailToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.EMAIL_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

export default router;
