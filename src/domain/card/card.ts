import { Player } from "../player/player";

type CardName = string;
type CardNumber = number;

interface CardInfo {
    name: CardName;
    number: CardNumber;
}

export interface Card {
    executeAction(player: Player): void;
    getInfo(): CardInfo;
}
