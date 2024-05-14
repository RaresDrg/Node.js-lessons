import express from "express";

const app = express();

//& MIDDLEWARE //
app.use((req, res, next) => {
  console.log("Middleware-ul nostru");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

//^ SIMBOLURI: //

//* ? => cotact, contact //
// app.get("/con?tact", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });

//* + => contact, conntact, connntact, etc //;
// app.get("/con+tact", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });

//* * => contact, conxtact, con123tact, etc //;
// app.get("/con*tact", (req, res) => {
//   res.send("<h1>Contact page</h1>");
// });

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
