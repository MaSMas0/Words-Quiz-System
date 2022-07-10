import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "colors";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import routes from "./routes/Routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/", async (req, res) => {
  res.send("Hello from server side :D");
});

app.use("/", routes);

app.use(notFound);
app.use(errorHandler);

app.listen(
  port,
  console.log(
    `Server is up and running in ${process.env.NODE_ENV} on http://localhost:${port}`
      .yellow
  )
);
