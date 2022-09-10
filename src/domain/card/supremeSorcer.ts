import { ExecutionContext } from "../session/executionContext";
import { CardImpl, CardInfo } from "./card";

export class SupremeSorcer extends CardImpl {
    protected info: CardInfo = {
        name: "Supreme sorcer",
        number: 10
    };

    executeAction(context: ExecutionContext): void {
        context.executor?.getPlayer().kill();
    }
}
