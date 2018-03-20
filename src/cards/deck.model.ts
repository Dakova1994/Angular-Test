export interface IDeck {
    success: boolean;
    deck_id: string;
    shuffled: boolean;
    remaining: number;
}

export interface IPile {
    success: boolean;
    cards: ICard[];
    deck_id: string;
    remaining: number;
}

export interface ICard {
    image: string;
    value: string;
    suit: string;
    code: string;
}