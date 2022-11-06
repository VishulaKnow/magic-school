import React from "react";
import { SessionMessage } from "../../../domain/session/sessionMessage";

interface MessageViewProps {
    message: SessionMessage;
}

export const MessageView: React.FC<MessageViewProps> = (props) => {
    return <h3 className="message">{props.message.getText()}</h3>;
};
