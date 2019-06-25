const scraper = require('../lib/spotify-scraper')
const Album = require('../models/Album')

describe('validateUrl', () => {
    it('should return true', () => {
        var url = 'http://google.com';
        var result = scraper.validateUrl(url);
        expect(result).toBe(url);
    });

    it('should return error', () => {
        var url = '';
        expect(() => {
            scraper.validateUrl(url);
        }).toThrow();
    });

    it('should return undefined', () => {
        var url = 'x';
        var result = scraper.validateUrl(url);
        expect(result).toBeUndefined();
    });
});

describe('getAlbum', () => {
    it('should return error', () => {
        var body = '';
        expect(() => {
            scraper.getSpotifyAlbum(body);
        }).toThrow();
    });

    it('should return object', () => {
        var body = `
        <meta property="og:title" content="Unorthodox Jukebox">
        <meta property="og:image" content="https://i.scdn.co/image/da39a8f80539ea048011ee3aa59f4066659290ea">
        <meta property="twitter:audio:artist_name" content="Bruno Mars">
        <span class="track-name" dir="auto">Young Girls</span>
        <span class="track-name" dir="auto">Locked Out of Heaven</span>
        <span class="track-name" dir="auto">Gorilla</span>
        <span class="track-name" dir="auto">Treasure</span>
        <span class="track-name" dir="auto">Moonshine</span>
        <span class="track-name" dir="auto">When I Was Your Man</span>
        <span class="track-name" dir="auto">Natalie</span>
        <span class="track-name" dir="auto">Show Me</span>
        <span class="track-name" dir="auto">Money Make Her Smile</span>
        <span class="track-name" dir="auto">If I Knew</span>
        `;

        var album = new Album('Unorthodox Jukebox',
            'https://i.scdn.co/image/da39a8f80539ea048011ee3aa59f4066659290ea',
            'Bruno Mars', [
                'Young Girls',
                'Locked Out of Heaven',
                'Gorilla',
                'Treasure',
                'Moonshine',
                'When I Was Your Man',
                'Natalie',
                'Show Me',
                'Money Make Her Smile',
                'If I Knew'
            ]
        );
        var result = scraper.getSpotifyAlbum(body);
        expect(result).toEqual(album);
    });
});



