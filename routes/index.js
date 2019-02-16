/**
 * Created by zhaoyadong on 28/07/2014.
 */

var mapi = require('./mapi/index.js');

module.exports = function(app){
    app.get('/readme', function(req, res){
        res.render('readme', {title: '文档说明'});
    });
    app.get('/', function(req, res){
        res.render('index', {title: 'Husky系统'});
    });

    app.get('/support', function(req, res){
        res.render('support', {title: '技术支持'});
    });

    // 注册mapi相关的route
    mapi(app);
};
