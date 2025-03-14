import Registration from "./pages/registration"
import { LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"
import { Auth } from "./pages/auth"
import Profile from "./pages/profile"

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: <Profile />
    }
]

export const adminRoutes = [
]

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: <Registration />
    },

    {
        path: LOGIN_ROUTE,
        Component: <Auth />
    },
]