const path = require("path");
const express = require("express");
const app = express();
const helmet = require("helmet");

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
