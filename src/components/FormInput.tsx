import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"input"> {
	label: string;
}
const FormInput = ({ label, placeholder, type, name }: Props) => {
	return (
		<label className="form-control w-full max-w-xs">
			<div className="label">
				<span className="label-text">{label}</span>
			</div>
			<input
				type={type}
				placeholder={placeholder}
				className="input input-bordered"
				name={name}
			/>
		</label>
	);
};
export default FormInput;
