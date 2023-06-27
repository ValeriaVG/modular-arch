import LoginPage from "./LoginPage";

const authModule: AppModule = {
    routes: [{path:'/login', element: <LoginPage />}]
}

export default authModule;