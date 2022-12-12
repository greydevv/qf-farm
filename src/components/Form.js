


export function Checkbox({ checked, onChange, value }) {
  const checkedCls = !!checked ? "bg-qf-orange border-2 border-qf-orange" : "bg-none outine-2 border-2 border-qf-light-grey"
  const baseCls = "w-4 h-4 rounded-sm my-auto"
  return (
    <button className={ `${baseCls} ${checkedCls}` } />
  )
}
