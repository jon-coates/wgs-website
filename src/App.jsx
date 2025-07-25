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