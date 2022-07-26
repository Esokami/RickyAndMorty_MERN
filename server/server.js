const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./config/mongoose.config");
require("./routes/character.route")(app);
require("./routes/user.routes")(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000");
});
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));