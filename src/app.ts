import express from "express";
import "reflect-metadata";
import { DataSource } from "typeorm";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", function (req, res) {
  res.send("hello world");
});

const connection = new DataSource({
  type: "postgres",
  host: "richtodo-richtodo.k.aivencloud.com",
  port: 28102,
  username: "avnadmin",
  password: "AVNS_wHzComkLV1iLuCgWJ_k",
  database: "defaultdb",
  // synchronize: true,
  ssl: { rejectUnauthorized: false },
  // logging: false,
  // entities: ["src/entity/**/*.ts"],
});

connection
  .initialize()
  .then(async () => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.log("Error connecting to the database", error);
  });

app.listen(port, () => {
  console.log(`server is running on port ${port}.`);
});
