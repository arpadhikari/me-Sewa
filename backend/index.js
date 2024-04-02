const express       = require("express");
const cors          = require("cors");

const rootRouter    = require('./routes/index');

const app           = express();

//middlewares
app.use(cors());
app.use(express.json());

//api routes
app.use("/api/v1", rootRouter);


//listen
app.listen(3000);