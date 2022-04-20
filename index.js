const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Look bruh, I can code now! Look bruh!!!");
});

const users = [
  {
    id: 1,
    name: "Shabana ",
    email: "shabana@shaban.com",
    phone: "01788888888",
  },
  {
    id: 2,
    name: "Shabnoor",
    email: "shabnoor@shabnoor.com",
    phone: "01788888888",
  },
  {
    id: 3,
    name: "Shuchorita",
    email: "shuchorita@ymail.com",
    phone: "01788888888",
  },
  {
    id: 4,
    name: "Shuchonda",
    email: "shuchonda@gmail.com",
    phone: "01788888888",
  },
  {
    id: 5,
    name: "Shrabonti",
    email: "shrabonti@shrabonti.com",
    phone: "01788888888",
  },
  {
    id: 6,
    name: "Sabila ",
    email: "sabila@sabla.com",
    phone: "01788888888",
  },
];

app.get("/users", (req, res) => {
  //Filter by query parameter or, Search Query
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
  }
  console.log("Query:", req.query);
  res.send(users);
});
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id - 1;
  const user = users[id];
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["Mango", "Pinapple", "Orange", "Jackfruit", "Woodapple"]);
});
app.get("/fruits/mango/fazlee", (req, res) => {
  res.send("Fazlee is sour and sweet");
});

app.post("/user", (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});
app.listen(port, () => {
  console.log("Listening to port", port);
});
