import express from "express";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});
