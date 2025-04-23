"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ModeToggle } from "./darkMode";
import { Link  } from "react-scroll";

export function HeaderComponent() {
  const navItems = [
    {
      name: "Services",
      link: "services",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 pt-4 w-full z-30">
      <Navbar>
        {/* Desktop Navigation */}

        <NavBody>
          <div className="flex items-center gap-8">
            <NavbarLogo />
                <NavItems items={navItems} />
          </div>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link
              to={navItems[0].link} 
              smooth={true}
              duration={500}
              offset={-100}
            >
              <NavbarButton 
                variant="primary" 
                className="font-poppins bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                Get in touch
              </NavbarButton>
            </Link>
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
              {navItems.map((item, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  to={item.link}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-lg font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100 cursor-pointer"
                >
                  <span className="block py-2">{item.name}</span>
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <NavbarButton
                  variant="primary"
                  className="w-full bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                >
                  Get in touch
                </NavbarButton>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </header>
  );
}

