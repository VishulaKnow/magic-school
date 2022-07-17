import { Player } from "../player/player";
import { SessionMessage } from "./sessionMessage";

export interface Session {
    postMessage(message: SessionMessage): void;
    resetCardForPlayer(player: Player): void;
}
