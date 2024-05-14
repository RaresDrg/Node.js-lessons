import express from "express";

const app = express();

//* http://localhost:3000/contact/test123 // ==> Parametrul: test123
app.get("/contact/:id", (req, res) => {
  res.send(`<h1>Contact</h1> Parametrul: ${req.params.id}`);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
