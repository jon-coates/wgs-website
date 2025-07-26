import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./components/layout/footer"
import Header from "./components/layout/header"
import About from "./components/sections/about"
import Contact from "./components/sections/contact"
import Hero from "./components/sections/hero"
import Services from "./components/sections/services"
import FAQ from "./components/sections/faq"
import PrivacyPolicy from "./components/sections/PrivacyPolicy"
import TermsOfService from "./components/sections/TermsOfService"
// import Pricing from "./components/sections/pricing"

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "White Gloves Studio",
  "description": "Professional conservation, digitisation, and collection management services for museums, galleries, and cultural institutions.",
  "url": "https://whiteglovesstudio.com",
  "logo": "https://whiteglovesstudio.com/favicon.svg",
  "image": "https://whiteglovesstudio.com/images/ogimage.png",
  "serviceType": [
    "Conservation Services",
    "Digitisation Services", 
    "Collection Management",
    "Archival Services",
    "Museum Services"
  ],
  "areaServed": "Australia",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Conservation and Digitisation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digitisation & Rehousing",
          "description": "Professional digitisation and archival rehousing services for photographs and documents"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Conservation Services",
          "description": "Expert conservation and preservation services for cultural heritage items"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Collection Assessment",
          "description": "Professional assessment and consultation for collection management"
        }
      }
    ]
  }
}

// Home page component
const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      {/* <Pricing /> */}
      <Contact />
      <FAQ />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-grey-50">
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App