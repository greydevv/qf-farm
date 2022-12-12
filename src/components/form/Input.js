/*
 * All of these inputs are meant to be used as Formik fields.
 */

export function TextField({field, form, placeholder, ...rest}) {
  console.log(form.errors)

  return (
    <div>
      <p className="text-qf-orange">{ form.errors[field.name] }</p>
      <input
        id={ field.name }
        className="p-2 bg-qf-light-grey rounded-sm placeholder:text-qf-grey focus:outline-none"
        placeholder={ placeholder }
        onChange={ field.onChange }
        { ...rest }
      />
    </div>
  )
}
