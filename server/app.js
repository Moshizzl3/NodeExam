import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv/config";
import usersRouter from "./routers/usersRouter.js";
import emailRouter from "./routers/emailRouter.js";


const app = express();

app.use(helmet());
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

app.use(usersRouter);
app.use(emailRouter);

app.get("/", (req, res) => {
  res.send("ok");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server is running on port:", PORT));
