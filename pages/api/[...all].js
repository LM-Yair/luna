const error = (req, res) => {
  const url = req.url;
  const method = req.method;
  res.status(404).send({
    error: true,
    status: "FAILED",
    statusCode: 404,
    method,
    statusText: {
      es: "la ruta no esta disponible (╯°□°）╯︵ ┻━┻",
      en: "path is not exists (╯°□°）╯︵ ┻━┻",
    },
    url,
  });
};
export default error;
