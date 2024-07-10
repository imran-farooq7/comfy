import { Hero } from "../components";
import Axios from "../../utils/axios";
export const loader = async () => {
	const products = await Axios.get("products?featured=true");
	return products.data;
};

const Landing = () => {
	return (
		<div>
			<Hero />
		</div>
	);
};
export default Landing;
