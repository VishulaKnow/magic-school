import { Player } from "../player/player";
import { CardImpl, CardInfo } from "./card";

export class Protector extends CardImpl {
    protected info: CardInfo = {
        name: "Protector",
        number: 5
    };

    executeAction(player: Player): void {
        super.executeAction(player);
        this.executor?.protect();
    }
}
