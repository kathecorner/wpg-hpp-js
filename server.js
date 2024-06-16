const express = require("express")
const app = express();
//const cors = require('cors');
const PORT = 3000;

//app.use(cors());

app.get("/main/", (req, res) => {
    res.send("this message is shown at main folder");
    res.status(200).send("ok");
});
/*
const corsOptions = {
    origin: 'http://127.0.0.1:3000/',//(https://your-client-app.com)
    optionsSuccessStatus: 200,
};
 
//app.use(cors(corsOptions));

app.get('/authenticated-route', cors(corsOptions), (req, res) => {
    // Your route logic here
  });*/

app.use(express.static("./public"));

app.listen(PORT, () => console.info(`server is running at Port 3000`));