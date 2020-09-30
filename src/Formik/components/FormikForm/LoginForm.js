import * as Yup from "yup";

import React from "react";
import { Form, Formik } from "formik";
import FormikControl from "./FormikControl";

function LoginForm() {
	const intialValues = {
		email: "",
		password: "",
	};
	const validationSchema = Yup.object({
		email: Yup.string().required("Required"),
		password: Yup.string().required("Required"),
	});
	const onSubmit = (values) => {
		console.log("Form Data0", values);
	};
	return (
		<Formik
			initialValues={intialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{(formik) => {
				return (
					<Form>
						<FormikControl
							control="input"
							type="email"
							label="Email"
							name="email"
						/>
						<FormikControl
							control="input"
							type="password"
							label="Password"
							name="password"
						/>

						<button type="submit" disabled={!formik.isValid}>
							Submit
						</button>
					</Form>
				);
			}}
		</Formik>
	);
}

export default LoginForm;
