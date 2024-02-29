import { RiMenuFill } from "react-icons/ri";
import { HeaderSearch, HeaderNotification, HeaderUser } from "./headerComp";

export function Header() {
  return (
    <>
      <div className="flex items-center bg-white py-2 px-6 shadow-md shadow-black/5">
        <button className="text-lg text-gray-600 sidebar-toggle">
          <RiMenuFill />
        </button>
        <ul className="flex items-center text-sm ml-4">
          <li className="mr-2">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 font-medium hidden sm:block"
            >
              Dashboard
            </a>
          </li>
          <li className="text-gray-600 mr-2 font-medium hidden sm:block">/</li>
          <li className="text-gray-600 mr-2 font-medium">Analitytics</li>
        </ul>
        <ul className="ml-auto flex items-center">
          <li className="mr-1 dropdown hidden xs:flex xs:items-center">
            <HeaderSearch />
          </li>
          <li className="mr-1 dropdown hidden xs:flex xs:items-center">
            <HeaderNotification />
          </li>
          <li className="ml-2 dropdown flex items-center">
            <HeaderUser />
          </li>
        </ul>
      </div>
    </>
  );
}
