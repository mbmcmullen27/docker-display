
var express = require('express');
var bodyParser = require ('body-parser');
var Twitter = require('twitter');


const app = express();

app.use(bodyParser.json());

var client = new Twitter({
    consumer_key: '70kYEjcGR0SsZCFpG1ri7cmUC',
    consumer_secret: 'RKL4S1bmU1NApWJPfCsC7htXH09d1ObqUye62XzVmGHBPkjo4W',
    access_token_key: '1198346635987824641-QxKB5XJZEYLm53zfmjWh9LIzO3g10A',
    access_token_secret: 'ewp8sWFnm105ITbxG7ldeohW3jP7SguvvCnxCGg6lZeMn'
});

app.get("/bbcmicro", function(req, res, next) {
    //var client = util.pixelSearch();
    let prompt = req.query.prompt
    let query = 'from:bbcmicrobot'
    if(prompt) query = `#${prompt} AND ${query}`;

    client.get('search/tweets',{q:query,count:10}, 
        function(error, tweets, response) {
            if(error) console.log(error)
            res.send(tweets.statuses);
        })    
    }
);

app.listen(9000, () => {
    console.log('bbcmicro started on port 9000')
})

