import MainContent from "../../components/MainContent";
import Carrousel from "../../components/Carrousel";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen p-4 pt-0 font-[family-name:var(--font-geist-sans)] bg-[#F9F9F6]  flex flex-col items-center gap-40">
      
      <Navbar></Navbar>

      <MainContent></MainContent>
      <Carrousel></Carrousel>  

      
    </div>
  );
}
