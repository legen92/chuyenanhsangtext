const express = require("express");
const serverless = require("serverless-http");
const { ocrSpace } = require('ocr-space-api-wrapper');

const apikey = 'K83645117788957'

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.post("/", async(req,res)=>{
  const data = req.body;
  // const text = await ocrSpace(`data:image/png;base64,${data}`, { apiKey: apikey, language: 'ita' });
  // const result = text.ParsedResults[0].ParsedText.replaceAll("\r\n"," ").trim()
  res.json(data)
})

app.use(`/`, router);

module.exports = app;
module.exports.handler = serverless(app);
