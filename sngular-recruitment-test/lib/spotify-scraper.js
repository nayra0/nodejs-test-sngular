const requestPromise = require('request-promise');
const cheerio = require('cheerio');
const validUrl = require('valid-url');
const Album = require('../models/Album');

function processUrlAlbum(url) {
    return new Promise((resolve, reject) => {
        try {
            if (validateUrl(url)) {
                requestBodyData(url)
                    .then((body) => {
                        var album = getSpotifyAlbum(body);
                        resolve(album);
                    })
                    .catch((err) => {
                        reject(err);
                    })
            } else {
                reject(new Error(`Url '${url}' is invalid`));
            }
        } catch (err) {
            reject(err);
        }
    })
}

function getSpotifyAlbum(body) {
    if (!body) {
        throw new Error('Empty body');
    }

    var $ = cheerio.load(body);
    var album = new Album();
    album.title = $("meta[property='og:title']").attr("content");
    album.cover_img_url = $("meta[property='og:image']").attr("content");
    album.author = $("meta[property='twitter:audio:artist_name']").attr("content");
    album.songs = [];

    $('span.track-name').each(function () {
        album.songs.push($(this).text());
    });

    return album;
}

function validateUrl(url) {
    if (!url) {
        throw new Error('Empty url');
    }
    return validUrl.isUri(url);
}

function requestBodyData(url) {
    return new Promise((resolve, reject) => {
        const options = {
            url,
            transform: function (body) {
                return body;
            }
        };
        requestPromise.get(options)
            .then((body) => {
                resolve(body);
            })
            .catch((err) => {
                reject(err);
            })
    })
}

module.exports.processUrlAlbum = processUrlAlbum;
module.exports.requestBodyData = requestBodyData;
module.exports.validateUrl = validateUrl;
module.exports.getSpotifyAlbum = getSpotifyAlbum;