import { Card } from "./card/card";
import { Player, PlayerName } from "./player/player";

export interface GameFacade {
    getPlayer(name: PlayerName): Player;
    getCurrentPlayer(): Player;
    setCurrentPlayer(): Player;
    getNextCard(): Card | null;
}

export interface GameEvents {
    playerKilled: (player: Player) => void;
}

export class Game {}
