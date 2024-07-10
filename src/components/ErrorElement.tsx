import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
	// - Set the content of the `h4` element to "there was an error..."

	const error = useRouteError();
	return <h4 className="font-bold text-4xl">there was an error...</h4>;
};
export default ErrorElement;
