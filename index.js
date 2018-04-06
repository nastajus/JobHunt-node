let express = require('express');
let path = require('path');
const port       = process.env.PORT || 3006;


// web app setup
const apiRoutes = require('./routes/api');
const app = express();
app.use(express.static(path.resolve('./styles')));



// Set the default templating engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/api', apiRoutes);


app.get('/', function (req, res) {
	res.render('index.ejs', {} );
});


app.listen(port, function () {
	console.log('listening on port ' + port);
});
