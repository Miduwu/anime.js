# @midowo/anime.js
Get sfw and nsfw gifs from animes.

## Install
```
npm i @midowo/anime.js
```

## Usage
```js
const { AnimeClient } = require('@midowo/anime.js')
const GIFs = new AnimeClient({
    object: true
})

GIFs.sfw('kiss')
/** 
 {"url": String, "name": String}
*/
```

### Methods

#### SFW Gifs:
**`<AnimeClient>.sfw(name: String*): Object | String`**
#### NSFW Gifs:
**`<AnimeClient>.nsfw(name: String*): String`**
#### Validate name:
**`<AnimeClient>.isValidName(name: String, group: String): Boolean`**

### Available Gifs:

| SFW  | NSFW |
| ------------- |:-------------:|
| angry      | anal     |
| baka      | fuck     |
| bite      | suck     |
| blush      |      |
| cry      |      |
| dance      |      |
| deredere      |      |
| happy      |      |
| hug      |      |
| kiss      |      |
| pat      |      |
| punch      |      |
| slap      |      |
| sleep      |      |
| smug      |      |

## Suggest gifs by joining our [support server](https://discord.com/invite/3pT2WHG9EG)