import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'
const initialValues = {
	name: "Chakshu",
	email: "",
	channel: "",
};
const onSubmit = (value) => {
	console.log("Form Data", value);
};

const validate = (values) => {
	let errors = {};

	if (!values.name) {
		errors.name = "Required";
	}

	if (!values.email) {
		errors.email = "Required";
	}

	if (!values.channel) {
		errors.channel = "Required";
	}
	return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required !'),
  email: Yup.string().email('Invalid Email').required('Required !'),
  channel:Yup.string().required('Required !')
})

function YoutubeForm() {
	const formik = useFormik({
		initialValues,
    onSubmit,
    validationSchema
		//,
	});
	console.log("visited fields ", formik.touched);
	// console.log('From values:',formik.values);
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
						value={formik.values.name}
					/>
					{ formik.touched.name && formik.errors.name ? (
						<div className="error"> {formik.errors.name} </div>
					) : null} 
          {/* // blur handle info whether field is touched or not */}
				</div>

				<div className="form-control">
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						id="email"
						name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{ formik.touched.email && formik.errors.email ? (
						<div className="error"> {formik.errors.email} </div>
					) : null}
				</div>

				<div className="form-control">
					<label htmlFor="channel">Channel</label>
					<input
						type="text"
						id="channel"
						name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
						value={formik.values.channel}
					/>
					{formik.touched.channel && formik.errors.channel ? (
						<div className="error"> {formik.errors.channel} </div>
					) : null}
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default YoutubeForm;
// cmd for intsalling formik - npm install formik --save
