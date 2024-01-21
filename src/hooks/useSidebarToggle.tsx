import { useEffect } from "react";

export function useSidebarToggle() {
  useEffect(() => {
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
