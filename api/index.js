import express from "express";

import cors from "cors";

import db from "./config/db.js";
import indexRouter from "./routes/index.route.js";

const app = express();

app.set("port", process.env.PORT || 3000);

//middlewares
app.use(express.json());

app.use(cors());

//routes
app.use("/", indexRouter);
app.use("*", indexRouter);

//start server
app.listen(app.get("port"), () => {
    console.log("Server is running on port", app.get("port"));
});

//connect to DB
//db.connect().then(() => {    
db.query("SELECT 1").then(() => {
    console.log("Connected to database TrackIoT");
}).catch((err) => {
    console.log("Error: ", err);
})

