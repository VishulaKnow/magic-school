type SessionMessageText = string;

interface SessionMessageOptions {
    text: SessionMessageText;
}

export class SessionMessage {
    constructor(private messageOptions: SessionMessageOptions) {}
}
