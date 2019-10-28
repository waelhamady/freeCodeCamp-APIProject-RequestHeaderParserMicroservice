module.exports = function(app){
  
var acceptLanguageMiddleware = require("accept-language-middleware");
var UAParser = require('ua-parser')

app.use(acceptLanguageMiddleware());

app.get('/api/whoami',function(req,res){
  res.json({"ipaddress":req.ip,
            "language":req.locale,
            "software":req.headers['user-agent']})
})

  
  
}