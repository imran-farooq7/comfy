import { Hero } from "../components";
import Axios from "../../utils/axios";
import FeaturedProducts from "../components/FeaturedProducts";
export const loader = async () => {
	const products = await Axios.get("products?featured=true");
	return products.data.data;
};

const Landing = () => {
	return (
		<div>
			<Hero />
			<FeaturedProducts />
		</div>
	);
};
export default Landing;
