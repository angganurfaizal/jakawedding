import React from "react";

export default function Button({ type, name }: IButtonSubmit) {
  return (
    <button
      type={type}
      className={
        "block w-full px-[0.75rem] py-[0.45rem] text-white bg-zinc-800 hover:bg-black text-center whitespace-nowrap align-middle select-none rounded transform-none m-0 "
      }
    >
      {name}
    </button>
  );
}

interface IButtonSubmit {
  type: "button" | "submit" | "reset" | undefined;
  name: string;
}
