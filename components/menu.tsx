"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import AnimatedSection from "@/components/animated-section"

// Menu data
const menuItems = [
  {
    id: 1,
    name: "Menú Económico",
    description: "1/8 de pollo con papas fritas y ensalada",
    price: "S/. 12.90",
    image: "https://pollovikingo.com/wp-content/uploads/2021/05/05_S2_A5_eco.jpg",
  },
  {
    id: 2,
    name: "Cuarto de Pollo",
    description: "1/4 de pollo con papas fritas, ensalada y ají",
    price: "S/. 18.90",
    image: "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    name: "Medio Pollo",
    description: "1/2 pollo con papas fritas, ensalada y ají",
    price: "S/. 32.90",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMTLCsflUqFXQ_aNLrN9kMon9RobjxcGPMA&s",
  },
  {
    id: 4,
    name: "Pollo Entero",
    description: "Pollo entero con papas fritas, ensalada y ají",
    price: "S/. 59.90",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7-DmLV8aThFW-edxpxHTgU5znafzKSmJkA&s",
  },
  {
    id: 5,
    name: "Milanesa de Pollo",
    description: "Filete de pollo empanizado con papas y ensalada",
    price: "S/. 22.90",
    image: "https://alicante.com.ar/wp-content/uploads/2022/06/jpeg-optimizer_iStock-1057832648-1-1440x1440.jpg",
  },
  {
    id: 6,
    name: "Milanesa de Carne",
    description: "Filete de carne empanizado con papas y ensalada",
    price: "S/. 24.90",
    image: "https://www.laylita.com/recetas/wp-content/uploads/2021/12/Como-hacer-milanesa-de-carne-de-res.jpg",
  },
  {
    id: 7,
    name: "Pipoca de Pollo",
    description: "Trozos de pollo crocante con papas y salsas",
    price: "S/. 19.90",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPH8iLLYKcsnRzrZBnGvrTpWZMJ0j_3Li-Hg&s",
  },
  {
    id: 8,
    name: "Alitas de Pollo",
    description: "Alitas bañadas en salsa BBQ o picante",
    price: "S/. 25.90",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMtc77TXLz_PHN0RqdOl8nhMIb3-d4yym3Q&s",
  },
  {
    id: 9,
    name: "Postres Variados",
    description: "Consulta nuestros postres del día",
    price: "Desde S/. 8.90",
    image: "https://scontent.fvvi1-1.fna.fbcdn.net/v/t39.30808-6/483750867_1206334921101576_6523337297533491986_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9QGfRNCyymUQ7kNvgEov9er&_nc_oc=Adjbf_3QXn3HHCCUR0_2Y0gT33ERBqaPjhPddKQMieURAJPqUi0v_ypUu43SczyGyhs&_nc_zt=23&_nc_ht=scontent.fvvi1-1.fna&_nc_gid=A8JLINF-BcrIN5xbyH5X9Ik&oh=00_AYE5XxEyYjl3mPzTdLKRHxke9Ts1Q9LebDYCcwnYx6ZvmA&oe=67D8407B",
  },
]

export default function Menu() {
  const openWhatsApp = (item: string) => {
    const message = `Hola, me gustaría ordenar: ${item}`
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Nuestro Menú</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Disfruta de nuestras deliciosas especialidades preparadas con los mejores ingredientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={(index * 0.1) % 0.5}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative h-64 w-full">
                  <Image
                    src={item.image || "https://scontent.fvvi1-1.fna.fbcdn.net/v/t39.30808-6/479484844_1186638413071227_5634032011629968018_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1xo8eScmPygQ7kNvgHGbA1p&_nc_oc=Adi2vhZde0v2Rt3si8C2WuHGkJNE-45LWwk6OSnxJ8opHBO1v-S0AbLeWiR-p7AhVX0&_nc_zt=23&_nc_ht=scontent.fvvi1-1.fna&_nc_gid=Ay3lp_KGniBzfUm3EzDnNf2&oh=00_AYHrOdZvxqH_fY2R-vai1TZ1CPZ3K1kuQ2KkegvVrik_MQ&oe=67D8259D"}
                    alt={item.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-orange-600">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-orange-700">{item.price}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700 transition-all duration-300 group-hover:bg-orange-500"
                    onClick={() => openWhatsApp(item.name)}
                  >
                    Ordenar Ahora
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

