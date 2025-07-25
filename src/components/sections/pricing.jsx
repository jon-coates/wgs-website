import { DollarSign, Camera, Archive, Clock, Shield, CheckCircle, ChevronDown, ChevronRight, FileText } from 'lucide-react'
import Button from "../ui/button"
import { useState } from 'react'

const Pricing = () => {
  const [openCards, setOpenCards] = useState(new Set())

  const toggleCard = (cardId) => {
    const newOpenCards = new Set(openCards)
    if (newOpenCards.has(cardId)) {
      newOpenCards.delete(cardId)
    } else {
      newOpenCards.add(cardId)
    }
    setOpenCards(newOpenCards)
  }

  const pricingData = {
    setupFee: {
      service: "Setup & Admin Fee",
      price: 80
    },
    photoScanning: {
      fastFeed: {
        description: "Ideal for collections in good condition - scans both sides simultaneously",
        maxSize: "8\" x 10\"",
        pricing: [
          {"size": "Up to 4\" x 6\"", "price": 1.50, "unit": "per photo"},
          {"size": "5\" x 7\"", "price": 2.00, "unit": "per photo"},
          {"size": "8\" x 10\"", "price": 2.50, "unit": "per photo"}
        ]
      },
      flatbed: {
        description: "For fragile items or photos requiring individual care",
        maxSize: "8\" x 10\"",
        pricing: [
          {"size": "Up to 4\" x 6\"", "price": 4.00, "unit": "per photo"},
          {"size": "5\" x 7\"", "price": 5.50, "unit": "per photo"},
          {"size": "8\" x 10\"", "price": 7.50, "unit": "per photo"}
        ]
      }
    },
    negativeScanning: [
      {"format": "35mm Negatives", "price": 3.50, "unit": "per photo"},
      {"format": "Medium Format (120/220)", "price": 7.00, "unit": "per photo"},
      {"format": "Large Format (4x5\" and above)", "price": 10.00, "unit": "per photo"}
    ],
    slideScanning: [
      {"format": "35mm Mounted Slides", "price": 4.00, "unit": "per slide"},
      {"format": "Medium Format Slides", "price": 7.50, "unit": "per slide"},
      {"format": "Large Format Slides", "price": 10.50, "unit": "per slide"}
    ],
    documentScanning: [
      {"size": "A4 and smaller", "price": 2.00, "unit": "per page"}
    ],
    fragileItemFees: [
      {"level": "Level 1 - Extra care handling", "price": 2.00, "unit": "per item"},
      {"level": "Level 2 - Specialised support required", "price": 5.00, "unit": "per item"},
      {"level": "Level 3 - Custom housing/enclosure", "price": "15.00+", "unit": "per item"}
    ],
    albumHandling: [
      {"type": "Small albums (up to 50 photos)", "price": 40.00, "unit": "per album"},
      {"type": "Medium albums (51-150 photos)", "price": 80.00, "unit": "per album"},
      {"type": "Large albums (151+ photos)", "price": 160.00, "unit": "per album"}
    ],
    fileManagement: {
      customDocumentation: {
        service: "Custom Documentation & Renaming",
        priceRange: "80.00 - 160.00",
        unit: "per hour",
        description: "20-50 items per hour depending on complexity"
      }
    },
    deliveryOptions: {
      digital: [
        {"method": "Google Drive", "price": "FREE", "note": "30 days, then $15/month"},
        {"method": "USB Drive (32GB)", "price": 25.00, "note": "Includes USB drive"},
        {"method": "USB Drive (64GB)", "price": 35.00, "note": "Includes USB drive"},
        {"method": "USB Drive (128GB)", "price": 50.00, "note": "Includes USB drive"},
        {"method": "USB Drive (256GB)", "price": 70.00, "note": "Includes USB drive"},
        {"method": "External Hard Drive (1TB)", "price": 120.00, "note": "Includes hard drive"},
        {"method": "External Hard Drive (2TB)", "price": 160.00, "note": "Includes hard drive"}
      ],
      physical: [
        {"method": "Australia Post", "price": "At cost + $10.00 handling"},
        {"method": "Courier", "price": "At cost + $10.00 handling"}
      ],
      note: "We do not accept client-supplied storage devices"
    },
    conservationServices: {
      cleaning: [
        {"service": "Basic Cleaning", "description": "Dust removal, surface cleaning", "price": 8.00, "unit": "per item"},
        {"service": "Standard Conservation", "description": "Cleaning + minor repairs, flattening", "price": 15.00, "unit": "per item"},
        {"service": "Advanced Conservation", "description": "Complex repairs, tear mending, humidification", "price": "25.00 - 45.00", "unit": "per item"},
        {"service": "Specialist Conservation", "description": "Extensive restoration work", "price": "Quote on assessment"}
      ],
      consultation: [
        {"service": "Item Assessment", "price": "POA"},
        {"service": "Conservation Planning", "price": "POA"}
      ]
    },
    additionalServices: [
      {"service": "On-site Work", "price": 180.00, "unit": "per hour"},
      {"service": "Rush Processing", "price": "+50%", "unit": "of base rates"},
      {"service": "Rush Processing", "price": "+50%", "unit": "of base rates"},
      {"service": "Weekend/After Hours", "price": "+25% of base rates"},
      {"service": "Colour Correction", "price": 2.00, "unit": "per image"},
      {"service": "Photo Restoration", "price": "25.00 - 150.00", "unit": "per image"},
      {"service": "Format Conversion", "price": 1.00, "unit": "per file"},
      {"service": "Duplicate Removal", "price": 40.00, "unit": "per hour"}
    ],
    terms: {
      payment: {
        deposit: "50% deposit required for projects over AUD $500",
        due: "Payment due within 14 days of completion",
        methods: "Bank transfer, card payment"
      },
      turnaround: {
        standard: "5-10 business days",
        large: "2-3 weeks (500+ items)",
        conservation: "1-4 weeks depending on complexity",
        rush: "+50% surcharge available"
      },
      quality: [
        "All items scanned at minimum 600 DPI (photos) or 300 DPI (documents)",
        "Colour correction and basic enhancement included",
        "Satisfaction guarantee - we'll re-scan any unsatisfactory items at no charge"
      ],
      notes: [
        "All prices include GST where applicable",
        "Quotes valid for 30 days",
        "Large projects may qualify for custom pricing - please enquire",
        "Contact us for a free consultation and personalised quote for your collection"
      ]
    }
  }

  const PricingCard = ({ title, children, className = "", cardId }) => {
    const isOpen = openCards.has(cardId)
    
    return (
      <div className={`bg-white rounded-2xl border border-zinc-200 transition-shadow ${className}`}>
        <button
          onClick={() => toggleCard(cardId)}
          className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-50 transition-colors"
        >
          <h3 className="font-display text-xl text-zinc-900">{title}</h3>
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-zinc-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-zinc-400" />
          )}
        </button>
        {isOpen && (
          <div className="px-6 pb-6">
            {children}
          </div>
        )}
      </div>
    )
  }

  const PricingTable = ({ items, showDescription = false }) => (
    <div className="overflow-hidden rounded-lg border border-zinc-200">
      <table className="w-full">
        <thead className="bg-zinc-100 uppercase tracking-widest font-black text-zinc-700 text-xs">
          <tr>
            <th className="px-4 py-3 text-left">Service</th>
            <th className="px-4 py-3 text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}>
              <td className="px-4 py-3">
                <div className="font-medium text-zinc-900">
                  {item.service || item.format || item.size || item.level || item.type || item.method}
                </div>
                {showDescription && item.description && (
                  <div className="text-sm text-zinc-600 mt-1">{item.description}</div>
                )}
                {item.note && (
                  <div className="text-sm text-zinc-500 mt-1 italic">{item.note}</div>
                )}
              </td>
              <td className="px-4 py-3 text-right">
                <div className="font-semibold text-zinc-900">
                  ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                </div>
                {item.unit && (
                  <div className="text-sm text-zinc-600">{item.unit}</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

//   const navigationItems = [
//     { id: "setup", label: "Setup & Admin Fees", icon: DollarSign },
//     { id: "photo-scanning", label: "Photo Scanning", icon: FileText },
//     { id: "specialised-scanning", label: "Specialised Scanning", icon: Archive },
//     { id: "conservation", label: "Conservation Services", icon: Shield },
//     { id: "additional-services", label: "Additional Services", icon: Clock },
//     { id: "delivery", label: "Delivery Options", icon: Archive },
//     { id: "terms", label: "Terms & Quality", icon: CheckCircle }
//   ]

  return (
    <section className="py-20 bg-zinc-50" id="pricing">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-left md:text-center md:mb-16 mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-zinc-900 mb-6">
            Digitisation & Conservation Pricing
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-display">
            Transparent pricing for professional conservation and digitisation services
          </p>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          {/* <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
                <h3 className="font-display text-lg text-zinc-900 mb-4">Jump to Pricing for:</h3>
                <nav className="space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center space-x-3 px-3 py-2 text-sm text-zinc-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </a>
                    )
                  })}
                </nav>
              </div>
            </div>
          </div> */}

          {/* Main Content */}
          <div className="flex-1 space-y-8 max-w-3xl mx-auto">
            {/* Setup Fee */}
            <div id="setup" className="scroll-mt-32">
              <PricingCard title="Initial Consultation & Setup" cardId="setup">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium text-zinc-900">{pricingData.setupFee.service}</div>
                    <div className="text-sm text-zinc-600">{pricingData.setupFee.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-zinc-900">${pricingData.setupFee.price.toFixed(2)}</div>
                    <div className="text-sm text-zinc-600">{pricingData.setupFee.currency}</div>
                  </div>
                </div>
              </PricingCard>
            </div>

            {/* Photo Scanning */}
            <div id="photo-scanning" className="scroll-mt-32">
              <PricingCard title="Photo Scanning Services" cardId="photo-scanning">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-2">Fast Feed Scanning</h4>
                    <p className="text-sm text-zinc-600 mb-2">{pricingData.photoScanning.fastFeed.description}</p>
                    <p className="text-sm text-zinc-600 mb-3">Max size: {pricingData.photoScanning.fastFeed.maxSize}</p>
                    <PricingTable items={pricingData.photoScanning.fastFeed.pricing} />
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-100">
                    <h4 className="font-medium text-zinc-900 mb-2">Flatbed Scanning</h4>
                    <p className="text-sm text-zinc-600 mb-2">{pricingData.photoScanning.flatbed.description}</p>
                    <p className="text-sm text-zinc-600 mb-3">Max size: {pricingData.photoScanning.flatbed.maxSize}</p>
                    <PricingTable items={pricingData.photoScanning.flatbed.pricing} />
                  </div>
                </div>
              </PricingCard>
            </div>

            {/* Specialised Scanning */}
            <div id="specialised-scanning" className="scroll-mt-32">
              <PricingCard title="Specialised Scanning Services" cardId="specialised-scanning">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-3">Negative Scanning</h4>
                    <PricingTable items={pricingData.negativeScanning} />
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-100">
                    <h4 className="font-medium text-zinc-900 mb-3">Slide Scanning</h4>
                    <PricingTable items={pricingData.slideScanning} />
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-100">
                    <h4 className="font-medium text-zinc-900 mb-3">Document Scanning</h4>
                    <PricingTable items={pricingData.documentScanning} />
                  </div>
                </div>
              </PricingCard>
            </div>

            {/* Conservation Services */}
            <div id="conservation" className="scroll-mt-32">
              <PricingCard title="Conservation & Consultation Services" cardId="conservation">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-3">Cleaning & Conservation</h4>
                    <PricingTable items={pricingData.conservationServices.cleaning} showDescription={true} />
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-100">
                    <h4 className="font-medium text-zinc-900 mb-3">Consultation Services</h4>
                    <PricingTable items={pricingData.conservationServices.consultation} />
                  </div>
                </div>
              </PricingCard>
            </div>

            {/* Additional Services */}
            <div id="additional-services" className="scroll-mt-32">
              <PricingCard title="Additional Services & Handling" cardId="additional-services">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-3">Delicate Items</h4>
                    <PricingTable items={pricingData.fragileItemFees} />
                  </div>

                  <div className="pt-4 border-t border-zinc-100">
                    <h4 className="font-medium text-zinc-900 mb-3">Album Handling</h4>
                    <PricingTable items={pricingData.albumHandling} />
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-100">
                    <h4 className="font-medium text-zinc-900 mb-3">Digital Services</h4>
                    <PricingTable items={pricingData.additionalServices} />
                    <div className="mt-4 pt-4 border-t border-zinc-100">
                      <div className="space-y-3">
                        <div className="flex justify-between items-start py-2">
                          <div className="flex-1">
                            <div className="font-medium text-zinc-900">{pricingData.fileManagement.customDocumentation.service}</div>
                            <div className="text-sm text-zinc-600 mt-1">{pricingData.fileManagement.customDocumentation.description}</div>
                          </div>
                          <div className="text-right ml-4">
                            <div className="font-semibold text-zinc-900">${pricingData.fileManagement.customDocumentation.priceRange}</div>
                            <div className="text-sm text-zinc-600">{pricingData.fileManagement.customDocumentation.unit}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PricingCard>
            </div>

            {/* Delivery Options */}
            <div id="delivery" className="scroll-mt-32">
              <PricingCard title="Delivery & Storage Options" cardId="delivery">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-3">Digital Delivery</h4>
                    <PricingTable items={pricingData.deliveryOptions.digital} />
                    <div className="mt-4 p-3 bg-zinc-50 rounded-lg">
                      <p className="text-sm text-zinc-600 italic">{pricingData.deliveryOptions.note}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-100">
                    <h4 className="font-medium text-zinc-900 mb-3">Physical Delivery</h4>
                    <PricingTable items={pricingData.deliveryOptions.physical} />
                  </div>
                </div>
              </PricingCard>
            </div>

            {/* Terms & Quality */}
            <div id="terms" className="scroll-mt-32">
              <PricingCard title="Terms, Quality & Guarantees" cardId="terms">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-3">Payment Terms</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-zinc-600">{pricingData.terms.payment.deposit}</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-zinc-600">{pricingData.terms.payment.due}</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-zinc-600">{pricingData.terms.payment.methods}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-100">
                    <h4 className="font-medium text-zinc-900 mb-3">Turnaround Times</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Standard projects:</span>
                        <span className="font-medium text-zinc-900">{pricingData.terms.turnaround.standard}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Large projects:</span>
                        <span className="font-medium text-zinc-900">{pricingData.terms.turnaround.large}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Conservation work:</span>
                        <span className="font-medium text-zinc-900">{pricingData.terms.turnaround.conservation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">Rush service:</span>
                        <span className="font-medium text-zinc-900">{pricingData.terms.turnaround.rush}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-zinc-100">
                    <h4 className="font-medium text-zinc-900 mb-3">Quality Guarantee</h4>
                    <div className="space-y-3">
                      {pricingData.terms.quality.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-zinc-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </PricingCard>
            </div>


            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-zinc-100 p-8 rounded-2xl">
                <h3 className="font-display text-2xl text-zinc-900 mb-4">
                  Ready to preserve your memories?
                </h3>
                <p className="text-lg text-zinc-600 mb-6 max-w-2xl mx-auto">
                  Contact us for a free consultation and personalised quote for your collection. We'll assess your items and provide a detailed treatment plan.
                </p>
                <Button href="#contact" size="lg">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
