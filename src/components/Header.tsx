import { contacts as contactsData } from "@/data/contacts.tsx";
import { IoIosSearch } from "react-icons/io";
import { FloatingDock } from "@/components/ui/floating-dock";
import { RiMessengerFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowBack } from "react-icons/io";
import {
  FacebookHomeIcon,
  FacebookVideosIcon,
  FacebookMarketplaceIcon,
  FacebookGroupsIcon,
} from "@/assets/icons/FacebookIcons";

import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [smallSearchFocused, setSmallSearchFocused] = useState(false);
  const [contacts, setContacts] = useState(contactsData);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notificationFilter, setNotificationFilter] = useState<
    "all" | "unread"
  >("all");
  const notificationsRef = useRef<HTMLDivElement>(null);

  // const [active, setActive] = useState("home");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setNotificationsOpen(false);
      }
    };

    if (notificationsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationsOpen]);
  return (
    <header className="bg-white h-14 shadow fixed top-0 left-0 w-full z-30">
      <div className=" px-2 sm:px-4 py-2 flex items-center justify-between h-14 ">
        {/* Left: Logo + Search */}
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-[320px] relative">
          {/* Facebook 'f' inside a circle, styled to match Facebook's logo */}
          <span className="inline-flex items-center justify-center w-[41px] h-[41px] rounded-full bg-[#1877f2]">
            <svg
              viewBox="0 0 32 32"
              width="28"
              height="28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#1877f2" />
              <text
                x="16"
                y="23"
                textAnchor="middle"
                fontFamily="Arial, Helvetica, sans-serif"
                fontWeight="bold"
                fontSize="18"
                fill="#fff"
              >
                H
              </text>
            </svg>
          </span>
          {/* Search on small/medium: only icon with input/label logic */}
          <div className="max-[1260px]:block hidden cursor-pointer relative">
            <input
              id="mobile-search-input"
              type="text"
              className="absolute opacity-0 w-0 h-0"
              onFocus={() => setSmallSearchFocused(true)}
              onBlur={() => setSmallSearchFocused(false)}
              autoComplete="off"
            />
            <label htmlFor="mobile-search-input" className="cursor-pointer">
              <div
                onMouseEnter={() => setHoveredButton("search")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <IoIosSearch className="text-gray-500 text-[24px] " />
              </div>
            </label>
            {hoveredButton === "search" && (
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                Search
              </span>
            )}
            {/* Expanded search panel */}
            {smallSearchFocused && (
              <div
                className="absolute z-50 -left-18 -top-3 w-[320px] h-[560px] bg-white shadow-lg rounded-xl  border border-gray-200"
                style={{ minWidth: 320, minHeight: 460 }}
              >
                {/* Add your search content here */}
                <div
                  className="flex items-center justify-center  text-gray-700 absolute top-3 left-3 cursor-pointer w-10 h-10 rounded-full border-2 bg-gray-200"
                  onMouseEnter={() => setHoveredButton("back")}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => {
                    setSmallSearchFocused(false);
                    document.getElementById("mobile-search-input")?.blur();
                  }}
                >
                  <IoMdArrowBack className="text-gray-500 text-[24px]" />
                  {hoveredButton === "back" && (
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                      Back
                    </span>
                  )}
                </div>
                <div className="absolute top-3 left-16 right-3">
                  <label
                    htmlFor="mobile-search-input"
                    className="sr-only" // hide but accessible for screen readers
                  >
                    Search Facebook
                  </label>
                  <input
                    id="mobile-search-input"
                    type="text"
                    placeholder="Search Facebook"
                    className="w-full bg-[#f2f4f7] border border-[#f2f4f7] rounded-full py-2 px-4 focus:border-[#f2f4f7] focus:ring-0 focus:outline-none focus:shadow-none"
                  />
                </div>

                <h3 className="absolute top-12 p-4 text-gray-700 font-bold">
                  Recent
                </h3>
                <div className="absolute top-24 left-0 w-full px-4">
                  {contacts.length === 0 ? (
                    <div className="text-gray-400 text-center py-4">
                      No recent contacts
                    </div>
                  ) : (
                    contacts.slice(0, 8).map((contact, idx) => (
                      <div
                        key={contact.name + idx}
                        className="flex items-center  justify-between py-3 "
                      >
                        <div className="flex items-center gap-2 cursor-pointer w-full">
                          <span className="w-8 h-8 flex items-center justify-center">
                            {contact.icon}
                          </span>
                          <span className="text-gray-700 ">{contact.name}</span>
                        </div>
                        <button
                          className="w-6 h-6 flex items-center justify-center  rounded-full hover:bg-gray-200 transition-colors"
                          onClick={() =>
                            setContacts(contacts.filter((_, i) => i !== idx))
                          }
                        >
                          <span className="text-gray-400 text-lg font-bold cursor-pointer">
                            ×
                          </span>
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Search on large: full input */}
          <div className="hidden min-[1260px]:block relative w-[240px] ">
            <input
              type="text"
              placeholder="Search Facebook"
              className={`relative bg-[#f2f4f7] border z-60 border-[#f2f4f7] rounded-full py-2 px-4 transition-all duration-300 w-full placeholder:center focus:border-[#f2f4f7] focus:ring-0 focus:outline-none focus:shadow-none
                ${searchFocused ? "pl-4" : "pl-10"}`}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <label
              htmlFor="search"
              className={`absolute left-3 z-60 top-2.5 transition-all duration-300
                ${
                  searchFocused
                    ? "-translate-x-8 opacity-0 pointer-events-none"
                    : "translate-x-0 opacity-100"
                }`}
            >
              <IoIosSearch className="text-gray-500 text-[20px] searchIcon:block" />
            </label>
            {/* Expanded search panel */}
            {searchFocused && (
              <div
                className="absolute z-50 -left-18 -top-3 w-[320px] h-[560px] bg-white shadow-lg rounded-xl  border border-gray-200"
                style={{ minWidth: 320, minHeight: 460 }}
              >
                {/* Add your search content here */}
                <div
                  className="flex items-center justify-center  text-gray-700 absolute top-3 left-3 cursor-pointer w-10 h-10 rounded-full border-2 bg-gray-200"
                  onMouseEnter={() => setHoveredButton("back")}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <IoMdArrowBack className="text-gray-500 text-[24px]" />
                  {hoveredButton === "back" && (
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                      Back
                    </span>
                  )}
                </div>
                <h3 className="absolute top-12 p-4 text-gray-700 font-bold">
                  Recent
                </h3>
                <div className="absolute top-24 left-0 w-full px-4">
                  {contacts.length === 0 ? (
                    <div className="text-gray-400 text-center py-4">
                      No recent contacts
                    </div>
                  ) : (
                    contacts.slice(0, 8).map((contact, idx) => (
                      <div
                        key={contact.name + idx}
                        className="flex items-center  justify-between py-3 "
                      >
                        <div className="flex items-center gap-2 cursor-pointer w-full">
                          <span className="w-8 h-8 flex items-center justify-center">
                            {contact.icon}
                          </span>
                          <span className="text-gray-700 ">{contact.name}</span>
                        </div>
                        <button
                          className="w-6 h-6 flex items-center justify-center  rounded-full hover:bg-gray-200 transition-colors"
                          onClick={() =>
                            setContacts(contacts.filter((_, i) => i !== idx))
                          }
                        >
                          <span className="text-gray-400 text-lg font-bold cursor-pointer">
                            ×
                          </span>
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Center: Icons */}
        <div className="hidden mr-40 min-[1000px]:max-[1100px]:mr-20 min-[900px]:max-[1000px]:mr-10  md:min-[700px]:flex min-[700px]:max-[900px]:w-[300px] md:ml-16 min-[900px]:ml-10 min-[1100px]:ml-20 min-[700px]:max-[900px]:absolute min-[700px]:max-[900px]:-right-15 min-[700px]:max-[900px]:-translate-x-1/2 items-center gap-2 justify-center w-[446px]">
          <div>
            <FloatingDock
              items={[
                {
                  title: "Home",
                  icon: <FacebookHomeIcon className="w-6 h-6" />,
                  href: "/home",
                  className: (active) =>
                    !active
                      ? "hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors rounded-md "
                      : "",
                },
                {
                  title: "Videos",
                  icon: <FacebookVideosIcon className="w-6 h-6" />,
                  href: "#",
                  className: (active) =>
                    !active
                      ? "hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors rounded-md "
                      : "",
                },
                {
                  title: "Shop",
                  icon: <FacebookMarketplaceIcon className="w-6 h-6" />,
                  href: "#",
                  className: (active) =>
                    !active
                      ? "hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md  transition-colors  "
                      : "",
                },
                {
                  title: "Groups",
                  icon: <FacebookGroupsIcon className="w-6 h-6" />,
                  href: "#",
                  className: (active) =>
                    !active
                      ? "hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md transition-colors  "
                      : "",
                },
              ]}
              hoveredButton={hoveredButton}
              setHoveredButton={setHoveredButton}
            />
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-2">
          {/* Show all four icons on all screen sizes */}
          <div className="flex items-center gap-1 sm:gap-3 relative">
            {/* Menu */}
            <div className="relative">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                onMouseEnter={() => setHoveredButton("menu")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <CgMenuGridR className="text-gray-700 text-[20px]" />
              </button>
              {hoveredButton === "menu" && (
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                  Menu
                </span>
              )}
            </div>

            {/* Messenger */}
            <div className="relative">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                onMouseEnter={() => setHoveredButton("messenger")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <RiMessengerFill className="text-gray-700 text-[20px]" />
              </button>
              {hoveredButton === "messenger" && (
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                  Messenger
                </span>
              )}
            </div>

            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                onMouseEnter={() => setHoveredButton("notifications")}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => setNotificationsOpen(!notificationsOpen)}
              >
                <FaBell className="text-gray-700 text-[20px]" />
              </button>
              {hoveredButton === "notifications" && (
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                  Notifications
                </span>
              )}
              {notificationsOpen && (
                <div className="absolute  top-12 -right-15 w-90 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <div className="p-4">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 cursor-default">
                        Notifications
                      </h3>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[16px] px-3 py-1 rounded-md cursor-pointer  transition-colors ${
                            notificationFilter === "all"
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-600 border-gray-300 hover:bg-gray-200"
                          }`}
                          onClick={() => setNotificationFilter("all")}
                        >
                          All
                        </span>
                        <span
                          className={`text-[16px] px-3 py-1 rounded-md cursor-pointer  transition-colors ${
                            notificationFilter === "unread"
                              ? "text-blue-600 bg-blue-50 "
                              : "text-gray-600 border-gray-300 hover:bg-gray-200"
                          }`}
                          onClick={() => setNotificationFilter("unread")}
                        >
                          Unread
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between ml-1">
                      <span className="text-[16px]  text-gray-600 cursor-default">
                        New
                      </span>
                      <span className="text-[16px] text-blue-600 hover:text-blue-800 cursor-pointer">
                        See All
                      </span>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {/* Sample notifications - you can replace with real data */}
                    <div className="p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            JD
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">
                            <span className="font-semibold">John Doe</span>{" "}
                            liked your post
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            2 hours ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            SM
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">
                            <span className="font-semibold">Sarah Miller</span>{" "}
                            commented on your photo
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            5 hours ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            MR
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">
                            <span className="font-semibold">Mike Ross</span>{" "}
                            sent you a friend request
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            1 day ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                onMouseEnter={() => setHoveredButton("profile")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <CgProfile className="text-gray-700 text-[20px] " />
              </button>
              {hoveredButton === "profile" && (
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50">
                  Profile
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
