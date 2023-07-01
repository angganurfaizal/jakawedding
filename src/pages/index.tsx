import Image from "next/image";
import { Inter } from "next/font/google";
import Form from "@/components/Login/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={"bg-black bg-cover w-full pb-0 ml-0 min-h-auto"}>
      <div className={"pr-15 pl-15 mr-auto w-full ml-auto"}>
        <div
          className={
            "flex m-auto py-[20px] max-w-[600px] px-0 relative text-center items-center"
          }
        >
          <div
            className={
              "rounded-xl py-40 px-30 bg-white mb-20 w-full text-center"
            }
          >
            <div className={"font-size-[2rem]"}>
              <span>Jaka Wedding apps</span>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
