import { AnimeClient } from "./src/index";

export interface AnimeClientOptions {
    object?: boolean
}

export interface AnimeObject {
    url: string,
    name: string
}

export { AnimeClient }