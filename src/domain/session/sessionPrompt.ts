import { SessionMessage } from "./sessionMessage";

type PromptResult = string;

export class SessionPrompt {
    getFromUser(message: SessionMessage): Promise<PromptResult> {
        return Promise.resolve("2");
    }
}
