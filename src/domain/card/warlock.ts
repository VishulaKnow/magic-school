import { Player } from "../player/player";
import { CardImpl, CardInfo } from "./card";

export class Warlock extends CardImpl {
    protected info: CardInfo = {
        name: "Warlock",
        number: 7
    };

    executeAction(player: Player): void {
        super.executeAction(player);
        const playerCard = player.getCard();
        player.setCard(this.executor!.getCard());
        this.executor!.setCard(playerCard);
    }
}
