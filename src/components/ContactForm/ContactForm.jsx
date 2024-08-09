import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { nanoid } from 'nanoid'
import css from './ContactForm.module.css'
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
      .required('not found'),

    number: Yup.string()
      .min(3, 'is too short')
      .max(50, 'is too long')
      .matches(
        /^(?!-)(?!.*--)[0-9]+(-[0-9]+)*$/,
        'Only numbers divided by dashes are accepted here'
      )
      .required('not found'),
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
          <label htmlFor="name">Name</label>
          <Field name="name" id="name" placeholder="You name"></Field>
          <ErrorMessage
            className={css.nameError}
            name="name"
            component="span"
          />
        </div>
        <div className={css.numberWrap}>
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
