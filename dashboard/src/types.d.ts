import { ReactComponentElement } from "react";
import { RouteObject } from "react-router-dom";

declare global {
  type AppMenu = {
    title: string;
  };

  type AppModule = {
    routes: Array<RouteObject & { menu?: AppMenu }>;
    wrapper?: (node: ReactNode, modules: AppModule[]) => ReactNode
  };
}
