"use client"

import { useState } from "react";
import Card from "../../../components/Card";

// Simulamos 50 productos
const generateProducts = () => {
  const productos = [];
  for (let i = 1; i <= 50; i++) {
    productos.push({
      id: i,
      marca: `Marca ${i}`,
      precio: Math.floor(Math.random() * 100) + 10,
      foto: `https://picsum.photos/200/300?random=${i}`,
      nombre: `Producto ${i}`,
      disponibilidad: i % 2 === 0 ? "Stock Available" : "Out of Stock",
    });
  }
  return productos;
};

const Home = () => {
  const productos = generateProducts();
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 16;

  const indexInicio = (paginaActual - 1) * productosPorPagina;
  const indexFin = indexInicio + productosPorPagina;
  const productosPagina = productos.slice(indexInicio, indexFin);

  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <div className="mt-26 flex flex-col items-center justify-start min-h-screen w-screen bg-gray-100 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {productosPagina.map((producto) => (
          <Card
            key={producto.id}
            marca={producto.marca}
            precio={producto.precio}
            foto={producto.foto}
            nombre={producto.nombre}
            disponibilidad={producto.disponibilidad}
          />
        ))}
      </div>

      <div className="mt-8 flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>
        <span className="px-4 py-2 font-semibold">
          Página {paginaActual} de {totalPaginas}
        </span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Home;
