import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

const HomeLayout = () => {
	return (
		<>
			<nav>
				<Header />
				<Navbar />
			</nav>
			<section className="align-element pt-10">
				<Outlet />
			</section>
		</>
	);
};
export default HomeLayout;
