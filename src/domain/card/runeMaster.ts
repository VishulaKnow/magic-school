import { Player } from "../player/player";
import { CardImpl, CardInfo } from "./card";

export class RuneMaster extends CardImpl {
    protected info: CardInfo = {
        name: "Rune master",
        number: 6
    };

    executeAction(player: Player): void {
        super.executeAction(player);
        this.session.resetCardForPlayer(player);
    }
}
