import { FloatingFocusManager } from "@floating-ui/react";
import { useOpenFloating } from "../../hooks";
import { RiSearchLine } from "react-icons/ri";

export function HeaderSearch() {
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
        className="dropdown-toggle text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"
      >
        <RiSearchLine />
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
            <div className="dropdown-menu hidden max-w-xs w-[300px] bg-white rounded-md border border-gray-100">
              <form action="" className="p-4 border-b border-b-gray-100">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500 transition-all duration-300 ease-in-out"
                    placeholder="Search..."
                  />
                  <RiSearchLine className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
                </div>
              </form>
              <div className="mt-3 mb-2">
                <div className="text-[13px] font-medium text-gray-400 ml-4">
                  Recently
                </div>
                <ul className="max-h-48 overflow-y-auto">
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
                          Create landing page
                        </div>
                        <div className="text-[11px] text-gray-400">$500</div>
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
                          Request new feature
                        </div>
                        <div className="text-[11px] text-gray-400">$300</div>
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
                          Implement new campaign
                        </div>
                        <div className="text-[11px] text-gray-400">$1200</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                    >
                      <img
                        src="/images/photo-7.jpg"
                        className="w-8 h-8 rounded block object-cover align-middle"
                        alt="Avatar"
                      />
                      <div className="ml-2">
                        <div className="text-[13px] text-gray-600 truncate group-hover:text-blue-500 ">
                          Search for SEO strategies for my website
                        </div>
                        <div className="text-[11px] text-gray-400">$420</div>
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
                          Capture and analyze data
                        </div>
                        <div className="text-[11px] text-gray-400">$2500</div>
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
