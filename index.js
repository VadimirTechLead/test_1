const express = require("express");
const my_twitter = require("my_twitter");
const serveStatic = require("serve-static");

const app = express();

app.use(serveStatic("public", { index: "index.html" }));

app.get("/:q", (req, res) => {
  my_twitter
    .get("search/tweets", req.params)
    .then(r => {
      res.send(r.statuses);
    })
    .catch(err => {
      res.status(400).send("Sorry cant find that! 400");
    });
});

app.use(function(req, res, next) {
  res.status(404).send("Sorry cant find that!");
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000);
