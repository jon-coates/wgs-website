import { Camera, Archive, BrushCleaning, CheckCircle } from 'lucide-react'
import Button from "../ui/button"

const Services = () => {
    const services = [
        {
          icon: Camera,
          title: "Scanning & Digitisation",
          description: "Professional digitisation services creating high-quality digital surrogates whilst minimising handling of fragile materials.",
          features: [
            "High-resolution scanning",
            "Colour-managed digital workflows",
            "Long-term digital storage solutions"
          ]
        },
        {
          icon: BrushCleaning,
          title: "Conservation & Preservation",
          description: "Expert conservation assessments and treatments by a qualified conservator to stabilise and preserve items for years to come.",
          features: [
            "Condition assessment & documentation",
            "Preventive conservation planning",
            "Emergency response and disaster recovery"
          ]
        },
        {
          icon: Archive,
          title: "Archival Storage & Rehousing",
          description: "Custom rehousing solutions using conservation-grade materials and archival standards to protect your collection whilst ensuring accessibility.",
          features: [
            "Custom archival enclosures",
            "Conservation-grade materials only",
            "Collection organisation and cataloguing"
          ]
        }
      ]
      

  return (
    <section className="py-10 bg-zinc-50" id="services">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        {/* <div className="text-left md:text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
          Professional conservation and digitisation services to help preserve your family's precious memories, documents, and treasured items for future generations.
          </p>
        </div> */}

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="flex flex-col">
                
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  <Icon className="w-16 h-18 text-brand-500" strokeWidth={1} absoluteStrokeWidth/>
                </div>
                
                {/* Title */}
                <h3 className="font-display text-3xl text-zinc-900 mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                {/* <p className="text-zinc-600 mb-6 font-normal leading-relaxed text-lg">
                  {service.description}
                </p> */}
                
                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-zinc-600 font-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Spacer to push button down */}
                <div className="flex-grow"></div>
                
                {/* Learn More Link */}
                {/* <Button variant="outline" size="sm" className="p-0 h-auto mt-auto">
                  Learn more →
                </Button> */}
              </div>
            )
          })}
        </div>        
        
        {/* Call to Action */}
        {/* <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Need a custom solution or have questions about our services?
          </p>
          <Button size="lg">
            Schedule a Consultation
          </Button>
        </div> */}

      </div>
    </section>
  )
}

export default Services