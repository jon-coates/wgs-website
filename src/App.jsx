import Footer from "./components/layout/footer"
import Header from "./components/layout/header"
import Contact from "./components/sections/contact"
import Hero from "./components/sections/hero"
import Services from "./components/sections/services"

function App() {
  return (
    <div className="min-h-screen bg-grey-50">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App