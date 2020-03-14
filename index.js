const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const path = require('path');
const viewsFolder = path.join(__dirname, "../bar-buddy-project/src", "views");
const routeConfig = require('./src/config/route-config.js');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.set('views', viewsFolder);
app.set('view engine', 'ejs');

routeConfig.init(app);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
