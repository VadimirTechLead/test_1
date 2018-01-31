const twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY || "g42rds2r4lT141kXRY654Hr8r",
  consumer_secret:
    process.env.TWITTER_CONSUMER_SECRET ||
    "HNG68Xa2Jnqir1CzzGWvgbUljhSpMf89Y0V7ONErEQDAWpjTTM",
  access_token_key:
    process.env.TWITTER_ACCESS_TOKEN_KEY ||
    "318039458-qxb2LvvfkDAe9i4vAPtSfSTYulapSGaXfqhYelsC",
  access_token_secret:
    process.env.TWITTER_ACCESS_TOKEN_SECRET ||
    "Pfvu0bxnlwLA8QUoupzajoIQvrmU4DudW9u5Ezupty7Zn"
};
const server = {
  port: process.env.PORT || 3000
};

module.exports = {
  twitter,
  server
};
