import { Card } from "./card/card";
import { Player, PlayerName } from "./player/player";
import { PlayersStore } from "./session/playersStore";

export interface Game {
    getPlayer(name: PlayerName): Player;
    getCurrentPlayer(): Player;
    switchPlayer(player: Player): void;
    getNextCard(): Card | null;
}

interface GameOptions {
    players: Player[];
    cards: Card[];
}

export class GameImpl implements Game {
    private playersStore: PlayersStore;
    private cards: Card[];

    constructor(private options: GameOptions) {
        if (options.players.length < 2) throw new Error("Should be more than 1 player!");
        this.playersStore = new PlayersStore(options.players);
        this.cards = options.cards;
    }

    getPlayer(name: PlayerName): Player {
        const player = this.options.players.find((p) => p.getName() === name);
        if (!player) throw new Error(`Player with name ${name} not found!`);
        return player;
    }

    getCurrentPlayer(): Player {
        return this.playersStore.getCurrentPlayer();
    }

    switchPlayer(): void {
        this.playersStore.switchPlayer();
    }

    getNextCard(): Card | null {
        const card = this.cards.pop();
        return card ?? null;
    }
}
