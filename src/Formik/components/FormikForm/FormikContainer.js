import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
	const dropdownOptions = [
		{ key: "Select an option", value: "" },
		{ key: "Option 1 ", value: "Value 1" },
		{ key: "Option 2", value: "Value 2" },
		{ key: "Option 3", value: "Value 3" },
	];
	const radioOptions = [
		{ key: "Option 1 ", value: "rValue 1" },
		{ key: "Option 2", value: "rValue 2" },
		{ key: "Option 3", value: "rValue 3" },
	];

	const checkboxOptions = [
		{ key: "Option 1 ", value: "cValue 1" },
		{ key: "Option 2", value: "cValue 2" },
		{ key: "Option 3", value: "cValue 3" },
	];
	const intialValue = {
		email: "",
		description: "",
		selectOption: "",
		radioOption: "",
		checkboxOption: [],
	};
	const validateSchema = Yup.object({
		email: Yup.string().required("Required"),
		description: Yup.string().required("Required"),
		selectOption: Yup.string().required("Required"),
		radioOption: Yup.string().required("Required"),
		checkboxOption: Yup.array().required("Required"),
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

					<FormikControl
						control="textarea"
						label="Description"
						name="description"
					/>

					<FormikControl
						control="select"
						label="Select an option"
						name="selectOption"
						options={dropdownOptions}
					/>

					<FormikControl
						control="radio"
						label="Radio options"
						name="radioOption"
						options={radioOptions}
					/>

					<FormikControl
						control="checkbox"
						label="CheckBox"
						name="checkboxOptions"
						options={checkboxOptions}
					/>

					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	);
}

export default FormikContainer;
