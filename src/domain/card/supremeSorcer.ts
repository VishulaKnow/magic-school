import { Player } from "../player/player";
import { CardImpl, CardInfo } from "./card";

export class SupremeSorcer extends CardImpl {
    protected info: CardInfo = {
        name: "Supreme sorcer",
        number: 10
    };

    executeAction(player: Player): void {
        super.executeAction(player);
        player.kill();
    }
}
