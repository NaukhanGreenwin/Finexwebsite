"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getImagePath } from "@/lib/image-utils";
import "@/app/header.css";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Our Credo", href: "/#credo" },
  { name: "From CEO", href: "/ceo" },
  { name: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Handle hash-only anchors (for same page navigation)
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Handle full URLs with hashes (for cross-page navigation)
    else if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (window.location.pathname !== path) {
        // Navigate to the page first, then scroll to the section
        window.location.href = href;
      } else {
        // Same page, just scroll to the section
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to content
      </a>
      
      <header className="finex-header sticky top-0 z-50">
        <div className="finex-header-content">
          {/* Logo */}
          <div className="finex-logo-container">
            <Image
              src={getImagePath("/images/company-logo.png")}
              alt="Finex Development Logo"
              width={100}
              height={100}
              priority
              className="object-contain"
            />
            <h1 className="finex-logo-text">Finex Development Inc.</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="finex-nav hidden lg:block" role="navigation">
            <div className="finex-nav-links">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("#") || item.href.includes("#")) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                  className="finex-nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden absolute top-4 right-4">
            <button
              className="p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-[#002B54] border-t border-[#003a6d]"
            >
              <nav className="px-4 py-6" role="navigation">
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          if (item.href.startsWith("#") || item.href.includes("#")) {
                            e.preventDefault();
                          }
                          handleNavClick(item.href);
                        }}
                        className="block py-2 px-4 text-white hover:text-[#F5A9B8] transition-colors"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
