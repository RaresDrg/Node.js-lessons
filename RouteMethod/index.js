import express from "express";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("HELLO FROM HOMEPAGE"));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
