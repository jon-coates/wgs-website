import { Camera, Archive, BrushCleaning } from 'lucide-react'
import Button from "../ui/button"

const Services = () => {
    const services = [
        {
          icon: Camera,
          title: "Scanning & Digitisation",
          description: "Professional digitisation services creating high-quality digital surrogates whilst minimising handling of fragile materials.",
          features: [
            "High-resolution scanning up to 600 DPI",
            "Colour-managed digital workflows",
            "Metadata creation and cataloguing",
            "Long-term digital storage solutions"
          ]
        },
        {
          icon: BrushCleaning,
          title: "Conservation & Preservation",
          description: "Expert conservation assessments and treatments by a qualified professional following international standards to stabilise and preserve items for years to come.",
          features: [
            "Condition assessment and documentation",
            "Paper and parchment conservation",
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
            "Climate-controlled storage advice",
            "Collection organisation and cataloguing"
          ]
        }
      ]
      

  return (
    <section className="py-20 bg-zinc-100" id="services">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
          Professional conservation and digitisation services to help preserve your family's precious memories, documents, and treasured items for future generations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-white border-zinc-200 border-1 rounded-xl p-8 hover:shadow-lg transition-shadow flex flex-col">
                {/* Icon */}
                <div className="bg-brand-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-zinc-900 mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                {/* Features List
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-brand-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 ">{feature}</span>
                    </li>
                  ))}
                </ul> */}
                
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