import { Code, FileText, Handshake, PhoneCall, Rocket } from "lucide-react"

import Container from "@/components/home/container"
import { Card, CardDescription, CardHeader } from "@/components/ui/card"

const data = {
  id: "steps",
  title: "Cómo creamos tu página web",
  description:
    "Te acompañamos en cada paso del proceso, desde la consulta inicial hasta el lanzamiento de tu sitio web, asegurando que obtengas una solución a medida y de alta calidad.",
  button: {
    text: "Contáctanos",
    icon: PhoneCall,
  },
}

const stepsData = [
  {
    step: 1,
    title: "Consulta Inicial",
    description:
      "Puedes contactarnos por diferentes medios o realizar el simulador para entender tus necesidades y ofrecerte un estimado aproximado del costo de tu página web.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Propuesta Detallada",
    description:
      "Estaremos en contacto para realizar una propuesta detallada con el diseño y funcionalidades ideales para tu negocio teniendo en cuenta los requisitos, tecnologias usadas y el tiempo de desarrollo aproximado.",
    icon: Handshake,
  },
  {
    step: 3,
    title: "Desarrollo y Ajustes",
    description:
      "Desarrollaremos tu página web y te mantendremos informado para hacer los ajustes necesarios según tus preferencias o solicitudes realizadas por ti.",
    icon: Code,
  },
  {
    step: 4,
    title: "Lanzamiento y despliegue",
    description:
      "Lanzaremos tu página web y te ofreceremos soporte constante para asegurarnos de que todo funcione perfectamente y a tu medida.",
    icon: Rocket,
  },
]

export function StepsSection() {
  return (
    <Container id={data.id} title={data.title} description={data.description}>
      <div className="relative">
        <div
          className="absolute left-[23px] h-full w-0.5 bg-primary lg:left-0 lg:top-6 lg:h-0.5 lg:w-full"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col space-y-8 lg:flex-row lg:justify-between lg:space-y-0">
          {stepsData.map((step) => (
            <div
              key={step.title}
              className="flex w-full items-center lg:flex-col lg:items-center lg:px-4"
            >
              <div className="mr-4 flex size-12 shrink-0 items-center justify-center rounded bg-primary text-lg font-bold text-primary-foreground lg:mb-4">
                {step.step}
              </div>
              <Card>
                <CardHeader>
                  <step.icon className="mb-2 text-primary" />
                  <h3 className="font-bold">{step.title}</h3>
                  <CardDescription>
                    <p className="text-[13px] text-muted-foreground">
                      {step.description}
                    </p>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
