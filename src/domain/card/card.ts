import { Player } from "../player/player";
import { Session } from "../session/session";

type CardName = string;
type CardNumber = number;

export interface CardInfo {
    name: CardName;
    number: CardNumber;
}

export interface Card {
    executeAction(player: Player): void;
    getInfo(): CardInfo;
    setExecutor(executor: Player): void;
}

export abstract class CardImpl implements Card {
    protected executor?: Player;
    protected abstract info: CardInfo;

    constructor(protected session: Session) {}

    executeAction(player: Player): void {
        if (!this.executor) {
            throw new Error("Executor is not set.");
        }
    }

    getInfo(): CardInfo {
        return this.info;
    }

    setExecutor(executor: Player): void {
        this.executor = executor;
    }
}
