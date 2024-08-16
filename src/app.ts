import express from "express";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/user";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", async function (req, res) {
  const userRepo = connection.getRepository(User);

  // create a new user
  // let user = new User();
  // user.name = "John";
  // user.email = "wa@gmail.com";
  // user.password = "123456";
  // user = await userRepo.save(user);
  // console.log("User has been saved", user);

  // find all records
  // const user = await userRepo.find();

  // delete a record
  const user = await userRepo.delete({ id: 1 });

  //update a record
  // const user = await userRepo.update({ id: 1 }, { name: "John Doe" });

  // console.log(users);
  res.json(user);
  // res.send("hello world");
});

const connection = new DataSource({
  type: "postgres",
  host: "richtodo-richtodo.k.aivencloud.com",
  port: 28102,
  username: "avnadmin",
  password: "AVNS_wHzComkLV1iLuCgWJ_k",
  database: "defaultdb",
  synchronize: true,
  ssl: { rejectUnauthorized: false },
  // logging: true,
  entities: ["src/entities/*{.ts,.js}"],
});

connection
  .initialize()
  .then(() => {
    console.log("Connected to the database");
    app.listen(port, () => {
      console.log(`server is running on port ${port}.`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database", error);
  });
