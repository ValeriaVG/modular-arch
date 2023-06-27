const healthModule: APIModule = {
  middleware: (app) => {
    app.get("/health", (req, res) => {
      res.send({ status: "OK" });
    });
  },
};
export default healthModule