import { Card } from "../card/card";

export type PlayerName = string;

export interface Player {
    getName(): PlayerName;
    showCard(): Card;
    protect(): void;
    dropProtect(): void;
    isProtected(): boolean;
    kill(): void;
    setCard(card: Card): void;
    removeCard(card: Card): void;
}

interface PlayerEvents {
    cardDropped: (card: Card) => void;
}
