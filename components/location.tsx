import { MapPin, Clock, Phone, Navigation } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-gradient-to-b from-orange-50 to-orange-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-orange-900 mb-4">Nuestra Ubicación</h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MapPin className="text-orange-600 h-8 w-8" />
            <p className="text-xl font-medium text-orange-800">
              Encuéntranos fácilmente
            </p>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Visítanos y disfruta de la mejor experiencia gastronómica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-orange-300">
              <h3 className="text-2xl font-bold text-orange-900 mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-orange-600 mt-1 flex-shrink-0 h-6 w-6" />
                  <div>
                    <h4 className="font-semibold text-lg">Dirección</h4>
                    <p className="text-gray-600">Av. Principal 123, Ciudad</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-orange-600 mt-1 flex-shrink-0 h-6 w-6" />
                  <div>
                    <h4 className="font-semibold text-lg">Horario de Atención</h4>
                    <p className="text-gray-600">Lunes a Domingo: 11:00 AM - 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-orange-600 mt-1 flex-shrink-0 h-6 w-6" />
                  <div>
                    <h4 className="font-semibold text-lg">Teléfono</h4>
                    <p className="text-gray-600">+51 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white py-2 px-4 rounded-lg shadow-lg font-bold z-10 flex items-center space-x-2">
                <Navigation className="h-5 w-5" />
                <span>¡Visítanos aquí!</span>
              </div>
              <div className="h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-orange-400 transform hover:scale-[1.02] transition-transform duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.964663061!2d-63.67408722883618!3d-22.01115890523738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d35662c7%3A0x15f0bbc54bcbe432!2sPollos%20Poyin!5e0!3m2!1ses!2spe!4v1710259560314!5m2!1ses!2spe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Pollos Poyin"
                ></iframe>
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white py-2 px-6 rounded-full shadow-lg font-medium">
                Pollos Poyin
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}