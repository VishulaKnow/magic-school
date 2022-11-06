import { SessionMessage } from "../../../domain/session/sessionMessage";
import { MessageView } from "./message";
import "./messageWrap.css";

interface MessageWrapViewProps {
    message: SessionMessage;
}

export const MessageWrapView: React.FC<MessageWrapViewProps> = (props) => {
    return (
        <div className="message-wrap-view">
            <MessageView message={props.message}></MessageView>
        </div>
    );
};
