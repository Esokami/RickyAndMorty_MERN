require("dotenv").config();
const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || '8080';

app.set("port", PORT);

app.use(cors({origin: PORT, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '..', 'client/build')));
    app.get(/^\/(?!api).*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
    });
}

app.listen(
    PORT,
    console.log(`Server running on ${process.env.NODE_ENV}`)
);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

require("./config/mongoose.config");
require("./routes/character.routes")(app);
require("./routes/user.routes")(app);

