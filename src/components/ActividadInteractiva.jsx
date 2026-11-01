
import { useState } from "react";
import { motion } from "framer-motion";

function ActividadInteractiva() {
  const [respuesta, setRespuesta] = useState(null);

  const opciones = [
    {
      id: "A",
      texto: "Copiar directamente la respuesta de la IA.",
    },
    {
      id: "B",
      texto: "Verificar la información y explicarla con mis propias palabras.",
    },
    {
      id: "C",
      texto: "Compartir la respuesta sin revisarla.",
    },
  ];

  return (
    <motion.div
      className="actividad-interactiva"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="etiqueta">RETO PARA ESTUDIANTES</span>

      <h3>¿Qué harías en esta situación?</h3>

      <p>
        Una herramienta de inteligencia artificial te proporciona
        una respuesta para una tarea escolar. ¿Cuál sería la mejor
        manera de utilizar esa información?
      </p>

      <div className="opciones">
        {opciones.map((opcion) => (
          <button
            key={opcion.id}
            className={`opcion ${
              respuesta === opcion.id ? "opcion-seleccionada" : ""
            }`}
            onClick={() => setRespuesta(opcion.id)}
          >
            <span>{opcion.id}</span>
            {opcion.texto}
          </button>
        ))}
      </div>

      {respuesta && (
        <motion.div
          className={`retroalimentacion ${
            respuesta === "B" ? "respuesta-correcta" : "respuesta-error"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {respuesta === "B" ? (
            <>
              <h4>¡Muy bien! Esa es la decisión adecuada.</h4>
              <p>
                Verificar la información y explicarla con tus propias
                palabras te permite aprender, desarrollar tu criterio
                y evitar compartir datos incorrectos.
              </p>
            </>
          ) : (
            <>
              <h4>¡Puedes intentarlo de nuevo!</h4>
              <p>
                Recuerda que la IA puede equivocarse. Es importante
                revisar sus respuestas y comprender la información
                antes de utilizarla en tus tareas.
              </p>
            </>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

export default ActividadInteractiva;
