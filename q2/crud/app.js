import express from "express";
const app = express();
import path from "path";
import connectDB from "./db/connectdb.js";
import router from "./routes/web.js";

const port = "3000";
const DATABASE_URI = "mongodb://127.0.0.1";

// accessing public folder
app.use(express.static(path.join(process.cwd(), "public")));

app.use(express.urlencoded({ extended: false }));

// app.use(express.static(join(__dirname, "public")));
// setting view engine
app.set("view engine", "ejs");
app.use(router);

connectDB(DATABASE_URI);

app.listen(port, () => {
  console.log(`runnit at port ${port}`);
});
