import HomeScreen from "@/screens/home";
import { ReactElement } from "react"

type RouteType = {
    element : any;
    path: string;
}

export const ROUTES = {
    HOME : "/",
    ABOUTUS : "/about",
    PROFILE : "/add-todo"
}


export const routes:RouteType[] = [
    {
        element: <HomeScreen />,
        path:ROUTES.HOME
    },
    {
        element: <h1>about</h1>,
        path:ROUTES.ABOUTUS
    },
    {
        element: <h1>profile</h1>,
        path:ROUTES.PROFILE
    },
]