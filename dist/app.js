// const express=require('express')
// const app=express();
// const cors = require('cors');
// const pageroutes=require('./routes/pages');

// const corsOpts = {
//     origin: '*',

//     methods: [
//       'GET',
//       'POST',
//       'DELETE',
//       'PUT'
//     ],

//     allowedHeaders: [
//       'Content-Type',
//     ],
//   };

//   app.use(express.json());
//   app.use(cors(corsOpts));
//   app.use('/',pageroutes)
//   app.use('/home',pageroutes);
//   app.use('/about',pageroutes);
//   app.use('/services',pageroutes);
//   app.use('/contact',pageroutes);

//   module.exports = app;