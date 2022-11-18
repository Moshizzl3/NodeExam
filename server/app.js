import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv/config";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const users = [{ id: 1, name: "Mo" }];

app.get("/", (req, res) => {
  res.status(200).send({ data: users });
});

console.log(process.env.SESSION_SECRET);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server is running on port:", PORT));
