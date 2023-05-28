import MainLayout from "@/layouts/MainLayout";
import About from "@/packages/components/@about/About";
import Contact from "@/packages/components/@contact/Contact";
import FbComments from "@/packages/components/@fbcomments/FbComments";
import Hero from "@/packages/components/@hero/Hero";
import Paquetes from "@/packages/components/@paquetes/Paquetes";
import Portfolio from "@/packages/components/@portfolio/Portfolio";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Hero />
      <MainLayout title="Aimet | Home">
        <div className="w-full ">
          <About />
          <Paquetes />
          <Portfolio />
          <h2 className="text-3xl text-center mt-[4rem] mb-5">Lo que dicen nuestros clientes</h2>
          <FbComments className="m-4" />
          <Contact/>
        </div>
      </MainLayout>
      <Toaster/>
    </>
  );
}
