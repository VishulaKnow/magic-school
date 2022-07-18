import { Protector } from "../card/protector";
import { RuneMaster } from "../card/runeMaster";
import { SupremeSorcer } from "../card/supremeSorcer";
import { Witch } from "../card/witch";
import { GameImpl } from "../game";
import { Player, PlayerImpl } from "../player/player";
import { SessionMessage } from "./sessionMessage";

export interface Session {
    postMessage(message: SessionMessage): void;
    resetCardForPlayer(player: Player): void;
}

export class SessionImpl implements Session {
    private game: GameImpl;

    constructor() {
        this.game = new GameImpl({
            players: [
                new PlayerImpl({ name: "Kanye", initialCard: new Protector(this) }),
                new PlayerImpl({ name: "Pete", initialCard: new Protector(this) })
            ],
            cards: [
                new SupremeSorcer(this),
                new Protector(this),
                new Protector(this),
                new RuneMaster(this),
                new RuneMaster(this),
                new Witch(this),
                new Witch(this)
            ]
        });
    }

    postMessage(message: SessionMessage): void {
        throw new Error("Method not implemented.");
    }

    resetCardForPlayer(player: Player): void {
        const nextCard = this.game.getNextCard();
        if (!nextCard) throw new Error("Card stack is empty!");
        player.setCard(nextCard);
    }
}
