const Card = ({ marca, precio, foto, nombre, disponibilidad }) => {
    return (
      <div className="w-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">
        <img src={foto} alt={nombre} className="w-full h-72 object-cover" />
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
  
  export default Card;
  