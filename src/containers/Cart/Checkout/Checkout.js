import React from 'react'
import styles from "./Checkout.module.css"
import { Formik, Form, Field, UseField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate
 } from 'react-router-dom';
import Button from '../../components/Button';


export default function Checkout() {
    const navigate = useNavigate();
  return (
        <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          phone: "",
          bonusCard: ""
        }}
        validationSchema={Yup.object({
            name: Yup.string()
                .min(2, "Minimum of 2 characters")
                .max(30, "Maximum of 30 characters")
                .matches(/^[a-zA-Z]*$/, "Only characters are allowed")
                .required("Enter your name"),
            surname: Yup.string()
                .min(3, "Minimum of 3 characters")
                .max(35, "Maximum of 35 characters")
                .matches(/^[a-zA-Z]*$/, "Only characters are allowed")
                .required("Enter your surname"),
            email: Yup.string()
                .email("Must be a valid email address")
                .required("Email is required"),
            phone: Yup.string()
                .trim()
                .matches(
                /^\+?3?8?(0[\s\.-]\d{2}[\s\.-]\d{3}[\s\.-]\d{2}[\s\.-]\d{2})$/,
                "Invalid phone format - (+380 50 599 28 61 or +380-50-599-28-61) ")
                .required("Enter your phone"),
            bonusCard: Yup.number()
                .typeError("Must be a number")
                .min(1, "Invalid value")
                .max(100000, "Invalid value")
            })}
            onSubmit={(values, {setSubmitting, resetForm})=> {
                setTimeout(()=>{
                    alert(JSON.stringify(values, null, 2));
                    resetForm();
                    setSubmitting(false);
                },3000)
                navigate("/success");
              }}
           
            >
              
        {({isSubmitting}) =>( 
             
             <Form>
                <div className={styles.container}>
             <div className={styles.field}>
                <label htmlFor="name" className={styles.labelText}>Name</label>
                    <Field
                      name="name"
                      type="text"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="name"
                      component="h5"
                      className={styles.error}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="surname" className={styles.labelText}>Surname</label>
                    <Field
                      name="surname"
                      type="text"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="surname"
                      component="h5"
                      className={styles.error}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="phone" className={styles.labelText}>Phone(optional)</label>
                    <Field
                      name="phone"
                      type="text"
                      placeholder="+380 34 344 3444 "
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className={styles.error}
                    />
                  </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.labelText}> Email </label>
                <Field
                  name="email"
                  placeholder="example@example.com"
                  type="text"
                  className={styles.input}
                />
                <ErrorMessage
                  name="email"
                  component="h6"
                  className={styles.error}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.labelText}> Bonus card(if you have) </label>
                <Field
                  name="bonusCard"
                  type="number"
                  className={styles.input}
                />
                <ErrorMessage
                  name="bonusCard"
                  component="h6"
                  className={styles.error}
                />
              </div>
             
              <Button text="Submit" type = "submit"></Button>
            </div>
            </Form>
               
           
        )}

      </Formik>
    
  )
}
