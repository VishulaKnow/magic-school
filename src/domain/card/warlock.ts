import { ExecutionContext } from "../session/executionContext";
import { CardImpl, CardInfo } from "./card";

export class Warlock extends CardImpl {
    protected info: CardInfo = {
        name: "Warlock",
        number: 7
    };

    executeAction(context: ExecutionContext): void {
        super.executeAction(context);
        const playerCard = context.player.getCard();
        context.player.setCard(this.executor!.getCard());
        this.executor!.setCard(playerCard);
    }
}
