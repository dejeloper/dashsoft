import { useEffect } from "react";
// Components
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
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
      <Sidebar />
      <main className="w-[calc(100%-256px)] ml-64 bg-gray-50 min-h-screen">
        <Header />
      </main>
    </>
  );
}

export default App;
