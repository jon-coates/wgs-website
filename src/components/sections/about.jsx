import { Award, BookOpen, Shield } from 'lucide-react'

function About() {
  return (
    <section className="py-20 bg-white max-w-6xl mx-auto" id="about">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-left md:text-center mb-16 ">
          <h2 className="font-display text-3xl md:text-4xl text-zinc-900 mb-6">
            About White Gloves Studios
          </h2>
          <p className="text-lf font-sans text-zinc-600 max-w-3xl mx-auto">
            Meet Cody, the passionate conservator behind our commitment to preserving your family's precious memories
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start font-sans">
          {/* Image Column */}
          <div className="order-1 lg:order-1">
            <div className="relative">
              {/* Cody's professional image */}
              <div className="aspect-[4/5] bg-zinc-200 rounded-2xl overflow-hidden">
                <img 
                  src="/images/cody-coates.png" 
                  alt="Cody Coates - Owner of White Gloves Studios"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-zinc-300 to-zinc-400 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center text-zinc-600">
                    <div className="w-24 h-24 bg-zinc-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">CC</span>
                    </div>
                    <p className="text-lg font-semibold">Cody Coates</p>
                    <p className="text-sm">Professional Conservator</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-400 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Text Column */}
          <div className="order-2 lg:order-2">
            <div className="space-y-6">
              {/* <h3 className="font-display text-2xl md:text-3xl font-bold text-zinc-900">
                Cody Coates
              </h3> */}
              <p className="text-lg text-zinc-600 leading-relaxed">
                As the founder and principal conservator of White Gloves Studios, Cody brings over a decade of expertise in paper conservation, digitisation, and archival preservation. With a deep passion for preserving family histories and cultural heritage, Cody established White Gloves Studios to provide professional conservation services to families, institutions, and private collectors across Queensland.
              </p>
              
              <p className="text-lg text-zinc-600 leading-relaxed">
                Having worked with fragile documents, photographs, and artworks throughout their career, Cody understands the emotional and historical value of each item entrusted to our care. Every treatment is approached with the same level of attention and respect, whether it's a family photograph from the 1920s or a collection of historical documents.
              </p>

              {/* Credentials and Specialisations */}
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-zinc-900">Qualified Conservator</h4>
                    <p className="text-sm text-zinc-600">Professional training in paper conservation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-zinc-900">Specialist Expertise</h4>
                    <p className="text-sm text-zinc-600">Photographs, documents & archival materials</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-zinc-900">Trusted Care</h4>
                    <p className="text-sm text-zinc-600">Your memories in safe, professional hands</p>
                  </div>
                </div>
              </div> */}

              {/* Call to Action */}
              <div className='bg-zinc-100 p-6 rounded-2xl'>
                <h3 className="text-zinc-700 mb-2 font-bold font-display text-2xl leading-relaxed">
                  Ready to preserve your family's precious memories?
                </h3>
                <p className="text-zinc-700 mb-8 font-sans text-lg leading-relaxed">
                  Let's discuss how we can help protect your treasured items for future generations.
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex justify-center items-center px-8 py-4 text-xl bg-brand-300 text-black font-display rounded-full hover:bg-brand-500 transition-colors w-full text-center"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
