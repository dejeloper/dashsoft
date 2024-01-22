import { FloatingFocusManager } from "@floating-ui/react";
import { useOpenFloating } from "../../hooks";

export function HeaderUser() {
  const {
    getReferenceProps,
    getFloatingProps,
    headingId,
    refs,
    floatingStyles,
    context,
    isOpen,
  } = useOpenFloating();
  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        type="button"
        className="dropdown-toggle flex items-center hover:bg-gray-50 hover:text-gray-600"
      >
        <img
          src="/images/admin.png"
          className="w-8 h-8 rounded block object-cover align-middle dropdown-toggle"
          alt="Avatar"
        />
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
            <div className="dropdown-menu hidden max-w-xs w-[150px] bg-white rounded-md border border-gray-100">
              <ul className="py-1.5 rounded-md bg-white border border-gray-100">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                  >
                    Setting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
