import Navbar from "../../../components/Navbar";

export default function MainLayout({ children }) {
    return (
      <div className="flex flex-col  items-center justify-center">
        <Navbar></Navbar>
        <div className="">{children}</div>

      </div>
    );
  }
  