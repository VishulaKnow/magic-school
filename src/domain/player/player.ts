import { Card } from "../card/card";
import { EventEmitter } from "../utils/eventEmitter";

export type PlayerName = string;

export interface Player {
    emitter: EventEmitter<PlayerEvents>;
    getName(): PlayerName;
    showCard(): Card;
    protect(): void;
    dropProtect(): void;
    isProtected(): boolean;
    kill(): void;
    setCard(card: Card): void;
}

interface PlayerEvents {
    cardDropped: { card: Card };
    killed: undefined;
}

interface PlayerOptions {
    name: PlayerName;
    initialCard: Card;
}

export class PlayerImpl implements Player {
    emitter = new EventEmitter<PlayerEvents>();

    private currentCard: Card;
    private _isProtected = false;

    constructor(private options: PlayerOptions) {
        this.currentCard = options.initialCard;
    }

    getName(): string {
        return this.options.name;
    }

    showCard(): Card {
        return this.currentCard;
    }

    protect(): void {
        this._isProtected = true;
    }

    dropProtect(): void {
        this._isProtected = false;
    }

    isProtected(): boolean {
        return this._isProtected;
    }

    kill(): void {
        this.emitter.emit("killed");
    }

    setCard(card: Card): void {
        this.currentCard = card;
    }
}
