import Footer from "@/packages/components/@footer/Footer";
import Nav from "@/packages/components/@nav/Nav";
import Head from "next/head";

export default function MainLayout({ title, children, metaDescription }) {
  return (
    <>
      <Head>
        {/* <meta
          name="description"
          content={metaDescription ?? "Meta Description"}
        /> */}

        <title>{title}</title>
        <meta lang="es" />
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content="Aimet Soluciones - Desarrollo de Software y Marketing Digital"
          key="title"
        />

        <meta
          name="description"
          content="Somos una empresa de desarrollo de software, marketing digital, desarrollo web, diseño web, diseño gráfico, diseño de logotipos, diseño de marcas, diseño de identidad corporativa, diseño de imagen corporativa, tiendas en línea, e-commerce, diseño de páginas web, diseño de sitios web, diseño de aplicaciones móviles, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web, desarrollo de software a la medida, desarrollo de software empresarial, desarrollo de software para empresas, desarrollo de software para negocios, desarrollo de software para pymes, desarrollo de software para emprendedores, desarrollo de software para startups, desarrollo de software para emprendimientos, desarrollo de software para emprendedores, desarrollo de software para emprendimientos, desarrollo de software para emprendedores, desarrollo de software para emprendimientos, desarrollo de software para emprendedores, desarrollo de software para emprendimientos."
          key="desc"
        />

        <meta name="og:description" content="Expertos en desarrollo web y e-commerce: ¡Obtén tu sitio web o tienda online de alto rendimiento ahora! Somos líderes en creación de páginas web y soluciones de comercio electrónico personalizadas. ¡Contacta con nosotros para un resultado excepcional y aparece en la cima de Google!" />
        
        <meta property="og:image" content="https://www.aimet.io/img/aimet.png"/>
      	<meta property="og:image:width" content="900"/>
        <meta property="og:image:height" content="600"/>
        <meta property="og:image:type" content="image/png"/>
    
        <meta
          name="og:description"
          content="Programador web en Perú, programador web en Lima, programador web en Estados Unidos, programador web en Chile, programador web en Argentina, programador web en Colombia, programador web en Ecuador, programador web en Bolivia, programador web en Venezuela, programador web en Brasil, programador web en Paraguay, programador web en Uruguay, programador web en México, programador web en España, programador web en Francia, programador web en Italia, programador web en Alemania, programador web en Inglaterra, programador web en Reino Unido, programador web en Australia, programador web en Nueva Zelanda, programador web en Japón, programador web en China, programador web en Rusia, programador web en India, programador web en Indonesia, programador web en Singapur, programador web en Malasia, programador web en Tailandia, programador web en Vietnam, programador web en Filipinas, programador web en Corea del Sur, programador web en Sudáfrica, programador web en Nigeria, programador web en Egipto."
        />
        <meta
          name="og:description"
          content="Tenemos desarrolladores diseñadores y especialistas en desarrollo de software, paginas web en Perú, paginas web en Lima, paginas web en Estados Unidos, paginas web en Chile, paginas web en Argentina, paginas web en Colombia, paginas web en Ecuador, paginas web en Bolivia, paginas web en Venezuela, paginas web en Brasil, paginas web en Paraguay, paginas web en Uruguay, paginas web en México, paginas web en España, paginas web en Francia, paginas web en Italia, paginas web en Alemania, paginas web en Inglaterra, paginas web en Reino Unido, paginas web en Australia, paginas web en Nueva Zelanda, paginas web en Japón, paginas web en China, paginas web en Rusia, paginas web en India, paginas web en Indonesia, paginas web en Singapur, paginas web en Malasia, paginas web en Tailandia, paginas web en Vietnam, paginas web en Filipinas, paginas web en Corea del Sur, paginas web en Sudáfrica, paginas web en Nigeria, paginas web en Egipto."
        />
        <meta
          name="keywords"
          content="desarrollo de software, marketing digital, desarrollo web, diseño web, diseño gráfico, diseño de logotipos, diseño de marcas, diseño de identidad corporativa, diseño de imagen corporativa, tiendas en línea, e-commerce, diseño de páginas web, diseño de sitios web, diseño de aplicaciones móviles, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web, desarrollo de software a la medida, desarrollo de software empresarial, desarrollo de software para empresas, desarrollo de software para negocios, desarrollo de software para pymes, desarrollo de software para emprendedores, desarrollo de software para startups, desarrollo de software para emprendimientos, desarrollo de software para emprendedores, desarrollo de software para emprendimientos, desarrollo de software para emprendedores, desarrollo de software para emprendimientos, desarrollo de software para emprendedores, desarrollo de software para emprendimientos."
        />

        <meta property="og:image" content="https://www.aimet.io/logo.png" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="icon" href="https://www.aimet.io/logo.png" />
      </Head>

      <Nav />

      {children}

      <Footer />
    </>
  );
}
