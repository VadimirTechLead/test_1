const Twitter = require("twitter");
const config = require("config");

const client = new Twitter(config.twitter);

module.exports = client;
