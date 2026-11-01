
import { motion } from "framer-motion";

function HeaderClase() {
  return (
    <motion.header
      className="encabezado"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <nav className="navbar">
        <a href="#inicio" className="logo">
          ✦ IA con Criterio
        </a>

        <ul className="menu">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#consejos">Buenas prácticas</a></li>
          <li><a href="#estudiantes">Estudiantes</a></li>
          <li><a href="#docentes">Docentes</a></li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default HeaderClase;
