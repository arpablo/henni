export interface IBox {
    name: string;
    description?: string;
    words: IWord[];
}

export interface IWord {
    source: string;
    translation: string;
}