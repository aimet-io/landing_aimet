import MainLayout from "@/layouts/MainLayout";
import About from "@/packages/components/@about/About";
import Contact from "@/packages/components/@contact/Contact";
import Hero from "@/packages/components/@hero/Hero";
import Portfolio from "@/packages/components/@portfolio/Portfolio";
import Services from "@/packages/components/@services/Services";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Hero />
      <MainLayout title="Inicio">
        <div className="w-full ">
          <About />
          <Services />
          <Portfolio />
          <Contact/>
        </div>
      </MainLayout>
      <Toaster/>
    </>
  );
}
