import ErrorElement from "./components/ErrorElement";
import {
	Login,
	About,
	Cart,
	Checkout,
	Error,
	HomeLayout,
	Landing,
	Orders,
	Product,
	Products,
	Register,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as landingLoader } from "./pages/Landing";
const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <ErrorElement />,
				loader: landingLoader,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "orders",
				element: <Orders />,
			},
			{
				path: "products",
				element: <Products />,
			},
			{
				path: "product/:id",
				element: <Product />,
			},
			{
				path: "checkout",
				element: <Checkout />,
			},
		],
	},
	{
		path: "login",
		element: <Login />,
	},
	{
		path: "register",
		element: <Register />,
	},
]);
const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
