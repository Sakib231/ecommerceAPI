const express = require('express')
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = 4000
const userRoute = require("./routes/user");
const transferRoute = require("./routes/transfer");
dotenv.config();


mongoose
    .connect(
      process.env.MONGO_URL
    )
    .then(() => console.log("dbconnection"))
    .catch((err)=>{
        console.log(err);
    });

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/transfer", transferRoute);

app.get('/', (req, res) => {
  res.send('Bank')
})

app.listen(port, () => {
  console.log(`Connected to bank ${port}`)
})