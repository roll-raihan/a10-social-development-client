import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../Root/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpcomingEvent from "../pages/UpcomingEvent";
import CreateEvent from "../pages/CreateEvent";
import ManageEvents from "../pages/ManageEvents";
import JoinedEvents from "../pages/JoinedEvents";
import UpcomingEventDetails from "../pages/UpcomingEventDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import UpdateEvent from "../pages/UpdateEvent";

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
                Component: UpcomingEvent,
                loader: () => fetch('http://localhost:3000/trees'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/upcomingEvent/:id",
                element: <UpcomingEventDetails></UpcomingEventDetails>
            },
            {
                path: "/createEvent",
                element: <PrivateRoute>
                    <CreateEvent></CreateEvent>
                </PrivateRoute>
            },
            {
                path: "/manageEvent",
                element: <PrivateRoute>
                    <ManageEvents></ManageEvents>
                </PrivateRoute>
            },
            {
                path: "/manageEvent/:id",
                element: <PrivateRoute>
                    <UpdateEvent></UpdateEvent>
                </PrivateRoute>
            },
            {
                path: "/joinedEvent",
                element: <PrivateRoute>
                    <JoinedEvents></JoinedEvents>
                </PrivateRoute>
            },
        ]
    },
]);

export default router;