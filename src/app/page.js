import MainContent from "../../components/MainContent";
import Carrousel from "../../components/Carrousel";

export default function Home() {
  return (
    <div className="min-h-screen p-4 font-[family-name:var(--font-geist-sans)] bg-[#F9F9F6] pt-10 flex flex-col items-center gap-40">
      
      {/* Header */}
      <h1 className="backdrop-blur-3xl font-extralight text-3xl md:text-5xl fixed bg-black/70 w-full left-0 top-0 text-center text-[#F9F9F6] py-4">
        Evo
      </h1>

      <MainContent></MainContent>
      <Carrousel></Carrousel>  

      {/* <Link href="/main">Ir a Main</Link> */}
    </div>
  );
}
