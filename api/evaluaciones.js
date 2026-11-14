
export default async function handler(req, res) {
  const { NOCODB_API_TOKEN, NOCODB_TABLE_ID } = process.env;

  if (!NOCODB_API_TOKEN || !NOCODB_TABLE_ID) {
    return res.status(500).json({
      error: "Faltan las variables de conexión con NocoDB."
    });
  }

  const url = `https://app.nocodb.com/api/v2/tables/${NOCODB_TABLE_ID}/records`;

  try {
    const options = {
      method: req.method,
      headers: {
        "xc-token": NOCODB_API_TOKEN,
        "Content-Type": "application/json"
      }
    };

    if (["POST", "PATCH", "DELETE"].includes(req.method)) {
      options.body = JSON.stringify(req.body);
    }

    if (!["GET", "POST", "PATCH", "DELETE"].includes(req.method)) {
      return res.status(405).json({ error: "Método no permitido." });
    }

    const response = await fetch(url, options);
    const data = await response.json();

    return res.status(response.status).json(data);

  } catch (error) {
    return res.status(500).json({
      error: "Error al conectar con NocoDB.",
      detail: error.message
    });
  }
}
