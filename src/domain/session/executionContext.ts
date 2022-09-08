import { Player } from "../player/player";
import { Session } from "./session";

export class ExecutionContext {
    constructor(private onPlayer: Player, private _session: Session) {}

    get player() {
        return this.onPlayer;
    }

    get session() {
        return this._session;
    }
}
