"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ModeToggle } from "./darkMode";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderComponent() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navItems = [
    {
      name: "Services",
      link: "services",
      type: "scroll",
      homeLink: "/#services",
    },
    {
      name: "Projects",
      link: "/projects",
      type: "link",
    },
    {
      name: "Contact",
      link: "/contact",
      type: "link",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderNavItem = (item: typeof navItems[0], idx: number) => {
    if (item.type === "scroll" && isHomePage) {
      return (
        <ScrollLink
          key={`desktop-link-${idx}`}
          to={item.link}
          smooth={true}
          duration={500}
          offset={-100}
            className="relative text-sm font-medium text-neutral-600 hover:bg-slate-800 px-4 py-2 rounded-3xl hover:text-neutral-600 dark:text-neutral-300 dark:hover:text-neutral-100 cursor-default"
        >
          {item.name}
        </ScrollLink>
      );
    } else if (item.type === "scroll") {
      return (
        <Link
          key={`desktop-link-${idx}`}
          href={item.homeLink || item.link}
            className="relative text-sm font-medium px-4 py-2  text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 cursor-default"
        >
          {item.name}
        </Link>
      );
    } else {
      return (
        <Link
          key={`desktop-link-${idx}`}
          href={item.link}
          className="relative text-sm font-medium text-neutral-600 hover:bg-slate-800 px-4 py-2 rounded-3xl hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 cursor-default"
        >
          {item.name}
        </Link>
      );
    }
  };

  const renderMobileNavItem = (item: typeof navItems[0], idx: number) => {
    if (item.type === "scroll" && isHomePage) {
      return (
        <ScrollLink
          key={`mobile-link-${idx}`}
          to={item.link}
          smooth={true}
          duration={500}
          offset={-100}
          onClick={() => setIsMobileMenuOpen(false)}
          className="relative text-lg font-medium text-neutral-600 hover:bg-slate-800 px-4 py-2 rounded-3xl hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 cursor-default"
        >
          <span className="block py-2">{item.name}</span>
        </ScrollLink>
      );
    } else if (item.type === "scroll") {
      return (
        <Link
          key={`mobile-link-${idx}`}
          href={item.homeLink || item.link}
          onClick={() => setIsMobileMenuOpen(false)}
          className="relative text-lg font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 cursor-default"
        >
          <span className="block py-2">{item.name}</span>
        </Link>
      );
    } else {
      return (
        <Link
          key={`mobile-link-${idx}`}
          href={item.link}
          onClick={() => setIsMobileMenuOpen(false)}
            className="relative text-lg font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 cursor-default  "
        >
          <span className="block py-2">{item.name}</span>
        </Link>
      );
    }
  };

  return (
    <header className="fixed top-0 pt-4 w-full z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="flex items-center justify-between w-full">
            <NavbarLogo />
            <div className="flex items-center gap-8">
              {navItems.map((item, idx) => renderNavItem(item, idx))}
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Link href="/contact">
                <NavbarButton 
                  variant="primary" 
                  className="font-poppins bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 cursor-default"
                >
                  Get in touch
                </NavbarButton>
              </Link>
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-4">
              <ModeToggle />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex w-full flex-col gap-6">
              {navItems.map((item, idx) => renderMobileNavItem(item, idx))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <NavbarButton
                  variant="primary"
                  className="w-full bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 cursor-default"
                >
                  Get in touch
                </NavbarButton>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
}

