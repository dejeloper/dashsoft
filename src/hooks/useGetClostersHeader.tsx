import { useEffect } from "react";

export function useGetClostersHeader() {
  useEffect(() => {
    document.querySelectorAll(".dropdown").forEach((item, index) => {
      const popperId = `popper-${index}`;
      const toggle = item.querySelector(".dropdown-toggle");
      const menu = item.querySelector(".dropdown-menu");
      if (!toggle || !menu) return;
      if (menu instanceof HTMLElement) {
        menu.dataset.popperId = popperId;
      }
      if (toggle instanceof HTMLElement && menu instanceof HTMLElement) {
        console.log("popperId", popperId);
      }
    });

    document.addEventListener("click", (e) => {
      if (e.target instanceof Element) {
        const toggle = e.target.closest(".dropdown-toggle");
        const menu = e.target.closest(".dropdown-menu");

        if (toggle) {
          const menuEl = toggle
            ?.closest(".dropdown")
            ?.querySelector(".dropdown-menu");

          const popperId =
            menuEl instanceof HTMLElement ? menuEl.dataset.popperId : undefined;

          if (menuEl && menuEl.classList.contains("hidden")) {
            hideDropdown();
            menuEl.classList.remove("hidden");
            console.log("Show", popperId);
          } else if (menuEl) {
            menuEl.classList.add("hidden");
            console.log("Hide", popperId);
          }
        } else if (!menu) {
          console.log("Hide");
        }
      }
    });

    const hideDropdown = () => {
      document.querySelectorAll(".dropdown-menu").forEach((item) => {
        item.classList.remove("hidden");
      });
    };
  }, []);
}
