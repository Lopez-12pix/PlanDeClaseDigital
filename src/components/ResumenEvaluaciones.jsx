
import { useEffect, useState } from "react";

function ResumenEvaluaciones() {
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const consultarEvaluaciones = async () => {
      try {
        const response = await fetch("/api/evaluaciones");

        if (!response.ok) {
          throw new Error("No se pudieron consultar las evaluaciones.");
        }

        const data = await response.json();
        setTotal(data.list?.length || 0);

      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };

    consultarEvaluaciones();
  }, []);

  if (cargando) {
    return <p>Consultando evaluaciones...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="resumen-evaluaciones">
      <h3>Participación estudiantil</h3>
      <p>
        Evaluaciones registradas:
        <strong> {total}</strong>
      </p>
    </div>
  );
}

export default ResumenEvaluaciones;
