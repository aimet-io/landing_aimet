import Paquete from "./Paquete";

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

const paquetes = [
  {
    title: "Classic Pro",
    items: [
      "Dominio",
      "0/3 Secciones",
      "Alojamiento Web",
      "Integración redes",
      "Web personalizadas",
      "Modificaciones 5",
    ],
    price: "$0-$150",
    isMajor: false,
  },
  {
    title: "Ultra Pro",
    items: [
      "Classic Pro",
      "3/6 Secciones",
      "10 Modificaciones",
      "Contenido integrado",
      "Soporte/1 mes gratis",
      "Posicionamiento SEO",
    ],
    price: "$150-$500",
    isMajor: true
  },
  {
    title: "SuperB",
    items: [
      "Ultra Pro",
      "6/9 Secciones",
      "Soporte/2 meses",
      "Modificaciones ilimitadas",
      "Funciones específicas",
      "Servicio Personalizado",
    ],
    price: "$500-$+",
    isMajor: false
  },
];

export default function Paquetes() {
  return (
    <section id="servicios" className="container pt-[70px] overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-4">Paquetes</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        {paquetes.map((paquete, index) => (
          <Paquete motionProps={animation} {...paquete} key={index} />
        ))}
      </div>
    </section>
  );
}
