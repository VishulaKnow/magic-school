import { Protector } from "../card/protector";
import { RuneMaster } from "../card/runeMaster";
import { SupremeSorcer } from "../card/supremeSorcer";
import { Witch } from "../card/witch";
import { Game, GameImpl } from "../game";
import { Player, PlayerImpl } from "../player/player";
import { MessageBus } from "./messageBus";

export interface Session {
    messageBus: MessageBus;
    game: Game;
    resetCardForPlayer(player: Player): void;
}

export class SessionImpl implements Session {
    messageBus = new MessageBus();
    game: GameImpl;

    constructor() {
        this.game = new GameImpl({
            players: [
                new PlayerImpl({ name: "Kanye", initialCard: new Protector() }),
                new PlayerImpl({ name: "Pete", initialCard: new Protector() })
            ],
            cards: [
                new SupremeSorcer(),
                new Protector(),
                new Protector(),
                new RuneMaster(),
                new RuneMaster(),
                new Witch(),
                new Witch()
            ]
        });
    }

    resetCardForPlayer(player: Player): void {
        const nextCard = this.game.getNextCard();
        if (!nextCard) throw new Error("Card stack is empty!");
        player.setCard(nextCard);
    }
}
