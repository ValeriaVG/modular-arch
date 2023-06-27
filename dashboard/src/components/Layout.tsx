import { PropsWithChildren, ReactNode } from "react";

export function Layout({
  children,
  menus,
}: PropsWithChildren<{ menus: Array<{ path: string; title: string }> }>) {
  return (
    <>
      <nav>
        <ul>
          {menus.map((menu) => (
            <li key={menu.path}>
              <a href={menu!.path}>{menu!.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </>
  );
}

export const wrapper = (node: ReactNode, modules: AppModule[]) => (
  <Layout
    menus={
      modules
        .map((m) =>
          m.routes
            .map((r) => (r.menu ? { ...r.menu, path: r.path } : undefined))
            .filter(Boolean)
        )
        .flat() as Array<{ path: string; title: string }>
    }
  >
    {node}
  </Layout>
);
