import React from "react";
import Input from "./Input";

export default function Form() {
  return (
    <form
      //   {...onSubmit}
      className={
        "mt-[2rem] mr-auto mb-[1rem] ml-auto max-w-[300px] items-center"
      }
    >
      <div className={"relative mb-[30px]"}>
        <Input
          type={"text"}
          name={"username"}
          required={true}
          placeholder={"Username"}
        />
        <Input
          type={"password"}
          name={"password"}
          required={true}
          placeholder={"Password"}
        />
      </div>
    </form>
  );
}

interface IProps {
  onSubmit: () => void;
}
