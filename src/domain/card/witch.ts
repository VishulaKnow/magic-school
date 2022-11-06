import { ExecutionContext } from "../session/executionContext";
import { SessionMessage } from "../session/sessionMessage";
import { CardImpl, CardInfo } from "./card";

export class Witch extends CardImpl {
    protected info: CardInfo = {
        name: "Witch",
        number: 3
    };

    executeAction(context: ExecutionContext): void {
        const playerCard = context.player.getCard();

        const message = new SessionMessage({
            text: `Player ${context.player.getName()} has card ${playerCard.getInfo().name} (${
                playerCard.getInfo().number
            })`
        });

        context.session.messageBus.postMessage(message);
    }
}
