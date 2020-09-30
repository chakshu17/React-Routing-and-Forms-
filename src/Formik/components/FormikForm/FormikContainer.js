import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
function FormikContainer() {
	const intialValue = {
		email: "",
	};
	const validateSchema = Yup.object({
		email: Yup.string().required("Required"),
	});
	const onsubmit = (values) => console.log("Form Data", values);

	return (
		<Formik
			initialValues={intialValue}
			validationSchema={validateSchema}
			onSubmit={onsubmit}
		>
			{(fomrik) => (
				<Form>
					<FormikControl
						control="input"
						type="email"
						label="Email"
						name="email"
					/>
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	);
}

export default FormikContainer;
