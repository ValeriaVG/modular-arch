import { wrapper } from "../../components/Layout";
import CategoriesPage from "./categories/CategoriesPage";
import OrdersPage from "./orders/CategoriesPage";

const shopModule: AppModule = {
  routes: [
    {
      path: "/categories",
      element: <CategoriesPage />,
      menu: { title: "Category" },
    },
    { path: "/products", element: <OrdersPage />, menu: { title: "products" } },
    { path: "/orders", element: <OrdersPage />, menu: { title: "orders" } },
  ],
  wrapper,
};

export default shopModule;
