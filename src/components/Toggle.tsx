import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Toggle = ({ setTheme }: { setTheme: () => void }) => {
	return (
		<label className="swap swap-rotate">
			{/* this hidden checkbox controls the state */}
			<input type="checkbox" onChange={setTheme} />

			<BsSunFill className="swap-on h-4 w-4" />

			<BsMoonFill className="swap-off h-4 w-4" />
		</label>
	);
};
export default Toggle;
