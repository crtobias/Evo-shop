
import Link from "next/link"


const Navbar = () => {
    return (
        <div className="fixed w-full top-0 z-100 shadow-2xl">

            <div className="w-full bg-white  p-2 flex flex-row justify-around">
                <Link href="/">
                    <div className="p-1">
                        O-meli
                    </div>
                </Link>

                <div className="bg-gray-100 p-1 rounded-lg border border-gray-400 w-2/4 text-center hover:bg-gray-200">
                    barra
                </div>
                <Link href="/main">
                    <button className="p-1 border rounded-lg pr-4 pl-4 hover:bg-gray-200">Login</button>
                </Link>
            </div>

            <div className="w-full bg-gray-100  p-2 flex-row flex justify-center gap-10 h-10">
                <div className="text-center hover:border-b">categoria</div>
                <div className="text-center hover:border-b">categoria</div>
                <div className="text-center hover:border-b">categoria</div>
                <div className="text-center hover:border-b">categoria</div>
            </div>

        </div>
    )
}


export default Navbar