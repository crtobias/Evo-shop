import Image from "next/image";

const ProductCard = ({ marca, precio, foto, nombre, disponibilidad }) => {
  return (
    <div className="w-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">
      <div className="relative w-full h-72">
        <Image
          src={foto}
          alt={nombre}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-2 flex items-center gap-1">
          <span className="text-red-500 font-bold">🔴</span> {marca}
        </div>
        <h2 className="text-lg font-semibold text-gray-800">{nombre}</h2>
        <div className="flex justify-between items-center mt-2">
          <span className="text-blue-900 font-bold">${precio.toFixed(2)}</span>
          <span className="text-blue-500 text-sm">{disponibilidad}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
