import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import modules from "./modules";
import { ReactNode } from "react";

const wrapWithLayout = (
  routes: RouteObject[],
  wrapper?: (node: ReactNode, modules: AppModule[]) => ReactNode
): RouteObject[] => {
  return routes.map((route) => ({
    ...route,
    element: wrapper ? wrapper(route.element, modules) : route.element,
  }));
};

const router = createBrowserRouter(
  modules.reduce(
    (a, c) => [...a, ...wrapWithLayout(c.routes, c.wrapper)],
    [] as RouteObject[]
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
