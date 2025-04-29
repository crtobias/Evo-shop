import Image from "next/image";

export default function ProductCard({ nombre, precio, categoria, colores, stock, imagen }) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto h-[60vh]">
      
      {/* Imagen a la izquierda */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>

      {/* Información a la derecha */}
      <div className="flex flex-col justify-between p-6 w-full md:w-1/2">
        
        {/* Nombre y Categoría */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">{nombre}</h2>
          <p className="text-sm text-gray-500">{categoria}</p>
        </div>

        {/* Precio */}
        <div className="mt-4">
          <p className="text-xl font-bold text-black">${precio}</p>
        </div>
        <p className="text-sm text-gray-500">colores:</p>
        {/* Colores */}
        <div className="flex items-center gap-2 mt-4">
          {colores.map((color, index) => (
            <span
              key={index}
              className="w-5 h-5 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>

        {/* Stock */}
        <div className="mt-4">
          {stock > 0 ? (
            <p className="text-green-500">Disponible ({stock} unidades)</p>
          ) : (
            <p className="text-red-500">Sin stock</p>
          )}
        </div>

      </div>
    </div>
  );
}

