import path from "path";
import dotenv from "dotenv";
import { str, num, cleanEnv } from "envalid";

const envPathFile = path.resolve(__dirname, "../.env");
dotenv.config({
  path: envPathFile,
});

const env = cleanEnv(process.env, {
  STRIPE_SECRET_API_KEY: str(),
  PORT: num({ default: 3000 }),
});

export default env;
