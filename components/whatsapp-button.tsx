"use client"

import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Pequeño retraso para que el botón aparezca después de cargar la página
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const openWhatsApp = () => {
    window.open("https://wa.me/+59161671615", "_blank")
  }

  return (
    <button
      onClick={openWhatsApp}
      className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-500 hover:scale-110 flex items-center justify-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="animate-pulse" />
    </button>
  )
}

