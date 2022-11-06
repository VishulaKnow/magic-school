import { RouteObject } from "react-router-dom";
import { BasePage } from "../base/base";
import { Game } from "./Game";

export const gamePage: RouteObject = {
    path: "/",
    element: (
        <BasePage>
            <Game />
        </BasePage>
    )
};
