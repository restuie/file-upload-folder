'use strict';
const express = require('express');
const path = require('path');

const bodyParser = require('body-parser')
const cors = require('cors')
const fileRoutes = require('./routes/file-upload-routes')

const port = process.env.PORT || 8080
const app = express()
require('./database')()

app.use(cors())
app.use(bodyParser.json())
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use('/api',fileRoutes.routes)


app.listen(port,()=> console.log(`server is listening on url http://localhost:${port}`))