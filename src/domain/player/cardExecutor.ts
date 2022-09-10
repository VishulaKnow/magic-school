import { Card } from "../card/card";
import { ExecutionContext } from "../session/executionContext";
import { Session } from "../session/session";
import { Player } from "./player";

export class CardExecutor {
    constructor(private _player: Player, private additionalCard: Card, private session: Session) {}

    getPlayer() {
        return this._player;
    }

    //TODO: card id
    executeCard(card: Card, targetPlayer: Player) {
        const context = new ExecutionContext(targetPlayer, this.session, this);
        card.executeAction(context);
    }

    getAnotherCard() {}
}
