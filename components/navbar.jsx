"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.div
        className="navigation-bar"
        transition={{ duration: 0.5 }}
      >
        <div className="container-3 w-container max-w-[90%] mx-auto">
          <article className="div-block flex justify-between items-center w-full">
            <Link href="/" className="brand-link w-nav-brand">
              <motion.img
                src="/images/dark_logo-1.png"
                loading="lazy"
                width="106"
                className="image-5 my-2.5"
              />
            </Link>

            <div
              className="hamburger-button w-nav-button md:hidden cursor-pointer z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </div>

            {/* Desktop Navigation */}
            <nav className="navigation-menu w-nav-menu hidden md:flex md:justify-end md:items-center">
              <Link href="/" className="navigation-link w-nav-link px-5 py-5">
                About
              </Link>
              <Link href="/learn" className="navigation-link w-nav-link px-5 py-5">
                Learn
              </Link>
              {/* <Link href="/pricing" className="navigation-link w-nav-link px-5 py-5">
                Pricing
              </Link> */}
            </nav>
          </article>
        </div>
      </motion.div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[var(--primary-colour)] z-40 pt-20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center">
              <motion.div
                className="flex flex-col items-center w-full"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {[
                  { href: "/", text: "About" },
                  { href: "/learn", text: "Learn" },
                  // { href: "/pricing", text: "Pricing" },
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className="navigation-link w-full text-center block py-6 text-xl border-b border-[rgba(255,255,255,0.1)]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

