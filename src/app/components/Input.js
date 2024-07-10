import React from 'react'

const Input = ({ label, type, id, placeholder }) => {
  return (
    <div className="flex flex-col w-full gap-2 login">

      {/* email/username  */}

      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
        <input
          id={id}
          type={type}
          className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
          placeholder={placeholder}
        />
      </div>

      {/* password  */}

      <div>
        <label htmlFor={id} className="font-semibold capitalize">
            {label}
        </label>
        <input
          id={id}
          type={type}
          className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
          placeholder={placeholder}
        />
      </div>

    </div>
  )
}

export default Input;