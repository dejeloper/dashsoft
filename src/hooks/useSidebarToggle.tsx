import { useEffect } from "react";

export function useSidebarToggle() {
  useEffect(() => {
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const sidebarMenu = document.querySelector(".sidebar-menu");
    const sidebarOverlay = document.querySelector(".sidebar-overlay");
    const main = document.querySelector(".main");

    sidebarToggle?.addEventListener("click", (e) => {
      e.preventDefault();
      main?.classList.toggle("active");
      sidebarOverlay?.classList.toggle("hidden");
      sidebarMenu?.classList.toggle("-translate-x-full");
    });

    sidebarOverlay?.addEventListener("click", (e) => {
      e.preventDefault();
      main?.classList.add("active");
      sidebarOverlay?.classList.add("hidden");
      sidebarMenu?.classList.add("-translate-x-full");
    });

    document.querySelectorAll(".sidebar-dropdown-toggle").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const parent = item.closest(".group");

        if (parent) {
          if (parent.classList.contains("selected")) {
            parent.classList.remove("selected");
          } else {
            document
              .querySelectorAll(".sidebar-dropdown-toggle")
              .forEach((i) => {
                const group = i.closest(".group");
                if (group) {
                  group.classList.remove("selected");
                }
              });

            parent.classList.add("selected");
          }
        }
      });
    });
  }, []);
}
