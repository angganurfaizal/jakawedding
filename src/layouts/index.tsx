import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

interface IProp {
  children: ReactNode;
}

const Layout: React.FC<IProp> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className={roboto.className}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
