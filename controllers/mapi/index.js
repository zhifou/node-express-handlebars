/**
 * Created by zhaoyadong on 26/03/2017.
 */

var qs = require("querystring");
var mapi = require("../../configs/mapiConfiguration");
var httpHelper = require('../../utility/httphelper');

module.exports = {

    weather: function(req, res) {

        console.log(req.query);

        var thisRes = res;
        thisRes.setHeader("Cache-Control", "public,max-age=60");
        var query = qs.stringify(req.query);
        console.log(query);
        httpHelper.get(mapi.WeatherUrl + "?" + query, 1000, function (err, data) {
                if (err) {
                    console.log("Got Err: "  + err);
                }
                thisRes.send(data);
            }, 'utf-8', {'Authorization': "APPCODE " + mapi.AppCode}
        );

    }
};