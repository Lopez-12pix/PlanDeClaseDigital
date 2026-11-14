
import { useState } from "react";
import { motion } from "framer-motion";

function ActividadInteractiva() {
  const [respuestas, setRespuestas] = useState({});
  const [nombre, setNombre] = useState("");
  const [grado, setGrado] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [guardado, setGuardado] = useState(false);

  const preguntas = [
    {
      pregunta:
        "Una herramienta de inteligencia artificial te proporciona una respuesta para una tarea escolar. ¿Cuál sería la mejor manera de utilizar esa información?",
      opciones: [
        { id: "A", texto: "Copiar directamente la respuesta de la IA." },
        {
          id: "B",
          texto: "Verificar la información y explicarla con mis propias palabras.",
        },
        { id: "C", texto: "Compartir la respuesta sin revisarla." },
      ],
      correcta: "B",
      explicacion:
        "Verificar la información y explicarla con tus propias palabras te permite aprender, desarrollar tu criterio y evitar compartir datos incorrectos.",
    },
    {
      pregunta:
        "¿Qué deberías hacer si la IA te proporciona un dato que parece incorrecto?",
      opciones: [
        { id: "A", texto: "Aceptar el dato porque lo generó una IA." },
        { id: "B", texto: "Ignorar la duda y utilizarlo en mi tarea." },
        {
          id: "C",
          texto: "Consultar fuentes confiables para comprobarlo.",
        },
      ],
      correcta: "C",
      explicacion:
        "La IA puede cometer errores. Contrastar la información con fuentes confiables ayuda a reconocerlos y utilizar datos correctos.",
    },
    {
      pregunta:
        "¿Cuál de estas acciones protege tu privacidad al utilizar una herramienta de IA?",
      opciones: [
        {
          id: "A",
          texto: "Evitar compartir contraseñas y datos personales.",
        },
        {
          id: "B",
          texto: "Escribir mi dirección y número de teléfono.",
        },
        {
          id: "C",
          texto: "Compartir fotografías de documentos personales.",
        },
      ],
      correcta: "A",
      explicacion:
        "Proteger tus datos personales es fundamental. No debes compartir contraseñas, documentos privados ni información sensible.",
    },
    {
      pregunta:
        "Si utilizas IA para elaborar una tarea escolar, ¿qué demuestra un uso responsable?",
      opciones: [
        {
          id: "A",
          texto: "Presentar todo el contenido como si fuera propio.",
        },
        {
          id: "B",
          texto: "Utilizarla como apoyo y reconocer su participación cuando corresponda.",
        },
        {
          id: "C",
          texto: "Dejar que la herramienta realice todo el trabajo.",
        },
      ],
      correcta: "B",
      explicacion:
        "La IA puede apoyar tu aprendizaje, pero debes aportar tus propias ideas y reconocer su uso de acuerdo con las indicaciones de tu docente.",
    },
    {
      pregunta:
        "¿Cuál es la mejor actitud al utilizar inteligencia artificial para aprender?",
      opciones: [
        {
          id: "A",
          texto: "Depender de ella para resolver todas mis actividades.",
        },
        {
          id: "B",
          texto: "Evitar pensar porque la IA tiene todas las respuestas.",
        },
        {
          id: "C",
          texto: "Usarla como apoyo, mantener una actitud crítica y aprender por cuenta propia.",
        },
      ],
      correcta: "C",
      explicacion:
        "La inteligencia artificial es una herramienta de apoyo. Tu pensamiento crítico, creatividad y capacidad para tomar decisiones siguen siendo esenciales.",
    },
  ];

  const seleccionarRespuesta = (indice, opcion) => {
    setRespuestas((anteriores) => ({
      ...anteriores,
      [indice]: opcion,
    }));

    setMensaje("");
    setGuardado(false);
  };

  const puntaje = preguntas.filter(
    (pregunta, indice) =>
      respuestas[indice] === pregunta.correcta
  ).length;

  const enviarEvaluacion = async (e) => {
    e.preventDefault();

    if (!nombre.trim() || !grado.trim()) {
      setMensaje("Completa tu nombre y grado.");
      return;
    }

    if (Object.keys(respuestas).length !== preguntas.length) {
      setMensaje("Debes responder las cinco preguntas.");
      return;
    }

    setGuardando(true);
    setMensaje("");

    try {
      const response = await fetch("/api/evaluaciones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre_estudiante: nombre.trim(),
          grado: grado.trim(),
          respuestas: JSON.stringify(respuestas),
          puntaje: puntaje,
          fecha: new Date().toISOString().split("T")[0],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No se pudo guardar la evaluación.");
      }

      setGuardado(true);
      setMensaje("¡Evaluación guardada correctamente!");
    } catch (error) {
      setMensaje(error.message || "Ocurrió un error al guardar.");
    } finally {
      setGuardando(false);
    }
  };

  return (
    <motion.div
      className="actividad-interactiva"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="etiqueta">RETO PARA ESTUDIANTES</span>

      <h3>¿Qué harías en estas situaciones?</h3>

      <p>
        Lee cada situación y selecciona la opción que consideres
        más adecuada. Pon a prueba tu criterio sobre el uso
        responsable de la inteligencia artificial.
      </p>

      <form onSubmit={enviarEvaluacion}>
        <div className="datos-estudiante">
          <h3>Datos del estudiante</h3>

          <label htmlFor="nombre-estudiante">
            Nombre completo
          </label>
          <input
            id="nombre-estudiante"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escribe tu nombre"
            required
          />

          <label htmlFor="grado-estudiante">Grado y sección</label>
          <input
            id="grado-estudiante"
            type="text"
            value={grado}
            onChange={(e) => setGrado(e.target.value)}
            placeholder="Ej. Cuarto Bachillerato, sección A"
            required
          />
        </div>

        {preguntas.map((pregunta, indice) => {
          const respuesta = respuestas[indice];

          return (
            <div className="pregunta-actividad" key={indice}>
              <h3>
                {indice + 1}. {pregunta.pregunta}
              </h3>

              <div className="opciones">
                {pregunta.opciones.map((opcion) => (
                  <button
                    key={opcion.id}
                    type="button"
                    className={`opcion ${
                      respuesta === opcion.id
                        ? "opcion-seleccionada"
                        : ""
                    }`}
                    onClick={() =>
                      seleccionarRespuesta(indice, opcion.id)
                    }
                  >
                    <span>{opcion.id}</span>
                    {opcion.texto}
                  </button>
                ))}
              </div>

              {respuesta && (
                <motion.div
                  className={`retroalimentacion ${
                    respuesta === pregunta.correcta
                      ? "respuesta-correcta"
                      : "respuesta-error"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {respuesta === pregunta.correcta ? (
                    <>
                      <h4>¡Muy bien! Respuesta correcta.</h4>
                      <p>{pregunta.explicacion}</p>
                    </>
                  ) : (
                    <>
                      <h4>¡Puedes intentarlo de nuevo!</h4>
                      <p>
                        Revisa las opciones y piensa cuál refleja
                        un uso responsable de la inteligencia artificial.
                      </p>
                    </>
                  )}
                </motion.div>
              )}
            </div>
          );
        })}

        {Object.keys(respuestas).length === preguntas.length && (
          <motion.div
            className="retroalimentacion respuesta-correcta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h4>¡Has completado el reto!</h4>
            <p>
              Respuestas correctas: {puntaje} de {preguntas.length}.
              Sigue utilizando la IA con responsabilidad y
              pensamiento crítico.
            </p>
          </motion.div>
        )}

        <button
          type="submit"
          className="boton-guardar"
          disabled={guardando || guardado}
        >
          {guardando
            ? "Guardando evaluación..."
            : guardado
              ? "Evaluación guardada"
              : "Enviar evaluación"}
        </button>

        {mensaje && (
          <motion.p
            className={guardado ? "mensaje-exito" : "mensaje-error"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {mensaje}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}

export default ActividadInteractiva;
