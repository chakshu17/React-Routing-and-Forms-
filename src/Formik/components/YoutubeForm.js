import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
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
	phoneNumbers:['','']
};
const onSubmit = (value) => {
	console.log("Form Data", value);
};

const validationSchema = Yup.object({
	name: Yup.string().required("Required !"),
	email: Yup.string().email("Invalid Email").required("Required !"),
	channel: Yup.string().required("Required !"),
});

function YoutubeForm() {
	// console.log("visited fields ", formik.touched);
	// console.log('From values:',formik.values);
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
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
				</div>
				<div className="form-control">
					<label htmlFor="address">Address</label>
					<Field name="address">
						{(props) => {
							// const { field, form, meta } = props;
							const { field, meta } = props;
							console.log("Render Props", props);
							return (
								<div>
									<input type="text" id="address" {...field} />
									{meta.touched && meta.error ? (
										<div> {meta.error} </div>
									) : null}
								</div>
							);
						}}
					</Field>
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


				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
}

export default YoutubeForm;
// cmd for intsalling formik - npm install formik --save
