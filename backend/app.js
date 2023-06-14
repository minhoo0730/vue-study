const express = require('express');
const mongoose = require('mongoose');
const app = express();
const uri = "mongodb+srv://test:mi59081213!@atlascluster.5uigvgi.mongodb.net/Node-API?retryWrites=true&w=majority";
const cors = require('cors');

// API 파일경로
const indexRouter = require('./routes/index');
const menuRouter = require('./routes/api/menu');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// API 경로
app.use('/api', indexRouter);
app.use('/api/menu', menuRouter);

// 몽고DB
mongoose.set("strictQuery", false)
mongoose.connect(uri).then(() => {
  console.log('connected to MongoDB');
  app.listen(8000, () => {
    console.log('Node API app is running on port 8000');
  })
}).catch((error) => {
  console.log('error >>', error);
})
