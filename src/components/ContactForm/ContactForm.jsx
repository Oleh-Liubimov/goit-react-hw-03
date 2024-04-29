/* eslint-disable react/prop-types */
import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import { ErrorMessage } from "formik";

export default function ContactForm({onAdd, validation}) {
    const nameId = useId();
    const numberId = useId();
    const handleSubmit = (values,actions) => {
    onAdd({
        "id": nanoid(),
        "name": values.name,
        "number":values.number
    })
        actions.resetForm();
    }

    return (
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={validation}
      >
        <Form className="flex flex-col mb-5 border-2 border-black rounded p-5">
          <label htmlFor={nameId} className="font-medium">
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameId}
            className="border border-black rounded  outline-none"
          />
          <ErrorMessage
            className="text-red-600 mb-5"
            name="name"
            component="span"
          />

          <label htmlFor={numberId} className="font-medium">
            Number
          </label>
          <Field
            type="number"
            name="number"
            id={numberId}
            className="border border-black rounded outline-none mb-5 "
          />
          <ErrorMessage
            className="text-red-600"
            name="number"
            component="span"
          />

          <button
            type="submit"
            className="bg-green-500 
            border rounded border-slate-950 h-7 p-1 flex justify-center
            items-center hover:bg-green-600 transition-all"
          >
            Add contact
          </button>
        </Form>
      </Formik>
    );
}