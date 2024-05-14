import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [
  {
    name: "Alex",
    age: 13,
    id: uuidv4(),
  },
  {
    name: "Paul",
    age: 18,
    id: uuidv4(),
  },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:userId", (req, res) => {
  const contactId = req.params.userId;

  const specificUser = users.find((item) => item.id === contactId);

  res.send(specificUser || "contactul nu exista");
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`${user?.name} has been added to the Database`);
});

export default router;
