import React from 'react'
import styles from "./Checkout.module.css"
import { Formik, Form, Field, UseField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate
 } from 'react-router-dom';


 const initialValues = {
    name:"",
    surname: "",
    email: "",
    password: "",

  };
 const signInSchema = Yup.object().shape({
    name: Yup.string()
    .required("Name is required")
    .min(2,"Name is too short"),
    surname: Yup.string()
    .required("Surname is required")
    .min(2,"Surname is too short"),
    email: Yup.string().email().required("Email is required"),
  
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
   
  });
 const Checkout2 = () => {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div className="container">
              <h1>Sign in to continue</h1>
              <Form>
                <div className="form-row">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className={errors.email && touched.email ? 
                    "input-error" : null}
                  />
                  <ErrorMessage name="email" component="span" className="error" />
                </div>
  
                <div className="form-row">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className={errors.password && touched.password ? 
                    "input-error" : null}
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="error"
                  />
                </div>
                <div className="form-row">
                  <label >Password</label>
                  <Field
                    type="text"
                    name="name"
                    className={errors.name && touched.name ? 
                    "input-error" : null}
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="error"
                  />
                </div>
  
                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Sign In
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    );
  };

  export default Checkout2;