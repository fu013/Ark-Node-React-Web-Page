const express = require("express");
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require("cors");
const session = require("express-session");
const connect = require("./schemas");
const port = process.env.PORT || 9983; 

connect();

const corsOptions = {
  origin: true,
  credentials: true
};

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "scarlet",
    cookie: {
      httpOnly: true,
      secure: false
    }
  })
);

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/member", require("./routes/memberRouter"));
app.use("/board", require("./routes/boardRouter"));

app.listen(port, () => {
  console.log(`listen on port ${port}...`);
});
