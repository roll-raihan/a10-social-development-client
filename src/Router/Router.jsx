import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../Root/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpcomingEvent from "../pages/UpcomingEvent";
import CreateEvent from "../pages/CreateEvent";
import ManageEvents from "../pages/ManageEvents";
import JoinedEvents from "../pages/JoinedEvents";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/upcomingEvent",
                Component: UpcomingEvent
            },
            {
                path: "/createEvent",
                Component: CreateEvent
            },
            {
                path:"/manageEvent",
                element: <ManageEvents></ManageEvents>
            },
            {
                path:"/joinedEvent",
                element: <JoinedEvents></JoinedEvents>
            },
        ]
    },
]);

export default router;