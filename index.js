const express = require("express");
const my_twitter = require("my_twitter");
var app = express();

app.get("/", async (req, res) => {
  var params = { q: "nodejs" };
  let response = await my_twitter.get("search/tweets", params);
  res.send(response);
});

app.listen(3000);
