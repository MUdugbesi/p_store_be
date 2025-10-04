const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//import routers
const authRoutes = require('./routes/auth-route');

app.use('/auth', authRoutes);

app.listen(3000, (req, res) => {
	console.log('Listening to port 3000');
});
