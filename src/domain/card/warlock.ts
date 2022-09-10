import { ExecutionContext } from "../session/executionContext";
import { CardImpl, CardInfo } from "./card";

export class Warlock extends CardImpl {
    protected info: CardInfo = {
        name: "Warlock",
        number: 7
    };

    executeAction(context: ExecutionContext): void {
        const playerCard = context.player.getCard();
        const executorPlayer = context.executor.getPlayer();
        context.player.setCard(executorPlayer.getCard());
        executorPlayer.setCard(playerCard);
    }
}
