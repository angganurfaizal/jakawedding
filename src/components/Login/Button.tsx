import React from "react";

export default function Button({ type }: IButtonSubmit) {
  return <button type={type}></button>;
}

interface IButtonSubmit {
  type?: "button" | "submit" | "reset" | undefined;
}
