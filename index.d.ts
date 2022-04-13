import { AnimeClient } from "./src/index";

export { AnimeClient }

export interface AnimeClientOptions {
    object?: boolean
}

export interface AnimeObject {
    url: string,
    name: string
}