import express from "express";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  res.send(`email: ${email}, password: ${password}\n`);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
