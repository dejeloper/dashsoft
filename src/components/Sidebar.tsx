import { useSidebarToggle } from "../hooks";
import {
  RiHome2Line,
  RiInstanceLine,
  RiFlashlightLine,
  RiSettings2Line,
  RiArrowRightSLine,
} from "react-icons/ri";

export function Sidebar() {
  useSidebarToggle();

  return (
    <>
      <div className="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu transition-transform">
        <a
          href="#"
          className="flex items-center pb-4 border-b border-b-gray-800"
        >
          <img
            src="/logo.svg"
            alt="logo"
            className="w-8 h-8 rounded object-cover"
          />
          <span className="text-lg font-bold text-gray-200 ml-3">Logo</span>
        </a>
        <ul className="mt-4 ">
          <li className="mb-1 group active">
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 rounded-md group-[.active]:bg-gray-800  group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <RiHome2Line className="mr-3 text-lg" />
              <span className="text-sm">Dashboard</span>
            </a>
          </li>
          <li className="mb-1 group">
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 rounded-md group-[.active]:bg-gray-800  group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
            >
              <RiInstanceLine className="mr-3 text-lg" />
              <span className="text-sm">Orders</span>
              <RiArrowRightSLine className="ml-auto group-[.selected]:rotate-90" />
            </a>
            <ul className="pl-7 mt-2 hidden group-[.selected]:block">
              <li className="mb-4">
                <a
                  href="#"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                >
                  Active Order
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                >
                  Complete Order
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                >
                  Canceled Order
                </a>
              </li>
            </ul>
          </li>
          <li className="mb-1 group">
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 rounded-md group-[.active]:bg-gray-800  group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
            >
              <RiFlashlightLine className="mr-3 text-lg" />
              <span className="text-sm">Services</span>
              <RiArrowRightSLine className="ml-auto group-[.selected]:rotate-90" />
            </a>
            <ul className="pl-7 mt-2 hidden group-[.selected]:block">
              <li className="mb-4">
                <a
                  href="#"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
                >
                  Manage Services
                </a>
              </li>
            </ul>
          </li>
          <li className="mb-1 group">
            <a
              href="#"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 rounded-md group-[.active]:bg-gray-800  group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
            >
              <RiSettings2Line className="mr-3 text-lg" />
              <span className="text-sm">Settings</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="fixed top-0 left-0 h-full w-full bg-black/50 z-40 sidebar-overlay md:hidden"></div>
    </>
  );
}
