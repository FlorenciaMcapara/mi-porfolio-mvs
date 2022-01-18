 const { Router } = require('express');
const express = require('express'); 
const mainRouters = require('./routers/main');

const app = express();

const port = process.env .PORT || 3000;

app.use('/', mainRouters);
app.use(express.static('public'));
app.listen(port, () =>{
console.log('server started on port '+ port);
});


