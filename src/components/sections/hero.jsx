import Button from "../ui/button"
import { siteConfig } from "../../config/siteConfig"

function Hero() {
    return (
      <section className="relative bg-white min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/white-gloves-studios-hero-bg.png')"
          }}
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80"></div>
        
        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main headline */}
            <h1 className="font-display text-5xl tracking-tight md:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
                Preserving Your Family's Memories with Care
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-zinc-600 mb-8">
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