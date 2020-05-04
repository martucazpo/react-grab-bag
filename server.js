
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => {
    console.log("App is ALWAYS listening on port " + PORT);
});
