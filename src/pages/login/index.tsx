import { RouteObject } from "react-router-dom";
import { Login } from "./Login";

export const loginPage: RouteObject = {
    path: "/login",
    element: <Login />
};
