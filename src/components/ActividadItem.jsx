import { motion } from "framer-motion";

function ActividadItem({ numero, titulo, descripcion }) {
  return (
    <motion.article
      className="tarjeta"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="numero-tarjeta">{numero}</span>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </motion.article>
  );
}

export default ActividadItem;
