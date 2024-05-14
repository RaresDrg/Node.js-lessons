import express from "express";

const app = express();

//* http://localhost:3000/contact?page=1&perPage=10 // ==> {skip: 0, limit=10}

app.get("/contact", (req, res) => {
  res.send(`<h1>Contact page</h1>`);
  console.log(req.query); // ==>: {page: 1, perPage=10} //
  // ==> const { page, perPage } = req.query; //
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
