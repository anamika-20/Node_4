import express, { urlencoded } from "express";
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(urlencoded({ extended: true }));

// Array to store usernames
let users = [];

// Home route
app.get("/", (req, res) => {
  res.render("index");
});

// User route
app.post("/user", (req, res) => {
  const { username } = req.body;
  users.push(username);
  res.redirect("/users");
});

app.get("/users", (req, res) => {
  res.render("users", { users });
});

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
