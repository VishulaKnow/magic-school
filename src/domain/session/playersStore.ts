import { Player } from "../player/player";

export class PlayersStore {
    private currentPlayerIndex: number;

    constructor(private allPlayers: Player[]) {
        this.currentPlayerIndex = 0;
    }

    getCurrentPlayer() {
        return this.allPlayers[this.currentPlayerIndex];
    }

    switchPlayer(): Player {
        if (this.currentPlayerIndex === this.allPlayers.length - 1) {
            this.currentPlayerIndex = 0;
        } else {
            this.currentPlayerIndex++;
        }
        return this.getCurrentPlayer();
    }
}
