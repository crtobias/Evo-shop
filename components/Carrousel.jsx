import ProductCard from "./ProductCard";
import productsData from "../context/data.json"; // Asegúrate de tener el archivo JSON en el directorio adecuado

export default function Carrousel() {
  return (
    <div className="flex overflow-x-auto space-x-4 py-6 max-w-[90vw] ">
      {productsData.map((product, index) => (
        <div key={index} className="min-w-[280px]">
          <ProductCard
            nombre={product.nombre}
            precio={product.precio}
            categoria={product.categoria}
            colores={product.colores}
            stock={product.stock}
            imagen={product.imagen}
          />
        </div>
      ))}
    </div>
  );
}
