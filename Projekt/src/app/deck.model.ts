export interface IDeck {
    success: boolean;
    deck_id: string;
    shuffled: boolean;
    remaining: number;
}

export interface ICards {
    success: boolean;
    cards: [
        {
            image: string;
            value: string;
            suit: string;
            code: string;
        }
    ];
    deck_id: string;
    remaining: number;
}
