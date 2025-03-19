import Registration from "./pages/registration"
import { DELETEUSER_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"
import { Auth } from "./pages/auth"
import Profile from "./pages/profile"
import DeleteUser from "./pages/admin"

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: <Profile />
    }
]

export const adminRoutes = [
    {
        path: DELETEUSER_ROUTE,
        Component: <DeleteUser />
    }

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