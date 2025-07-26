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
  "description": "Don't be the last person to see your family's photos. Professional photo scanning, digitisation and preservation services to protect your precious memories.",
  "url": "https://whiteglovesstudio.com",
  "logo": "https://whiteglovesstudio.com/favicon.svg",
  "image": "https://whiteglovesstudio.com/images/ogimage.png",
  "serviceType": [
    "Photo Scanning Services",
    "Family Photo Digitisation", 
    "Photo Preservation",
    "Film Scanning",
    "Photo Restoration"
  ],
  "areaServed": "Australia",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Family Photo Scanning and Preservation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fast Feed Bulk Photo Scanning",
          "description": "Quick batch scanning of photo collections with professional colour correction and automatic scanning of photo backs"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Film & Negative Scanning",
          "description": "Expert handling of delicate negatives, old film, and fragile photos with conservation check-up included"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Photo Conservation & Repairs",
          "description": "Tear repair, stain reduction, and stabilising deteriorating photos so they last for generations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Archival Storage & Rehousing",
          "description": "Custom storage solutions with proper archival materials to keep your collection safe and organised"
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