"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-orange-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="https://scontent.fvvi1-1.fna.fbcdn.net/v/t39.30808-6/323176064_696949551834530_4929732593387026832_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SvF5uEA1sD8Q7kNvgH6Mr5u&_nc_oc=Adixo6WColnpyNC2HdzAN8aKChN4uwSfgn5UqVeM8mPeiMAykaHmQlejhVE-SwiPjPg&_nc_zt=23&_nc_ht=scontent.fvvi1-1.fna&_nc_gid=A-tlt3cgsm8e75HisdvTX9y&oh=00_AYFUNLZ4rt5zDjaGVyd-Qjta8IOdqSUkeJIvIiPAscArEw&oe=67D841BD"
            alt="Pollos Poyin Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-orange-100">Pollos Poyin</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-orange-300 transition-colors">
            Inicio
          </a>
          <a href="#menu" className="hover:text-orange-300 transition-colors">
            Menú
          </a>
          <a href="#ubicacion" className="hover:text-orange-300 transition-colors">
            Ubicación
          </a>
          <a href="#contacto" className="hover:text-orange-300 transition-colors">
            Contacto
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-600 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a
              href="#inicio"
              className="text-white hover:text-orange-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#menu"
              className="text-white hover:text-orange-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Menú
            </a>
            <a
              href="#ubicacion"
              className="text-white hover:text-orange-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Ubicación
            </a>
            <a
              href="#contacto"
              className="text-white hover:text-orange-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

