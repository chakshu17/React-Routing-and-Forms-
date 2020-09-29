import {
	ErrorMessage,
	FastField,
	Field,
	FieldArray,
	Form,
	Formik,
} from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
	name: "Chakshu",
	email: "",
	channel: "",
	comments: "",
	address: "",
	social: {
		facebook: "",
		twitter: "",
	},
	phoneNumbers: ["", ""],
	phNumbers: [""],
};

const savedValues = {
	name: "Chakshu",
	email: "demon@gna.com",
	channel: "Kratos",
	comments: "sdfghjk",
	address: "221B bakers Street",
	social: {
		facebook: "",
		twitter: "",
	},
	phoneNumbers: ["", ""],
	phNumbers: [""],
};
const onSubmit = (value, onSubmitProps) => {
	console.log("Form Data", value);
	console.log("submit props", onSubmitProps);
	onSubmitProps.setSubmitting(false);
};

// const validateComments = (values) => {
// 	let error;
// 	if (!error) {
// 		error = "Required";
// 	}
// 	return error;
// };

const validationSchema = Yup.object({
	name: Yup.string().required("Required !"),
	email: Yup.string().email("Invalid Email").required("Required !"),
	channel: Yup.string().required("Required !"),
	comments: Yup.string().required("Required"),
});

function YoutubeForm() {
	// console.log("visited fields ", formik.touched);
	// console.log('From values:',formik.values);
	const [formvalues, setFormValues] = useState(null);
	return (
		<Formik
			initialValues={formvalues || initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			enableReinitialize
			// validateOnMount
		>
			{(formik) => {
				console.log("formik Props", formik);
				return (
					<Form>
						<div className="form-control">
							<label htmlFor="name">Name</label>
							<Field type="text" id="name" name="name" />
							<ErrorMessage name="name" component={TextError} />
						</div>

						<div className="form-control">
							<label htmlFor="email">E-mail</label>
							<Field type="email" id="email" name="email" />
							<ErrorMessage name="email">
								{(errorMsg) => <div className="error">{errorMsg}</div>}
							</ErrorMessage>
						</div>

						<div className="form-control">
							<label htmlFor="channel">Channel</label>
							<Field type="text" id="channel" name="channel" />
							<ErrorMessage name="channel" />
						</div>

						<div className="form-control">
							<label htmlFor="comments">Comments</label>
							<Field as="textarea" id="comment" name="comments" />
							<ErrorMessage name="comments" component={TextError} />
						</div>

						<div className="form-control">
							<label htmlFor="address">Address</label>
							<FastField name="address">
								{(props) => {
									console.log("Field Render");
									// const { field, form, meta } = props;
									// Fast Field helps you to prevevnt unneccessary renders
									const { field, meta } = props;
									// console.log("Render Props", props);
									return (
										<div>
											<input type="text" id="address" {...field} />
											{meta.touched && meta.error ? (
												<div> {meta.error} </div>
											) : null}
										</div>
									);
								}}
							</FastField>
						</div>

						<div className="form-control">
							<label htmlFor="facebook">Facebook Profile</label>
							<Field type="text" id="facebook" name="social.facebook" />
						</div>

						<div className="form-control">
							<label htmlFor="twitter">Twitter Profile</label>
							<Field type="text" id="twitter" name="social.twitter" />
						</div>

						<div className="form-control">
							<label htmlFor="primaryPh">Primary Phone Number</label>
							<Field type="text" id="primaryPh" name="phoneNumbers[0]" />
						</div>

						<div className="form-control">
							<label htmlFor="secondaryPh">Secondary Phone Number</label>
							<Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
						</div>

						<div className="form-control">
							<label htmlFor="">List of Phone Numebrs</label>
							<FieldArray name="phNumbers">
								{(fieldArrayProps) => {
									// console.log("Field Array Logs", fieldArrayProps);
									const { push, remove, form } = fieldArrayProps;
									const { values } = form;
									const { phNumbers } = values;
									console.log("Form Errors", form.errors);
									return (
										<div>
											{phNumbers.map((phNumber, index) => (
												<div key={index}>
													<Field name={`phNumbers[${index}]`} />
													{index > 0 && (
														<button type="button" onClick={() => remove(index)}>
															-
														</button>
													)}

													<button type="button" onClick={() => push("")}>
														+
													</button>
												</div>
											))}
										</div>
									);
								}}
							</FieldArray>
						</div>

						{/* <button
							type="button"
							onClick={() => formik.validateField("comments")}
						>
							Validate Comments
						</button>
						<button type="button" onClick={() => formik.validateForm()}>
							Validate All
						</button>
						<button
							type="button"
							onClick={() => formik.setFieldTouched("comments")}
						>
							Set Field touched
						</button>
						<button
							type="button"
							onClick={() =>
								formik.setTouched({
									name: true,
									email: true,
									channel: true,
									comments: true,
								})
							}
						>
							Visit Comments
						</button> */}
						{/*	<button type="submit" disabled={!(formik.isValid )} >Submit</button>
				 use dirty when you know that user will enter value wich is never same as before , or else dirty prop will be problematic
					It will disable the submit button when data is not new */}
						<button type="text" onClick={() => setFormValues(savedValues)}>
							Load Saved Data
						</button>
						<button
							type="submit"
							disabled={!formik.isValid || formik.isSubmitting}
						>
							Submit
						</button>
					</Form>
				);
			}}
		</Formik>
	);
}

export default YoutubeForm;
// cmd for intsalling formik - npm install formik --save
