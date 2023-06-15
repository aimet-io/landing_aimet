import MainLayout from "@/layouts/MainLayout";
import About from "@/packages/components/@about/About";
import Contact from "@/packages/components/@contact/Contact";
import Disqus from "@/packages/components/@disqus/Disqus";
import Hero from "@/packages/components/@hero/Hero";
import Paquetes from "@/packages/components/@paquetes/Paquetes";
import Portfolio from "@/packages/components/@portfolio/Portfolio";
import Team from "@/packages/components/@team/Team";
import { Toaster } from "react-hot-toast";

// xd
// test
// Tesgin
export default function Home() {
  return (
    <>
      <Hero />
      <MainLayout title="Aimet | Home">
        <div className="w-full ">
          <About />
          <Paquetes />
          <Team />
          <Portfolio />
          <Contact />
          <h2 className="text-3xl text-center mt-[4rem] mb-5">
            Lo que dicen nuestros clientes
          </h2>
          <Disqus />
        </div>
      </MainLayout>
      <Toaster />
    </>
  );
}
