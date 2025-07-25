import Button from "../ui/button"
import { siteConfig } from "../../config/siteConfig"

function Hero() {
    return (
      <section className="relative bg-zinc-50 md:min-h-[60vh] flex items-center">
        
        {/* Overlay for better text readability */}
        
        <div className="container mx-auto px-6 relative z-10 pt-16 pb-6 md:pt-32 md:pb-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-7xl tracking-tight text-zinc-900 mb-6 leading-tight">
              Don&apos;t be the last person to see your family&apos;s photos.
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg text-zinc-600 mb-8">
            Protect your originals. Create crystal-clear digital archives. Preserve your family's story.
            </p>
            
            
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" href="#contact">{siteConfig.cta.primary}</Button>
            </div>
            

          </div>
        </div>
      </section>
    )
  }
  
  export default Hero