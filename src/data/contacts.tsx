import React from "react";

export interface Contact {
  icon: React.ReactNode;
  name: string;
  href: string;
}

export const contacts: Contact[] = [
  {
    icon: (
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="John Doe"
        className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
      />
    ),
    name: "John Doe",
    href: "#",
  },
  {
    icon: (
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Jane Smith"
        className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
      />
    ),
    name: "Jane Smith",
    href: "#",
  },
  {
    icon: (
      <img
        src="https://randomuser.me/api/portraits/men/65.jpg"
        alt="Michael Brown"
        className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
      />
    ),
    name: "Michael Brown",
    href: "#",
  },
  {
    icon: (
      <img
        src="https://randomuser.me/api/portraits/women/68.jpg"
        alt="Emily Davis"
        className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
      />
    ),
    name: "Emily Davis",
    href: "#",
  },
  {
    icon: (
      <img
        src="https://randomuser.me/api/portraits/women/72.jpg"
        alt="Sophia Wilson"
        className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
      />
    ),
    name: "Sophia Wilson",
    href: "#",
  },
  {
    icon: (
      <img
        src="https://randomuser.me/api/portraits/men/77.jpg"
        alt="David Kim"
        className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
      />
    ),
    name: "David Kim",
    href: "#",
  },
  {
    icon: (
      <img
        src="https://randomuser.me/api/portraits/women/81.jpg"
        alt="Olivia Martinez"
        className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
      />
    ),
    name: "Olivia Martinez",
    href: "#",
  },
  {
    icon: (
      <img
        src="https://randomuser.me/api/portraits/men/85.jpg"
        alt="Ethan Clark"
        className="w-9 h-9 rounded-full object-cover border-1 border-transparent shadow-md"
      />
    ),
    name: "Ethan Clark",
    href: "#",
  },
];
