import React from "react";

export default function Input({ type, name, required, placeholder }: IProps) {
  return (
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className={
        "w-full border-b font-[500] text-gray-500 border-gray-300 py-[10px] pl-3 overflow-visible m-0 leading-[30px] mb-10 outline-none"
      }
    />
  );
}

interface IProps {
  type: string;
  name: string;
  required?: boolean;
  placeholder: string;
}
