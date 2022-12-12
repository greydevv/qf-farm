import { useState } from "react"
import { form } from "lookups/huntform.js"
import { Checkbox } from "components/Form"

function SelectPackage({ selected, className }) {
  const selectedCls = !!selected ? "border-qf-orange" : "border-qf-light-grey"
  const cls = `rounded-sm border-2 w-full h-full ${className} ${selectedCls}`
  return (
    <div className={ cls }>
      <div className="w-full h-40" />
    </div>
  )
}

// function TextField({ labelText, defaultText, placeholderText, onChange }) {
//   return (
//     <div className="w-full">
//       <h3 className="text-qf-dark-brown">{ labelText }</h3>
//       <input
//         className="focus:outline-none"
//         placeholder={ !!placeholderText ? placeholderText : null }
//         onChange={ (e) => onChange(e.target.value) }
//       />
//     </div>
//   )
// }

function SelectOne({ opts, defaultSelection }) {
  const [selectedOpt, setSelectedOpt] = useState(!!defaultSelection ? defaultSelection : -1)

  const handleChange = (i) => {
    setSelectedOpt(i)
  }

  return (
    <div className="flex flex-col gap-y-4">
      { opts.map((opt, i) => {
        return (
          <div className="flex gap-x-2 cursor-pointer" key={ i } onClick={ () => handleChange(i)}>
            <Checkbox
              checked={ selectedOpt === i }
              onChange={ handleChange }
              value={ i }
            />
            <p>{ opt }</p>
          </div>
        )
      })}
    </div>
  )
}

export default function BuildAHunt() {
  return (
    <div className='desktop:pt-10 pt-0 desktop:px-40 px-6'>
      <div className="flex flex-col gap-y-6">
      {/*
        <TextField labelText="Full name" placeholderText="nidhi swamy" />
        <div className="grid w-full gap-2 grid-rows-[repeat(2,_1fr)] grid-cols-[repeat(2,_1fr)]">
          <SelectPackage className="row-start-1 col-start-1" />
          <SelectPackage className="row-start-1 col-start-2 "/>
          <SelectPackage className="row-start-2 col-start-1" />
          <SelectPackage className="row-start-2 col-start-2 "/>
        </div>
        { form.addOns.map((addOn, i) => {
          return (
            <div key={ i }>
              <h3 className="text-dark mb-2 font-medium">{ addOn.title }{ !!addOn.desc && <span className="font-normal">{ ` (${addOn.desc})` }</span>}</h3>
              <SelectOne opts={ addOn.opts } defaultSelection={ addOn.defaultSelection } />
            </div>
          )
        })}
      */}
        <BookingForm />
      </div>
    </div>
  )
}

import { TextField } from "components/form/Input"
import { Field, Form, Formik, FormikProps } from "formik"
import { object, string } from "yup"

let formSchema = object({
  fullName: string()
    .required("Required field.")
})

export function BookingForm() {
  return (
    <Formik
      validationSchema={ formSchema }
      initialValues={{ fullName: "" }}
      onSubmit={(values, actions) => {
         console.log(JSON.stringify(values, null, 2))
      }}
    >
      <Form>
        <Field
          name="fullName"
          placeholder="Full Name"
          component={ TextField }
        />
        <button
          type="submit"
          className="mt-4 bg-qf-orange text-qf-dark-brown p-2 rounded-sm"
        >
          Submit
        </button>
      </Form>
    </Formik>
  )
}
