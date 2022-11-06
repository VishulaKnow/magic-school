import { SessionMessage } from "../../../domain/session/sessionMessage";
import { MessageWrapView } from "../../components/message/messageWrap";

interface BasePageProps {
    children?: JSX.Element | JSX.Element[];
}

export const BasePage: React.FC<BasePageProps> = (props) => {
    return (
        <>
            <MessageWrapView message={new SessionMessage({ text: "Test message" })}></MessageWrapView>
            {props.children}
        </>
    );
};
