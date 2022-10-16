import { getTweetsLatestController } from "server/controller/statuses/HomeTimeline";

const getTweetsLatest = (req,res) => {
  const url = req.url;
  const method = req.method;
  try {
    if (req.method === "GET") {
      const tweets = getTweetsLatestController();
      const statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.status(statusCode);
      res.send({
        status: "OK",
        statusCode,
        method,
        tweets,
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
}

export default getTweetsLatest;
