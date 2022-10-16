import {getTweetByIdController} from "server/controller/statuses/tweets/tweets";

const getTweetCommentsById = (req, res) => {
  const url = req.url;
  const method = req.method;
  try {
    if (method === "GET") {
      const { id } = req.query;
      if (!id) {
        throw {
          statusCode: 400,
          statusText: {
            en: "'id' no esta definido",
            en: "'id' is missing",
          },
          input: id,
        };
      }
      const tweet = getTweetByIdController({ id });
      const statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.status(statusCode).send({
        status: "OK",
        statusCode,
        method,
        tweet,
        url,
      });
      return;
    }
    throw {
      statusCode: 405,
      statusText: {
        es: `'${method}' no esta permitido usa ['GET']`,
        en: `'${method}' method not allowed, use ['GET']`,
      },
    };
  } catch (err) {
    const statusCode = err.statusCode || 500;
    res.status(statusCode);
    res.send({
      error: true,
      status: "FAILED",
      statusCode,
      ...err,
      url,
    });
  }
};

export default getTweetCommentsById;
