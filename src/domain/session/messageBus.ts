import { EventEmitter } from "../utils/eventEmitter";
import { SessionMessage } from "./sessionMessage";
import { SessionPrompt } from "./sessionPrompt";

interface MessageBusEvents {
    messagePosted: { message: SessionMessage };
}

export class MessageBus {
    eventEmitter = new EventEmitter<MessageBusEvents>();

    postMessage(message: SessionMessage) {
        this.eventEmitter.emit("messagePosted", { message });
    }

    prompt(message: SessionMessage) {
        const prompt = new SessionPrompt();
        return prompt.getFromUser(message);
    }
}
