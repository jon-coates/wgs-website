import Button from "../ui/button"
import { siteConfig } from "../../config/siteConfig"

function Hero() {
    return (
      <section className="relative bg-zinc-50 min-h-[60vh] flex items-center">
        
        {/* Overlay for better text readability */}
        
        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main headline */}
            <h1 className="font-display text-8xl tracking-tight md:text-6xl text-zinc-900 mb-6 leading-tight">
              Don&apos;t be the last person to see your family&apos;s photos.
            </h1>
            
            {/* Subheadline */}
            <p className="text-base md:text-lg text-zinc-500 mb-8">
            We protect your originals whilst creating crystal-clear digital archives, preserving your family's story for generations to come.
            </p>
            
            
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="md" href="#contact">{siteConfig.cta.primary}</Button>
            </div>
            

          </div>
        </div>
      </section>
    )
  }
  
  export default Hero