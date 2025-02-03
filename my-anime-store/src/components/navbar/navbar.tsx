"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import "./style.css";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/about" },
  { name: "Faqs", href: "/faqs" },
  { name: "Contact Us", href: "/contact" },
  { name: "Login", href: "/login" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`navbar fixed z-40 w-full grid grid-cols-3 py-6 border-b border-gray-200  items-center px-2 md:px-16 ${
          isScrolled ? "navbarScroll  shadow-md" : "bg-transparent text-white"
        }`}
      >
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button className="pl-2" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-8 h-8" />
          </button>
          <div
            className={`fixed top-0 right-0 h-full z-40 w-full bg-fourthly shadow-lg transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="p-4 text-textColor"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <ul className="px-3 flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 transition-colors ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-textColor hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex text-lg space-x-6 gap-3 font-medium">
            {navItems
              .filter((item) => item.name !== "Login")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block transition-colors font-medium ${
                      isScrolled
                        ? pathname === item.href
                          ? "text-primary"
                          : "hover:text-primary"
                        : pathname === item.href
                        ? "text-textColor"
                        : "hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Logo */}
        <Link
          href={"/"}
          className="logo flex justify-center Sprite_Graffiti text-5xl cursor-pointer"
        >
          A&apos;Space
        </Link>

        {/* Icons */}
        <div className="flex gap-3 items-center justify-end">
          <Link
            href={"/login"}
            className="hidden md:block hover:text-primary text-lg font-medium"
          >
            Login
          </Link>
          <button>
            <Search className="w-5 h-5 transition-transform duration-300 hover:scale-125" />
          </button>
          <button className="relative p-2">
            <ShoppingCart className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
            <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
              3
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
