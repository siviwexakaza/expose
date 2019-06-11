const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path =require('path');
const cors = require('cors');
const db = require('./config/db').database;
const port = process.env.PORT || 5000;
const exposeRoutes = require('./routes/api/expose');
const messageRoutes = require('./routes/api/message');

const app = express();

app.use(bodyParser.json());
app.use(cors());

//Connecting to mongodb

mongoose.connect(db,{useNewUrlParser:true}).then(()=>{
    console.log('Connected to mongodb');
}).catch((err)=>{
    console.log(err);
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.use('/api/expose',exposeRoutes);
app.use('/api/messages',messageRoutes);

app.listen(port,()=>{
    console.log('Server running on port', port);
});


