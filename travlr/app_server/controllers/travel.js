var request = require('request');
var apiOptions = {
 server: 'http://localhost:3000'
}

//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

/* render travel list view */
var renderTravelList = (req, res, responseBody) => {
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Travel';

    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No trips exist in our database!';
        }
    }

    res.render('travel', 
    {
        title: pageTitle,
        trips: responseBody,
        message
    });
};

/* GET Travel View */
var travelList = (req, res) => {
    var path = '/api/trips';
    var requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> travelController.travelList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode }, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    )
}

module.exports = {
    travelList
};