import { ExecutionContext } from "../session/executionContext";
import { CardImpl, CardInfo } from "./card";

export class Warrior extends CardImpl {
    protected info: CardInfo = {
        name: "Witch",
        number: 3
    };

    async executeAction(context: ExecutionContext) {
        super.executeAction(context);
    }
}
