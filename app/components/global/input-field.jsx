import React from "react";

const InputField = ({
    label,
    type = "text",
    value,
    onChange,
    placeholder,
    error,
    name,
}) => (
    <div className="mb-4">
        {label && (
            <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor={name}
            >
                {label}
            </label>
        )}
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border rounded-md shadow-sm text-gray-900 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 
                  ${error ? "border-red-500" : "border-gray-300"}`}
            aria-invalid={!!error}
            aria-describedby={error ? `${name}-error` : undefined}
        />
        {error && (
            <p id={`${name}-error`} className="text-xs text-red-500 mt-1">
                {error}
            </p>
        )}
    </div>
);

export default InputField;
