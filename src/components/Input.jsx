import { forwardRef } from "react";

 const Input = forwardRef(function Input({label, textarea, ...props}, ref) {
  return (
    <>
    <label {...props}>{label}</label>
    {textarea ? <textarea ref={ref} {...props}/> : <input ref={ref} {...props}/>}
    </>
  )
});

export default Input;