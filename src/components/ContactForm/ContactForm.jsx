/* eslint-disable react/prop-types */
import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";


export default function ContactForm({onAdd}) {
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
      <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
        <Form className="flex flex-col mb-5 border-2 border-black rounded p-5">
          <label htmlFor={nameId} className="font-medium">
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameId}
            className="border border-black rounded mb-5 outline-none"
          />

          <label htmlFor={numberId} className="font-medium">
            Number
          </label>
          <Field
            type="number"
            name="number"
            id={numberId}
            className="border border-black rounded mb-5 outline-none"
          />

          <button
            type="submit"
            className="bg-slate-300 
            border rounded border-slate-950 h-7 p-1 flex justify-center
            items-center hover:bg-slate-200"
          >
            Add contact
          </button>
        </Form>
      </Formik>
    );
}