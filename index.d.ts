export type AnimeClientOptions = {
    object?: boolean
}

export type AnimeObject = {
    url: string,
    name: string
}

export class AnimeClient {
    constructor(options: AnimeClientOptions);
    public sfw(name: string): AnimeObject | string;
    public nsfw(name: string): string;
    public isValidName(name: string, group: string): boolean;
}