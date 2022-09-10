import { ExecutionContext } from "../session/executionContext";
import { CardImpl, CardInfo } from "./card";

export class Warrior extends CardImpl {
    protected info: CardInfo = {
        name: "Warrior",
        number: 1
    };

    async executeAction(context: ExecutionContext) {}
}
