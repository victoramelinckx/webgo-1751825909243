
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Web de Ventas en 24 Horas" subheadline="Digitaliza tu negocio rápidamente con nuestro soporte 24/7 y comienza a vender online sin complicaciones." cta1="Comienza Ahora" />
<How step1Title="Contacta WebGo" step1Desc="Habla con nosotros sobre tus metas digitales." step2Title="Creamos tu sitio" step2Desc="Diseñamos y lanzamos en 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para maximizar tus ventas." />
<Aboutus headline="WebGo: Digitaliza tus Ventas Fácilmente" subheadline="Transformamos ventas con sitios web personalizados y gestión integral, sin complicaciones." beneficiotitulo1="Gestión Completa" beneficio1="Olvídate del manejo técnico." beneficiotitulo2="Incrementa Ventas" beneficio2="Aumenta tus clientes potenciales online." />
<Services heading="Domina el Mundo Digital en 24 Horas" description="Rapidez, compromiso, innovación: vende online sin complicaciones." services={[{"name":"Desarrollo Rápido de Sitios","icon":"rocket","description":"Webs listas en 24 horas."},{"name":"Optimización SEO","icon":"search","description":"Atrae más clientes con WebGo."},{"name":"Gestión de Contenido","icon":"edit","description":"Contenidos que capturan atención."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua siempre."},{"name":"Estrategia de Marketing Digital","icon":"chart-line","description":"Incrementa tu presencia online."},{"name":"Integración de E-commerce","icon":"shopping-cart","description":"Venta directa desde tu web."}]} />
<BeforeAndAfter subheadline="Resultados que transforman, calidad que impresiona en cada proyecto." />
<Faq faqs={[{"pregunta":"¿Cómo WebGo puede ayudarme a digitalizar mis ventas rápidamente?","respuesta":"WebGo ofrece servicios rápidos y eficientes para llevar tus ventas al mundo online. Nos enfocamos en un proceso ágil para que puedas empezar a vender en línea en poco tiempo, sin complicaciones."},{"pregunta":"¿Qué beneficios tiene trabajar con WebGo si no sé nada de ventas online?","respuesta":"En WebGo, nos encargamos de todo por ti. Nuestro compromiso es guiarte paso a paso para que puedas vender online sin ser un experto. Simplificamos el proceso y te ofrecemos soluciones innovadoras para que no tengas que preocuparte por la tecnología."},{"pregunta":"¿Puedo confiar en WebGo si no tengo tiempo para gestionar un sitio web?","respuesta":"Sí, con WebGo no necesitas tiempo extra. Nos comprometemos a gestionar tu sitio web y optimizar tus ventas digitales, para que puedas concentrarte en lo que realmente importa: tu negocio."},{"pregunta":"¿Cuáles son los costos asociados con los servicios de WebGo?","respuesta":"WebGo ofrece precios competitivos que reflejan nuestra rapidez, compromiso e innovación. Obtendrás un servicio completo que se adapta a tu presupuesto, asegurando que cada dólar invertido mejore tus ventas online."},{"pregunta":"¿Qué hace a WebGo diferente de otras empresas de digitalización?","respuesta":"WebGo se distingue por su enfoque en resultados rápidos, compromiso con el cliente y soluciones innovadoras. Nos especializamos en ayudar a pequeños negocios a crecer en el mundo digital, proporcionando un servicio personalizado que asegura tu éxito en las ventas online."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio Hoy" 
                      description="Digitaliza tus ventas con WebGo: rapidez, compromiso, innovación. Contáctanos y lleva tu negocio al siguiente nivel."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
