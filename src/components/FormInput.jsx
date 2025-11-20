import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function FormInput({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required,
  minLength,
}) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (show ? "text" : "password") : type;

  return (
    <div className="relative">
      {icon && <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">{icon}</span>}
      <input
        name={name}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute inset-y-0 right-2 flex items-center text-gray-500"
          aria-label="Toggle password visibility"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
}