import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import CampDetail from "../pages/CampDetail";
import NotFoundPage, { RouteErrorPage } from "../pages/NotFoundPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "detail/:club",
				element: <CampDetail />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
		errorElement: <RouteErrorPage />,
	},
]);
