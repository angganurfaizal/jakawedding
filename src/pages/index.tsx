import Image from "next/image";
import Form from "@/components/Login/Form";

export default function Home() {
  return (
    <div className={"bg-black bg-cover w-full pb-0 ml-0 min-h-auto"}>
      <div className={"pr-15 pl-15 mr-auto w-full ml-auto"}>
        <div
          className={
            "flex mx-auto my-0 py-[20px] max-w-[600px] min-h-[100vh] px-0 relative text-center items-center"
          }
        >
          <div
            className={
              "rounded-xl py-[40px] px-[30px] bg-white mb-20 w-full text-center shadow-lg"
            }
          >
            <div className={"font-size-[2rem] w-full h-auto"}>
              <Image
                src={"/logo.png"}
                width={"300"}
                height={"100"}
                alt={"Jaka Wedding"}
                className={"m-auto"}
              />
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
