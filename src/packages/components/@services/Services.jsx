import React from "react";
import Service from "./Service";
import {motion} from "framer-motion";
import { fadeInUp } from "@/packages/animations/fadeIn";

const animation = {
  initial: {
    opacity: 0,

    x: 60,
  },

  viewport: {
    once: true,
  },

  whileInView: {
    opacity: 1,

    x: 0,

    transition: {
      duration: 0.5,

      ease: "easeInOut",
    },
  },
};

const StaticPage = () => {
  return (
    <div className="space-y-4">
      <motion.p {...animation} className="max-lg:text-justify">
        Se ofrece una solución efectiva y profesional para dar a conocer un
        negocio o proyecto en línea, a través de una web estática con diseño
        limpio y moderno, fácil de navegar y compatible con todos los
        dispositivos y navegadores. Es una opción económica y profesional para
        mostrar presencia en línea.
      </motion.p>
      <div className="grid lg:grid-cols-2 gap-4 overflow-x-hiddenpb-1 text-[18px]">
        <Service motionProps={animation} title="Landing Page" />
        <Service motionProps={animation} title="Multi Page" price="500.00" />
    
      </div>
    </div>
  );
};

const AdminPage = () => {
  return (
    <div className="space-y-4">
      <motion.p {...animation} className="max-lg:text-justify">
        Se ofrece una solución de web administrable a través de WordPress que
        permite al usuario tener el control total de su sitio web sin necesidad
        de conocimientos técnicos. La página web es personalizada y diseñada por
        profesionales, compatible con todos los dispositivos y navegadores, y
        cuenta con funciones integradas de SEO para mejorar el posicionamiento
        en los motores de búsqueda. Es una opción perfecta para aquellos que
        buscan una web profesional que puedan administrar por sí mismos.
      </motion.p >
      <div className="grid lg:grid-cols-2 gap-4 overflow-x-hidden">
        <Service motionProps={animation} title="Landing Page" price="600.00" />
        <Service motionProps={animation} title="Multi Page" price="1200.00" />
      </div>
    </div>
  );
};

const Web = ({ type }) => {
  switch (type) {
    case "static":
      return <StaticPage />;

    case "admin":
      return <AdminPage />;

    default:
      return <StaticPage />;
  }
};

const borderBottom = 'before:content-[""] before:absolute before:bottom-0 before:w-full before:h-[2px] before:bg-[#CCCFDD] before:w-full before:transition-all before:duration-500'

export default function Services() {
  const [type, setType] = React.useState("static");
  return (
    <section id="servicios" className="container pt-[70px] overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-4">Servicios</h2>

      <div className="flex justify-center gap-x-4 my-4  ">
        <a
          
          className={`pb-1 lg:text-[18px] relative ${
            type === "static" ? borderBottom : "before:w-0"
          }`}
          onClick={(e) => setType(e.target.dataset.type)}
          data-type="static"
          role="button"
        >
          Web Estatica
        </a>
        <a
          className={`pb-1 lg:text-[18px] relative  ${type === "admin" ? borderBottom : "before:w-0"}`}
          onClick={(e) => setType(e.target.dataset.type)}
          data-type="admin"
          role="button"
        >
          Web Administrable
        </a>
      </div>
      <Web type={type} />
    </section>
  );
}
