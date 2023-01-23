const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors()) //Permitir requisições no domínio

app.use(express.json()) //Permitir requisições no formato JSON

// DB connection 
const conn = require ("./db/conn");
conn();

// Routes
const routes = require("./routes/router");
app.use('/api', routes);


app.listen(3333, () => {
    console.log("Server is running!")
});

// OHEwDcON2FqlDd5N