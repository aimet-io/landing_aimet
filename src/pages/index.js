import MainLayout from "@/layouts/MainLayout";
import About from "@/packages/components/@about/About";
import Contact from "@/packages/components/@contact/Contact";
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
          <Contact/>
        </div>
      </MainLayout>
      <Toaster/>
    </>
  );
}
