class AnimeClient {
    constructor(options = {
        object: true
    }) {
        if(typeof options.object !== 'boolean') throw new Error('Names option must be boolean.')
        this.object = options.object
    }
    /**
     * 
     * @param {string} name Type of the gif
     * @returns {string|object} With the data
     */
    sfw(name) {
        if(!name || typeof name !== 'string') throw new Error('You must provide a valid interaction/reaction name. Ex: kiss')
        if(!this.isValidName(name.toLowerCase(), 'sfw')) throw new Error('Invalid name provided.')
        let object = require(`../gifs/sfw/${name.toLocaleLowerCase()}.json`)
        return this.object ? this.random(object): this.random(object).url
    }
    /**
     * 
     * @param {string} name Type of the gif
     * @returns {string} The url of the gif
     */
    nsfw(name) {
        if(!name || typeof name !== 'string') throw new Error('You must provide a valid interaction/reaction name. Ex: kiss')
        if(!this.isValidName(name.toLocaleLowerCase(), 'nsfw')) throw new Error('Invalid name provided.')
        let object = require(`../gifs/nsfw/${name.toLocaleLowerCase()}.json`)
        return this.random(object)
    }
    /**
     * 
     * @param {string} name Name of the interaction/reaction anime.
     * @param {string} group The group of this interaction/reaction anime name.
     * @returns {boolean} If the name is a valid gif in our database.
     */
    isValidName(name, group) {
        let is;
        try {
            let b = require(`../gifs/${group}/${name.toLowerCase()}.json`)
            is = b ? true: false
        } catch {
            is = false
        }
        return is
    }
    /**
     * 
     * @param {Object[]} array The array of objects to get one
     * @returns {Object} The final object
     */
    random(array) {
        let random = Math.floor(Math.random() * array.length)
        return array[random]
    }
}
module.exports = AnimeClient