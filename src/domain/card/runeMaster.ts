import { ExecutionContext } from "../session/executionContext";
import { CardImpl, CardInfo } from "./card";

export class RuneMaster extends CardImpl {
    protected info: CardInfo = {
        name: "Rune master",
        number: 6
    };

    executeAction(context: ExecutionContext): void {
        super.executeAction(context);
        context.session.resetCardForPlayer(context.player);
    }
}
