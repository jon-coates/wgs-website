import Footer from "./components/layout/footer"
import Header from "./components/layout/header"
import About from "./components/sections/about"
import Contact from "./components/sections/contact"
import Hero from "./components/sections/hero"
import Services from "./components/sections/services"

function App() {
  return (
    <div className="min-h-screen bg-grey-50">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App