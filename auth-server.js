const express = require("express");
const axios = require("axios");
const cors = require("cors");

let loggedIn = false;
let loggedInUsername = null;
let loggedInAt = null;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (password === "pass") {
    loggedInUsername = username;
    loggedInAt = new Date();
    loggedIn = true;

    return res.json({ username });
  } else {
    return res.status(401).json({
      message: "Nome utente o password errati",
    });
  }
});

app.post("/logout", (req, res) => {
  loggedIn = false;
  return res.status(200).end();
});

function isLoggedIn() {
  return loggedIn;
  // return loggedIn && loggedInAt && new Date() - loggedInAt < 10_000;
}

app.get("/status", (req, res) => {
  if (isLoggedIn()) {
    return res.json({
      username: loggedInUsername,
    });
  } else {
    return res.status(401).end();
  }
});

app.use("/*", (req, res) => {
  if (isLoggedIn()) {
    axios({
      url: "http://localhost:3000" + req.baseUrl,
      method: req.method,
      data: req.body,
    })
      .then((r) => res.json(r.data))
      .catch((e) => res.status(e.response?.status || 400).end());
  } else {
    return res.status(401).end();
  }
});

const server = app.listen(3001);
console.log(`Mock auth server listening on port ${server.address()?.port}`);
