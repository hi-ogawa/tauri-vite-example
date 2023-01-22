import * as stories from "../components/stories";
import {
  createHashRouter,
  NavLink,
  Outlet,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

export function App() {
  return <RouterProvider router={router} />;
}

// vite's glob import can be used to dynamically create routes
// (cf. https://github.com/hi-ogawa/ytsub-v3/blob/2b5931639e5c97f1d9dc6cc7ec4d89df70275084/app/components/main-dev.tsx#L15-L17)
const storiesRoutes = Object.values(stories).map(
  (Fc): RouteObject => ({
    path: Fc.name,
    element: <Fc />,
  })
);

const router = createHashRouter([
  {
    element: <Root />,
    children: [
      ...storiesRoutes,
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function Root() {
  return (
    <div className="flex">
      <div className="flex-[1_0_0] border-r">
        <div className="sticky top-0 p-1.5">
          <ul className="flex flex-col gap-1.5">
            {storiesRoutes.map((route) => (
              <li key={route.path} className="flex">
                <NavLink
                  className="flex-1 antd-btn antd-btn-text p-2 aria-current-page:(!text-blue-600 !bg-blue-100)"
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

function NotFound() {
  return (
    <div className="uppercase text-lg text-gray-700">
      select a story from menu
    </div>
  );
}
