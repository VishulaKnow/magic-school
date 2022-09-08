import { SessionMessage } from "./sessionMessage";
import { SessionPrompt } from "./sessionPrompt";

export class MessageBag {
    postMessage(message: SessionMessage) {
        throw new Error("Method not implemented.");
    }

    prompt(message: SessionMessage) {
        const prompt = new SessionPrompt();
        return prompt.getFromUser(message);
    }
}
