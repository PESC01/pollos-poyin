import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contacto" className="bg-orange-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pollos Poyin</h3>
            <p className="text-orange-200 mb-4">
              El mejor pollo a la brasa con la receta tradicional que nos ha hecho famosos por más de 15 años.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-orange-200 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#menu" className="text-orange-200 hover:text-white transition-colors">
                  Menú
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="text-orange-200 hover:text-white transition-colors">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-orange-200 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-orange-200 mb-2">Av. Principal 123, Ciudad</p>
            <p className="text-orange-200 mb-2">+51 123 456 789</p>
            <p className="text-orange-200 mb-2">info@pollospoyin.com</p>
          </div>
        </div>

        <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-300">
          <p>&copy; {new Date().getFullYear()} Pollos Poyin. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

