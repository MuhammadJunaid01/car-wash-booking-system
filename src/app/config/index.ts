import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.join(process.cwd(), ".env"),
});
export default {
  database_uri: process.env.DATABASE_URL,
  port: process.env.PORT,
  refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};
