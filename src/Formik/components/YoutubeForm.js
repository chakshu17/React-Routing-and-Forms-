import { useFormik } from "formik";
import React from "react";

function YoutubeForm() {
	const formik = useFormik({
		initialValues: {
			name: "Chakshu",
			email: "",
			channel: "",
		},
		onSubmit: value => {
			console.log('Form Data',value);
		}
  });
  // console.log('From values:',formik.values);
	return (
		<div>
			<form onSubmit={formik.handleSubmit} >
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					onChange={formik.handleChange}
					value={formik.values.name}
				/>

				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					id="email"
					name="email"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>

				<label htmlFor="channel">Channel</label>
				<input
					type="text"
					id="channel"
					name="channel"
					onChange={formik.handleChange}
					value={formik.values.channel}
				/>

				<button type='submit' >Submit</button>
			</form>
		</div>
	);
}

export default YoutubeForm;
// cmd for intsalling formik - npm install formik --save
