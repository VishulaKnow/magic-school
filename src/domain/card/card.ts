import { Player } from "../player/player";
import { ExecutionContext } from "../session/executionContext";
import { Session } from "../session/session";

type CardName = string;
type CardNumber = number;

export interface CardInfo {
    name: CardName;
    number: CardNumber;
}

export interface Card {
    executeAction(context: ExecutionContext): void | Promise<void>;
    getInfo(): CardInfo;
}

export abstract class CardImpl implements Card {
    protected abstract info: CardInfo;

    abstract executeAction(context: ExecutionContext): void;

    getInfo(): CardInfo {
        return this.info;
    }
}
