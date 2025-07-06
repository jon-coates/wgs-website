import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

function FAQ() {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqData = [
    {
      question: "What types of items can you conserve and restore?",
      answer: "We specialise in paper-based materials including photographs, documents, maps, certificates, letters, artwork, and archival materials. Our expertise covers items from the 19th century through to modern materials. We can assess and treat items that are torn, stained, faded, or showing signs of deterioration."
    },
    {
      question: "How long does the conservation process typically take?",
      answer: "The timeline varies depending on the condition and complexity of the item. Simple treatments like cleaning and stabilisation might take 1-2 weeks, while more complex restoration work can take 4-8 weeks. We'll provide a detailed timeline during your initial consultation and keep you updated throughout the process."
    },
    {
      question: "Do you offer digitisation services as well?",
      answer: "Yes, we provide high-quality digitisation services using professional equipment. This includes scanning documents and photographs at archival-quality resolution, creating digital backups of your precious items, and providing both digital files and physical conservation treatment."
    },
    {
      question: "How do you ensure the safety of my items during treatment?",
      answer: "Your items are handled with the utmost care using professional conservation techniques and materials. We work in a controlled environment with proper lighting, temperature, and humidity controls. All treatments are reversible and use archival-quality materials. We also maintain detailed documentation of all work performed."
    },
    {
      question: "Can you work with very fragile or damaged items?",
      answer: "Absolutely. We specialise in treating fragile and severely damaged items. Our first step is always a thorough assessment to determine the best approach. In some cases, we may recommend stabilisation rather than full restoration to preserve the item's integrity. We'll discuss all options with you before proceeding."
    },
    {
      question: "Do you provide consultations and quotes?",
      answer: "Yes, we offer free initial consultations where we can assess your items and discuss treatment options. We'll provide a detailed quote including the proposed treatment plan, timeline, and cost. You can bring items to us or send photographs for remote assessment."
    },
    {
      question: "What areas do you service in Queensland?",
      answer: "We primarily serve the Brisbane and Gold Coast regions, but we can arrange collection and delivery for clients throughout Queensland and interstate. For larger collections or institutions, we can also provide on-site services. Contact us to discuss your specific location and requirements."
    },
    {
      question: "How do I prepare my items for conservation treatment?",
      answer: "Handle items as little as possible and avoid touching damaged areas. Store them in a cool, dry place away from direct sunlight. Don't attempt any repairs yourself, as this can cause further damage. Bring items in a clean, sturdy container, and we'll handle the rest with professional care."
    }
  ]

  return (
    <section className="py-20 bg-zinc-50" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-brand-400" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Common questions about our conservation and digitisation services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zinc-50 transition-colors"
              >
                <h3 className="font-semibold text-zinc-900 text-lg pr-4">
                  {item.question}
                </h3>
                {openItems.has(index) ? (
                  <ChevronUp className="w-5 h-5 text-brand-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems.has(index) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-zinc-100 pt-4">
                    <p className="text-zinc-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-zinc-700 mb-6 text-lg">
            Still have questions? We're here to help!
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-brand-400 text-black font-semibold rounded-lg hover:bg-brand-500 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
