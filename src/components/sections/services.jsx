import { Camera, Archive, Film, CheckCircle, Layers, BrushCleaning } from 'lucide-react'
import Button from "../ui/button"

const Services = () => {
    const services = [
        {
          icon: Layers,
          title: "Fast-Feed Bulk Photo Scanning",
          description: "Got loads of photos to digitise? Our fast-feed scanners make quick work of large collections while keeping your precious memories safe.",
          features: [
            "Quick batch scanning of photo collections",
            "Professional colour correction included", 
            "Automatic scanning of photo backs if required"
          ]
        },
        {
          icon: Film,
          title: "Negatives, Slides & Fragile Items",
          description: "The tricky stuff needs extra care. We specialise in digitising delicate negatives, old film, and those fragile photos that make you hold your breath.",
          features: [
            "All film formats - 35mm to large format",
            "Expert handling of glass plates and brittle items",
            "Conservation check-up included with every scan"
          ]
        },
        {
          icon: BrushCleaning, 
          title: "Conservation and Repairs",
          description: "When your photos need more than just scanning - we can help repair tears, remove stains, and stabilise deteriorating images so they last for generations.",
          features: [
            "Tear repair and edge reinforcement",
            "Stain reduction and cleaning treatments",
            "Stabilising fading or deteriorating photos"
          ]
        },
        {
          icon: Archive,
          title: "Archival Storage and Rehousing",
          description: "Time to give your collection a proper home? We'll sort out custom storage solutions that'll keep everything safe and easy to find.",
          features: [
            "Custom boxes and folders made to measure",
            "Only the good stuff - proper archival materials",
            "Help organising and cataloguing your collection"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="flex flex-col">
                
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center md:mb-6 mb-4">
                  <Icon className="w-16 h-18 text-brand-500" strokeWidth={1} absoluteStrokeWidth/>
                </div>
                
                {/* Title */}
                <h3 className="font-display font-bold text-2xl md:text-3xl text-zinc-900 mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-800 mb-6 font-display text-lg">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6 font-sans text-lg">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-zinc-600">{feature}</span>
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