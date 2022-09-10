import { ExecutionContext } from "../session/executionContext";
import { CardImpl, CardInfo } from "./card";

export class Protector extends CardImpl {
    protected info: CardInfo = {
        name: "Protector",
        number: 5
    };

    executeAction(context: ExecutionContext): void {
        context.executor?.getPlayer().protect();
    }
}
