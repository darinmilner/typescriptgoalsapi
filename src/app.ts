//Gateway Application
import express from "express";
export const app = express();

app.get("/", (req, res) => {
  console.log("get home");
  res.send("Bismillah, salam alaikum");
});
