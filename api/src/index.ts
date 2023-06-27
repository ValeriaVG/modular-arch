import Express from "express";
import healthModule from "./health/index";
import helloModule from "./hello/index";

const modules = [healthModule, helloModule]

const app = Express();

modules.forEach(mod=>mod.middleware(app))

app.listen(3000, "localhost", () => {
  console.log("Listening on http://localhost:3000");
});
