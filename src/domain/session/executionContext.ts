import { CardExecutor } from "../player/cardExecutor";
import { Player } from "../player/player";
import { Session } from "./session";

export class ExecutionContext {
    constructor(private targetPlayer: Player, private _session: Session, private _executor: CardExecutor) {}

    get player() {
        return this.targetPlayer;
    }

    get session() {
        return this._session;
    }

    get executor() {
        return this._executor;
    }
}
