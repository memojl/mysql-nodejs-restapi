const express = require('express');
const colors = require('colors');
const app = express();
const PORT = process.env.PORT || 4000;

//settings
app.set('port',process.env.PORT || 4000);
//app.set('json spaces',2);

//middlewares
app.use(express.json());

//routes
app.use('/api', require('./routes/empleados'));

//server
app.listen(app.get('port'), () => {
  console.log(`Our app is running on port:`.blue + ` ${ app.get('port') }`.yellow);
});
