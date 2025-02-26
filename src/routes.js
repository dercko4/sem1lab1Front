import Registration from "./pages/registration"
import { LOGIN_ROUTE, MAKE_REQUEST_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"
import Auth from "./pages/auth"
import MakeRequest from "./pages/make_request"
import Profile from "./pages/profile"

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MAKE_REQUEST_ROUTE,
        Component: MakeRequest
    }
]