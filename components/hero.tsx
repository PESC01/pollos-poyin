"use client"

import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[80vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://scontent.fvvi1-1.fna.fbcdn.net/v/t39.30808-6/479484844_1186638413071227_5634032011629968018_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1xo8eScmPygQ7kNvgHGbA1p&_nc_oc=Adi2vhZde0v2Rt3si8C2WuHGkJNE-45LWwk6OSnxJ8opHBO1v-S0AbLeWiR-p7AhVX0&_nc_zt=23&_nc_ht=scontent.fvvi1-1.fna&_nc_gid=Ay3lp_KGniBzfUm3EzDnNf2&oh=00_AYHrOdZvxqH_fY2R-vai1TZ1CPZ3K1kuQ2KkegvVrik_MQ&oe=67D8259D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <AnimatedSection direction="up">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">EL MEJOR POLLO</h1>
            <p className="text-xl md:text-2xl mb-8">
              Disfruta del sabor inigualable de nuestro pollo a la brasa, preparado con nuestra receta secreta y los
              mejores ingredientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-white/10 text-white"
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Menú
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-orange-600 text-white hover:bg-white/10"
                onClick={() => window.open("https://wa.me/+59161671615", "_blank")}
              >
                Ordenar Ahora
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

