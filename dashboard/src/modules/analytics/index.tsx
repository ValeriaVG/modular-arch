import { wrapper } from "../../components/Layout";
import HomePage from "./HomePage";

const analyticsModule: AppModule = {
  routes: [
    {
      path: "/",
      menu: { title: "Home" },
      element: <HomePage />,
    },
  ],
  wrapper,
};

export default analyticsModule;
