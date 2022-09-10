import { ExecutionContext } from "../session/executionContext";
import { CardImpl, CardInfo } from "./card";

export class Wizard extends CardImpl {
    protected info: CardInfo = {
        name: "Wizard",
        number: 4
    };

    async executeAction(context: ExecutionContext) {
        const executorPlayer = context.executor.getPlayer();
        const targetPlayer = context.player;
    }
}
