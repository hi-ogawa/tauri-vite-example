import * as stories from "../components/stories";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

// based on https://github.com/hi-ogawa/unocss-preset-antd/blob/a340cb9058301c2d2dc3a5c27631f78d703776af/packages/app/src/app.tsx

export function App() {
  return <RouterProvider router={router} />;
}

const storiesRoutes = Object.entries(stories).map(
  ([name, Fc]): RouteObject => ({
    path: name,
    element: <Fc />,
  })
);

const router = createBrowserRouter(
  [
    {
      element: <Root />,
      children: [
        ...storiesRoutes,
        {
          path: "*",
          element: <div className="uppercase">select a story from menu</div>,
        },
      ],
    },
  ],
  {
    basename: "/src/dev/",
  }
);

function Root() {
  return (
    <div className="flex">
      <div className="flex-[1_0_0] border-r">
        <div className="sticky top-0 p-1.5">
          <ul className="flex flex-col gap-1.5">
            {storiesRoutes.map((route) => (
              <li key={route.path} className="flex">
                <NavLink
                  className="flex-1 antd-btn antd-btn-text p-2 aria-current-page:(text-[var(--antd-colorPrimary)] bg-[var(--antd-controlItemBgActive)]) aria-current-page:dark:(text-white bg-[var(--antd-colorPrimary)])"
                  to={"/" + route.path}
                >
                  {route.path}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-[5_0_0]">
        <div className="m-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
