import { useEffect } from "react";
// Components
import { Sidebar } from "./components/Sidebar";
import {
  HeaderNotification,
  HeaderSearch,
  HeaderUser,
} from "./components/Header";
// Hooks
// import { useGetClostersHeader } from "./hooks";
// Icons
import { RiMenuFill } from "react-icons/ri";
// Styles
import "./App.css";

function App() {
  useEffect(() => {
    document.querySelectorAll(".dropdown").forEach((item, index) => {
      const popperId = `popper-${index}`;
      const toggle = item.querySelector(".dropdown-toggle");
      const menu = item.querySelector(".dropdown-menu");
      if (!toggle || !menu) return;
      if (menu instanceof HTMLElement) {
        menu.dataset.popperId = popperId;
      }
    });

    document.addEventListener("click", (e) => {
      if (e.target instanceof Element) {
        const toggle = e.target.closest(".dropdown-toggle");

        if (toggle) {
          const menuEl = toggle
            ?.closest(".dropdown")
            ?.querySelector(".dropdown-menu");

          if (menuEl && menuEl.classList.contains("hidden")) {
            hideDropdown();
            menuEl.classList.remove("hidden");
          } else if (menuEl) {
            menuEl.classList.add("hidden");
          }
        }
      }
    });

    const hideDropdown = () => {
      document.querySelectorAll(".dropdown-menu").forEach((item) => {
        item.classList.remove("hidden");
      });
    };
  }, []);

  return (
    <>
      {/* Sidebar */}
      <Sidebar />
      {/* Fin Sidebar */}
      {/* Main */}
      <main className="w-[calc(100%-256px)] ml-64 bg-gray-50 min-h-screen">
        <div className="flex items-center bg-white py-2 px-6 shadow-md shadow-black/5">
          <button className="text-lg text-gray-600">
            <RiMenuFill />
          </button>
          <ul className="flex items-center text-sm ml-4">
            <li className="mr-2">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 font-medium"
              >
                Dashboard
              </a>
            </li>
            <li className="text-gray-600 mr-2 font-medium"> / </li>
            <li className="text-gray-600 mr-2 font-medium">Analitytics</li>
          </ul>
          <ul className="ml-auto flex items-center">
            <li className="mr-1 dropdown flex items-center">
              <HeaderSearch />
            </li>
            <li className="mr-1 dropdown flex items-center">
              <HeaderNotification />
            </li>
            <li className="ml-2 dropdown flex items-center">
              <HeaderUser />
            </li>
          </ul>
        </div>

        <section className="flex justify-center mt-4">
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Hola
          </button>
        </section>
      </main>
      {/* Fin Main */}
    </>
  );
}

export default App;
