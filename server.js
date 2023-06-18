require('dotenv').config();

const port = process.env.PORT || 3002;
const express = require('express');
const cors = require('cors');

const app = new express();

// ROUTES
const cafeRoute = require('./routes/cafe.route');
const cafesTimingRoute = require('./routes/cafesTiming.route');


app.use(cors({
    origin: '*'
}));

app.use('/static', express.static('public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api/cafes', cafeRoute);
app.use('/api/cafes_timing', cafesTimingRoute);
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
