import css from './ContactForm.module.css'
import { FaUser } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export default function ContactForm({ addContact }) {
  const initialValues = {
    name: '',
    number: '',
  }

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'is too short!')
      .max(50, 'is too long!')
      .required('is required'),

    number: Yup.string()
      .matches(/^\+380\d{9}$/, 'must be in +380XXXXXXXXX format')
      .required('is required'),
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    }
    addContact(newContact)
    actions.resetForm()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2500)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.nameWrap}>
          <div className={css.faUser}>
            <FaUser />
          </div>
          <label htmlFor="name">Name</label>
          <Field name="name" id="name" placeholder="You name"></Field>
          <ErrorMessage
            className={css.nameError}
            name="name"
            component="span"
          />
        </div>
        <div className={css.numberWrap}>
          <div className={css.faPhone}>
            <FaPhone />
          </div>
          <label htmlFor="number">Number</label>
          <Field
            type="tel"
            name="number"
            id="number"
            placeholder="You phone"
          ></Field>
          <ErrorMessage
            className={css.numberError}
            name="number"
            component="span"
          />
          {isSubmitted && (
            <span className={css.successMessage}>
              Contact successfully added
            </span>
          )}
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}
