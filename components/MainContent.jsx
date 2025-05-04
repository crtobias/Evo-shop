import Image from "next/image"
import buzo1 from "../assets/buzo2.png"

const MainContent = () => {
    return(
        <div className=" flex flex-col-reverse md:flex-row justify-center items-center w-full max-w-7xl gap-8 mt-25">
        
        {/* Texto */}
        <div className="flex flex-col items-center text-center max-w-xl px-6 py-8 text-neutral-800 font-light leading-relaxed space-y-6">
          <p>
            <span className="font-semibold">EVO</span> nace desde la calle y evoluciona con vos.
          </p>
          <p>
            Apostamos al minimalismo, a las formas sueltas y al estilo que no necesita gritar para hacerse notar.
          </p>
          <p>
            Cada prenda está pensada para moverse con vos, adaptarse, transformarse.
          </p>
          <p>
            Porque lo simple no es vacío: es esencia.
          </p>
          <p className="font-semibold">
            EVO — Menos forma. Más esencia.
          </p>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 h-80 md:h-[500px] overflow-hidden rounded-lg shadow-lg">
          <Image
            src={buzo1}
            alt="Imagen de buzo EVO"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    )
}

export default MainContent