import { Player } from "../player/player";
import { SessionMessage } from "../session/sessionMessage";
import { CardImpl, CardInfo } from "./card";

export class Witch extends CardImpl {
    protected info: CardInfo = {
        name: "Witch",
        number: 3
    };

    executeAction(player: Player): void {
        super.executeAction(player);
        const playerCard = player.getCard();

        const message = new SessionMessage({
            text: `Player ${player.getName()} has card ${playerCard.getInfo().name} (${playerCard.getInfo().number})`
        });

        this.session.postMessage(message);
    }
}
