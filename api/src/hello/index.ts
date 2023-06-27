const helloModule: APIModule = {
  middleware: (app) => {
    app.get("/hello/:name", (req, res) => {
      res.send({ hello: req.params.name });
    });
  },
};
export default helloModule