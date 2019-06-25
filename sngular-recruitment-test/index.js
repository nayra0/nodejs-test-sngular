const scraper = require('./lib/spotify-scraper');
const express = require('express');
const app = express();
const favicon = require('serve-favicon');

app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.get('/api/album/', (req, res) => {
    var url = req.query.url;
    scraper.processUrlAlbum(url)
        .then((response) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200);
            res.send(JSON.stringify(response));
        })
        .catch((err) => {
            res.status(err.status || 500).json({status: err.status, message: err.message})
            res.destroy();
        })
});

app.listen(3000, () => console.log('Listening on port 3000...'));