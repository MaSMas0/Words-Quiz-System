import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "colors";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import routes from "./routes/Routes.js";

dotenv.config(); // to call data from .env file

const app = express();

const port = process.env.PORT || 3001; // define port in which server will listen on

app.use(cors()); // using cors just in case not to have a cross-origin errors between server and client , also proxy was used on the front end

app.get("/", async (req, res) => {
  res.send("Hello from server side :D"); // just as a test for backend
});

app.use("/", routes); // using the routes specified in the routes.js file

app.use(notFound); // use error middleware
app.use(errorHandler); // use error middleware

app.listen(
  port,
  console.log(
    `Server is up and running in ${process.env.NODE_ENV} on http://localhost:${port}`
      .yellow // using colors to see the message clearer in the terminal
  )
);
