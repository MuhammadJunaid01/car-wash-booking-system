import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

const main = async () => {
  try {
    await mongoose.connect(config.database_uri as string);
    // console.log("DB connected successfully.");
    app.listen(config.port, () => {
      // console.log(
      //   `assingment-03 server running on http://localhost:${config.port} `
      // );
    });
  } catch (error) {
    // console.log(error);
    process.exit(1);
  }
};
main();
