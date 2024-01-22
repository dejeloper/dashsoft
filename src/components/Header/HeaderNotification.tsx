import { FloatingFocusManager } from "@floating-ui/react";
import { useOpenFloating } from "../../hooks";
import { RiNotification3Line } from "react-icons/ri";

export function HeaderNotification() {
  const {
    getReferenceProps,
    getFloatingProps,
    headingId,
    refs,
    floatingStyles,
    context,
    isOpen,
  } = useOpenFloating();

  document.querySelectorAll("[data-tab]").forEach((item) => {
    if (item instanceof HTMLElement) {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const tab = item.dataset.tab;
        const page = item.dataset.tabPage;

        if (!tab || !page) return;

        const target = document.querySelector<HTMLElement>(
          `[data-tab-for="${tab}"][data-page="${page}"]`
        );

        if (!target) return;

        document.querySelectorAll(`[data-tab="${tab}"]`).forEach((i) => {
          if (i instanceof HTMLElement) {
            i.classList.remove("active");
          }
        });

        document.querySelectorAll(`[data-tab-for="${tab}"]`).forEach((i) => {
          if (i instanceof HTMLElement) {
            i.classList.add("hidden");
          }
        });

        item.classList.add("active");
        target.classList.remove("hidden");
      });
    }
  });

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        type="button"
        className="text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"
      >
        <RiNotification3Line />
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className="Popover"
            ref={refs.setFloating}
            style={floatingStyles}
            aria-labelledby={headingId}
            {...getFloatingProps()}
          >
            <div className="dropdown-menu max-w-xs w-[300px] bg-white rounded-md border border-gray-100">
              <div className="flex items-center px-4 pt-4 border-b border-b-gray-100 notification-tab">
                <button
                  type="button"
                  data-tab="notification"
                  data-tab-page="notifications"
                  className="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1 active"
                >
                  Notifications
                </button>
                <button
                  type="button"
                  data-tab="notification"
                  data-tab-page="messages"
                  className="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1"
                >
                  Messages
                </button>
              </div>
              <div className="my-2">
                <ul
                  className="max-h-48 overflow-y-auto"
                  data-tab-for="notification"
                  data-page="notifications"
                >
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="/images/photo-2.jpg"
                        className="w-8 h-8 rounded block object-cover align-middle"
                        alt="Avatar"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 truncate group-hover:text-blue-500 ">
                          New Order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="/images/photo-3.jpg"
                        className="w-8 h-8 rounded block object-cover align-middle"
                        alt="Avatar"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 truncate group-hover:text-blue-500 ">
                          New Order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="/images/photo-4.jpg"
                        className="w-8 h-8 rounded block object-cover align-middle"
                        alt="Avatar"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 truncate group-hover:text-blue-500 ">
                          New Order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="/images/photo-5.jpg"
                        className="w-8 h-8 rounded block object-cover align-middle"
                        alt="Avatar"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 truncate group-hover:text-blue-500 ">
                          New Order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="/images/photo-6.jpg"
                        className="w-8 h-8 rounded block object-cover align-middle"
                        alt="Avatar"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 truncate group-hover:text-blue-500 ">
                          New Order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul
                  className="max-h-48 overflow-y-auto hidden"
                  data-tab-for="notification"
                  data-page="messages"
                >
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="/images/photo-1.jpg"
                        className="w-8 h-8 rounded block object-cover align-middle"
                        alt="Avatar"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 truncate group-hover:text-blue-500 ">
                          Sara King
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Hello there!
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="/images/photo-2.jpg"
                        className="w-8 h-8 rounded block object-cover align-middle"
                        alt="Avatar"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 truncate group-hover:text-blue-500 ">
                          Fernando Sierra
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Hola, ¿qué tal el fin de semana?
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="/images/photo-3.jpg"
                        className="w-8 h-8 rounded block object-cover align-middle"
                        alt="Avatar"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 truncate group-hover:text-blue-500 ">
                          Paul Smill
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Hey, I have a question, can you help me?
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="/images/photo-4.jpg"
                        className="w-8 h-8 rounded block object-cover align-middle"
                        alt="Avatar"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 truncate group-hover:text-blue-500 ">
                          Annie Taylor
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Kid, did you finish the report for Thursday?
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
