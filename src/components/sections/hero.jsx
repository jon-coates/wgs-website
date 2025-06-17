import Button from "../ui/button"
import { siteConfig } from "../../config/siteConfig"

function Hero() {
    return (
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main headline */}
            <h1 className="font-display text-5xl tracking-tight md:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
                Preserving Your Memories with Care
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-zinc-600 mb-8 font-medium">
              Expert digitisation, rehousing, and conservation treatments for institutions and private collectors
            </p>
            
            
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="md" href="#contact">{siteConfig.cta.primary}</Button>
              <Button variant="secondary" size="md" href="#services">Our Services</Button>
            </div>
            

          </div>
        </div>
      </section>
    )
  }
  
  export default Hero