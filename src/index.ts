import env from "@/env";
import express from "express";
import bodyParser from "body-parser";
import routes from "@/routes";
import errorHandler from "@/error-handler";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.use(errorHandler);

app.listen(env.PORT);