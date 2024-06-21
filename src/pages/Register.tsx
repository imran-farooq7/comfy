import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Register = () => {
	return (
		<section className="h-screen grid place-items-center">
			<Form
				method="post"
				className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
			>
				<h4 className="text-center text-3xl font-bold">Register</h4>
				<FormInput
					label="username"
					placeholder="username"
					type="text"
					name="username"
				/>
				<FormInput
					label="email"
					placeholder="test@example.com"
					type="email"
					name="email"
				/>

				<FormInput
					label="Password"
					type="password"
					name="password"
					placeholder="password"
				/>
				<div className="mt-4">
					<SubmitBtn text="login" />
				</div>
				<p className="text-center">
					Already a member?{" "}
					<Link
						to={"/login"}
						className="ml-2 link link-hover link-primary capitalize"
					>
						login
					</Link>
				</p>
			</Form>
		</section>
	);
};
export default Register;
