import { PiFlowerLotusDuotone } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="flex flew-row items-center text-gray-600 ml-4">
                    <PiFlowerLotusDuotone className="w-16 h-16"/>
                    <h1 className="sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ml-4 font-bold">Irox Portfolio</h1>

                    <div className="ml-auto text-[20px] flex gap-6 pr-4">
                        <Link to={"/"} className="hover:text-gray-950">Acceuil</Link>
                        <Link to={"/skills"} className="hover:text-gray-950">Compétences</Link>
                        <Link to={"/price"} className="hover:text-gray-950">Prix</Link>
                        <Link to={"/contact"} className="hover:text-gray-950">Contact</Link>
                        <Link to={"https://github.com/Irox28"} className="hover:text-gray-950"><FaGithub className="w-8 h-8"/></Link>
                    </div>
                </div>
                <hr className="text-gray-200"/>
            </nav>
        </div>
    )
}