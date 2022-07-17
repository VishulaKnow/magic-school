import { EventEmitter } from "./utils/eventEmitter";
import { Card } from "./card/card";
import { Player, PlayerName } from "./player/player";

export interface GameFacade {
    emitter: EventEmitter<GameEvents>;
    getPlayer(name: PlayerName): Player;
    getCurrentPlayer(): Player;
    setCurrentPlayer(): Player;
    getNextCard(): Card | null;
}

export interface GameEvents {
    playerKilled: { player: Player };
}

export class Game {}
