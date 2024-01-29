import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// Components
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
// Icons
import { RiMoreFill } from "react-icons/ri";
// Styles
import "./App.css";

const Home = () => <div>Home</div>;
const Searching = () => <div>Searching</div>;
const Products = () => <div>Products</div>;

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
      <Sidebar />
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main ">
        <Header />
        <section className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-6 bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/10">
              <div className="flex items-start justify-between mb-4">
                <div className="font-medium">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Searching />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products" element={<Products />} /> f
                  </Routes>
                </div>
                <div className="actions">
                  <button
                    type="button"
                    className="dropdown-toggle text-gray-400 hover:text-gray-600"
                  >
                    <RiMoreFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
