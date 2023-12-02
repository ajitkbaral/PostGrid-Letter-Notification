import express from "express";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();

const app = express();

app.use(express.text());

app.post("/v1/letter-notification", (req, res) => {
  try {
    const token = req.body;
    const secret = process.env.WEBHOOK_SECRET;
    const webhookRes = jwt.verify(token, secret);
    console.log("Webhook Response", webhookRes);
    res.status(200).json({ res: webhookRes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`PostGrid Notification Server is listening at port ${port}`)
);
