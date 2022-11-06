import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./ui/pages/router/Router";
import { Session, SessionImpl } from "./domain/session/session";

//TODO: remove
const messages = [];
export const session: Session = new SessionImpl();
session.messageBus.eventEmitter.subscribe("messagePosted", (messageInfo) => {
    if (messageInfo) messages.push(messageInfo.message);
});
//TODO: remove

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
