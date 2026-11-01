
import { motion } from "framer-motion";

function ObjetivosCard({ objetivos }) {
  return (
    <div className="tarjetas">
      {objetivos.map((objetivo, index) => (
        <motion.article
          className="tarjeta"
          key={index}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="numero-tarjeta">
            0{index + 1}
          </span>

          <h3>Objetivo de aprendizaje</h3>

          <p>{objetivo}</p>
        </motion.article>
      ))}
    </div>
  );
}

export default ObjetivosCard;
