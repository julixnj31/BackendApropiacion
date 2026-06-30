const http = require("http");

// Arreglo en memoria que simula una base de datos de clientes.
// En una aplicacion real estos datos se guardarian en una base de datos.
let clientes = [
  {
    id: 1,
    nombre: "Ana Gomez",
    correo: "ana.gomez@correo.com",
    telefono: "3001234567",
    empresa: "Soluciones SENA",
  },
  {
    id: 2,
    nombre: "Carlos Perez",
    correo: "carlos.perez@correo.com",
    telefono: "3107654321",
    empresa: "Tech Aprendiz",
  },
];

// Puerto donde se ejecutara el servidor.
const PORT = process.env.PORT || 3000;

/**
 * Envia una respuesta JSON con el codigo HTTP indicado.
 * Esta funcion evita repetir cabeceras y JSON.stringify en cada ruta.
 */
function enviarRespuesta(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(data));
}

/**
 * Lee el cuerpo de una peticion POST o PUT usando streams de Node.js.
 * Los datos llegan en partes (chunks) y luego se unen en un solo JSON.
 */
function leerBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("El cuerpo de la peticion no contiene un JSON valido"));
      }
    });

    req.on("error", () => {
      reject(new Error("No fue posible leer el cuerpo de la peticion"));
    });
  });
}

/**
 * Busca el cliente indicado por el parametro id.
 * El id llega como texto desde la URL, por eso se convierte a numero.
 */
function buscarClientePorId(id) {
  const clienteId = Number(id);
  return clientes.find((cliente) => cliente.id === clienteId);
}

/**
 * Genera un id unico tomando el id mayor existente y sumando 1.
 */
function generarNuevoId() {
  if (clientes.length === 0) {
    return 1;
  }

  const ids = clientes.map((cliente) => cliente.id);
  return Math.max(...ids) + 1;
}

/**
 * Controlador principal para la API Mis Clientes.
 * Maneja GET, POST, PUT y DELETE sobre la ruta /api/clientes.
 */
async function manejarClientes(req, res, url) {
  const id = url.searchParams.get("id");

  if (req.method === "GET") {
    if (id) {
      const cliente = buscarClientePorId(id);

      if (!cliente) {
        enviarRespuesta(res, 404, {
          message: "Cliente no encontrado",
        });
        return;
      }

      enviarRespuesta(res, 200, cliente);
      return;
    }

    enviarRespuesta(res, 200, clientes);
    return;
  }

  if (req.method === "POST") {
    const datos = await leerBody(req);

    const nuevoCliente = {
      id: generarNuevoId(),
      nombre: datos.nombre,
      correo: datos.correo,
      telefono: datos.telefono,
      empresa: datos.empresa,
    };

    clientes.push(nuevoCliente);

    enviarRespuesta(res, 201, {
      message: "Cliente creado correctamente",
      cliente: nuevoCliente,
    });
    return;
  }

  if (req.method === "PUT") {
    if (!id) {
      enviarRespuesta(res, 404, {
        message: "Debe enviar el id del cliente en la URL",
      });
      return;
    }

    const cliente = buscarClientePorId(id);

    if (!cliente) {
      enviarRespuesta(res, 404, {
        message: "Cliente no encontrado",
      });
      return;
    }

    const datos = await leerBody(req);

    cliente.nombre = datos.nombre ?? cliente.nombre;
    cliente.correo = datos.correo ?? cliente.correo;
    cliente.telefono = datos.telefono ?? cliente.telefono;
    cliente.empresa = datos.empresa ?? cliente.empresa;

    enviarRespuesta(res, 200, {
      message: "Cliente actualizado correctamente",
      cliente,
    });
    return;
  }

  if (req.method === "DELETE") {
    if (!id) {
      enviarRespuesta(res, 404, {
        message: "Debe enviar el id del cliente en la URL",
      });
      return;
    }

    const clienteExiste = buscarClientePorId(id);

    if (!clienteExiste) {
      enviarRespuesta(res, 404, {
        message: "Cliente no encontrado",
      });
      return;
    }

    clientes = clientes.filter((cliente) => cliente.id !== Number(id));

    enviarRespuesta(res, 200, {
      message: "Cliente eliminado correctamente",
    });
    return;
  }

  enviarRespuesta(res, 404, {
    message: "Metodo HTTP no disponible para esta ruta",
  });
}

// Creacion del servidor HTTP nativo.
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname === "/") {
      enviarRespuesta(res, 200, {
        message: "Hola muchachos, bienvenidos a la API Mis Clientes",
      });
      return;
    }

    if (url.pathname === "/api/clientes") {
      await manejarClientes(req, res, url);
      return;
    }

    enviarRespuesta(res, 404, {
      message: "Ruta no encontrada",
    });
  } catch (error) {
    enviarRespuesta(res, 500, {
      message: "Error interno del servidor",
      error: error.message,
    });
  }
});

// El servidor escucha peticiones en el puerto configurado.
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor HTTP nativo ejecutandose en http://localhost:${PORT}`);
  console.log(`Ruta principal de la API: http://localhost:${PORT}/api/clientes`);
});
