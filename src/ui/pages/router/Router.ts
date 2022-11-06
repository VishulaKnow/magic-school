import { createBrowserRouter } from "react-router-dom";
import { gamePage } from "../game";
import { loginPage } from "../login";

export const router = createBrowserRouter([loginPage, gamePage]);
