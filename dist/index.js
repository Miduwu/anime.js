"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimeClient = void 0;
class AnimeClient {
    object;
    constructor(options) {
        if (typeof options.object !== 'boolean')
            throw new TypeError('Names option must be boolean.');
        this.object = options.object || true;
    }
    sfw(name) {
        if (!name || typeof name !== 'string')
            throw new TypeError('You must provide a valid interaction/reaction name. Ex: kiss');
        if (!this.isValidName(name.toLowerCase(), 'sfw'))
            throw new TypeError('Invalid name provided.');
        let object = require(`./gifs/sfw/${name.toLocaleLowerCase()}.json`);
        return this.object ? this.random(object) : this.random(object).url;
    }
    nsfw(name) {
        if (!name || typeof name !== 'string')
            throw new TypeError('You must provide a valid interaction/reaction name. Ex: kiss');
        if (!this.isValidName(name.toLocaleLowerCase(), 'nsfw'))
            throw new TypeError('Invalid name provided.');
        let object = require(`./gifs/nsfw/${name.toLocaleLowerCase()}.json`);
        return this.random(object);
    }
    isValidName(name, group) {
        let is;
        try {
            let b = require(`./gifs/${group}/${name.toLowerCase()}.json`);
            is = b ? true : false;
        }
        catch {
            is = false;
        }
        return is;
    }
    random(array) {
        let random = Math.floor(Math.random() * array.length);
        return array[random];
    }
}
exports.AnimeClient = AnimeClient;
