
import HeaderClase from "./components/HeaderClase";
import ObjetivosCard from "./components/ObjetivosCard";
import "./App.css";
import ActividadItem from "./components/ActividadItem";
import ActividadInteractiva from "./components/ActividadInteractiva";

function App() {
  const objetivos = [
    "Comprender qué es la inteligencia artificial y reconocer sus aplicaciones en la vida cotidiana y la educación.",
    "Identificar buenas prácticas para utilizar herramientas de IA de manera responsable, segura y crítica.",
    "Analizar las respuestas generadas por la IA y reconocer que pueden contener errores.",
    "Utilizar la inteligencia artificial como apoyo para aprender, sin sustituir el pensamiento propio y la creatividad."
  ];

  const buenasPracticas = [
    {
      titulo: "Verifica la información",
      descripcion: "No aceptes todo lo que responde la IA. Compara la información con libros, sitios confiables y otras fuentes."
    },
    {
      titulo: "Protege tus datos",
      descripcion: "Evita compartir contraseñas, direcciones, números telefónicos o información personal."
    },
    {
      titulo: "Reconoce la ayuda",
      descripcion: "Si utilizas IA en una tarea, reconoce su apoyo y explica cómo la utilizaste."
    },
    {
      titulo: "Piensa por ti mismo",
      descripcion: "Utiliza la IA para aprender y comprender, no para copiar respuestas sin analizarlas."
    }
  ];

  const actividades = [
    {
      titulo: "Detectives de información",
      descripcion: "Comparar una respuesta generada por IA con información de fuentes confiables e identificar posibles errores."
    },
    {
      titulo: "Aprende a preguntar",
      descripcion: "Escribir instrucciones claras para obtener respuestas útiles de una herramienta de inteligencia artificial."
    },
    {
      titulo: "Reto creativo",
      descripcion: "Utilizar la IA como apoyo para desarrollar una pequeña actividad escolar y agregar ideas propias."
    }
  ];

  const orientaciones = [
    {
      numero: "01",
      titulo: "Orientar",
      descripcion: "Explicar qué es la inteligencia artificial, sus beneficios, limitaciones y riesgos."
    },
    {
      numero: "02",
      titulo: "Acompañar",
      descripcion: "Guiar actividades donde los estudiantes investiguen, comparen información y utilicen la IA de forma responsable."
    },
    {
      numero: "03",
      titulo: "Evaluar",
      descripcion: "Valorar la comprensión, el análisis, la creatividad y las ideas propias de cada estudiante."
    }
  ];

  return (
    <>
      <HeaderClase />

      <main>
        <section className="hero" id="inicio">
          <div className="hero-texto">
            <span className="etiqueta">TECNOLOGÍA RESPONSABLE</span>
            <h1>La IA es una herramienta. Tu criterio marca la diferencia.</h1>
            <p>
              Aprende a utilizar la inteligencia artificial de manera
              responsable, crítica y creativa. Descubre cómo aprovechar
              sus beneficios sin dejar de pensar por ti mismo.
            </p>
            <a href="#consejos" className="boton boton-principal">
              Descubre cómo
            </a>
            <a href="#estudiantes" className="boton boton-secundario">
              Actividades
            </a>
          </div>

          <div className="hero-ilustracion">
            <div className="circulo">
              <span>✦</span>
              <h2>IA + Creatividad</h2>
              <p>Aprender, pensar y crear</p>
            </div>
          </div>
        </section>

        <section className="seccion" id="objetivos">
          <div className="contenedor">
            <h2 className="titulo-seccion">¿Qué aprenderemos?</h2>
            <p className="introduccion">
              Al finalizar esta experiencia, podrás utilizar la
              inteligencia artificial como una aliada en tu aprendizaje.
            </p>
            <ObjetivosCard objetivos={objetivos} />
          </div>
        </section>

        <section className="seccion seccion-clara" id="consejos">
          <div className="contenedor">
            <h2 className="titulo-seccion">Usa la IA de manera responsable</h2>
            <p className="introduccion">
              Cuatro buenas prácticas para aprovechar la tecnología
              sin dejar de lado tu criterio.
            </p>

            <div className="tarjetas">
              {buenasPracticas.map((practica, index) => (
                <article className="tarjeta" key={index}>
                  <span className="numero-tarjeta">0{index + 1}</span>
                  <h3>{practica.titulo}</h3>
                  <p>{practica.descripcion}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

<section className="seccion" id="estudiantes">
  <div className="contenedor">
    <h2 className="titulo-seccion">
      ¡Pon a prueba tu criterio!
    </h2>

    <p className="introduccion">
      Lee la situación, selecciona tu respuesta y descubre
      cómo tomar decisiones responsables al utilizar
      la inteligencia artificial.
    </p>

    <ActividadInteractiva />
  </div>
</section>

        <section className="seccion seccion-clara" id="docentes">
          <div className="contenedor">
            <h2 className="titulo-seccion">
              Orientaciones para docentes
            </h2>
            <p className="introduccion">
              El docente acompaña a los estudiantes para que aprendan
              a utilizar la inteligencia artificial con responsabilidad.
            </p>

            <div className="tarjetas">
              {orientaciones.map((item) => (
                <article className="tarjeta" key={item.numero}>
                  <span className="numero-tarjeta">{item.numero}</span>
                  <h3>{item.titulo}</h3>
                  <p>{item.descripcion}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="banner-final">
          <h2>La tecnología avanza. Tu responsabilidad también.</h2>
          <p>
            Aprende, crea y utiliza la inteligencia artificial
            con criterio.
          </p>
          <a href="#inicio" className="boton boton-claro">
            Volver al inicio ↑
          </a>
        </section>
      </main>

      <footer className="pie">
        <p>IA con Criterio | Aprender, crear y actuar responsablemente.</p>
        <p>Proyecto educativo sobre el uso responsable de la inteligencia artificial.</p>
      </footer>
    </>
  );
}

export default App;
