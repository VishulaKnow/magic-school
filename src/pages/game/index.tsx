import { RouteObject } from "react-router-dom";
import { Game } from "./Game";

export const gamePage: RouteObject = {
    path: "/",
    element: <Game />
};
