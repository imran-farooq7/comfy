import axios from "axios";

const Axios = axios.create({
	baseURL: "https://strapi-store-server.onrender.com/api",
});

export default Axios;
