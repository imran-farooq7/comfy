import { Outlet } from "react-router-dom";
import { Header } from "../components";

const HomeLayout = () => {
	return (
		<>
			<nav>
				<Header />
			</nav>
			<section className="align-element">
				<Outlet />
			</section>
		</>
	);
};
export default HomeLayout;
