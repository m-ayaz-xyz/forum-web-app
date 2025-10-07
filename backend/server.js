const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const connectDb = require('./config/connectionDB')
const cors = require('cors')

const PORT = process.env.PORT || 1020
connectDb()
app.use(express.json());
app.use(cors());
app.use(express.static("public")) //for post image


app.use('/', require('./routes/user'))
app.use('/posts', require('./routes/posts'))


app.listen(PORT, ()=> console.log(`App listening on ${PORT}`)
)