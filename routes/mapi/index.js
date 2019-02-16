/**
 * Created by zhaoyadong on 25/03/2017.
 */

var api = require('../../controllers/mapi/index.js');

module.exports = function(app){

    app.get('/mapi/:type/:name', api.weather);
    app.get('/mapi/:type', function(req, res){

    });
    app.get('/mapi', function(req, res){

    });
};