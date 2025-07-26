import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../ui/button'
import { siteConfig } from '../../config/siteConfig'
import useNavigation from '../../hooks/useNavigation'
import WgsLogo from '../../../public/images/wgs-logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { navigateToSection } = useNavigation()
  const location = useLocation()

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white border-b-1 border-zinc-200 sticky top-0 z-50">
      {/* Main navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-80 transition-opacity" onClick={handleLogoClick}>
              <img src={WgsLogo} alt="White Gloves Studio" className="h-8 md:h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 font-display">
            {siteConfig.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateToSection(item.href)}
                className="text-gray-700 hover:text-brand-600 font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Navigation - Menu Toggle */}
          <div className="lg:hidden flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-brand-600 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50">
            <div className="flex flex-col h-full">
              {/* Mobile menu header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
                <Link to="/" className="hover:opacity-80 transition-opacity" onClick={handleLogoClick}>
                  <img src={WgsLogo} alt="White Gloves Studio" className="h-8 w-auto" />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-gray-600 hover:text-brand-600 hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Mobile menu content */}
              <div className="flex-1 flex flex-col justify-between px-6 py-8">
                {/* Navigation links - centered */}
                <div className="flex flex-col space-y-6">
                  {siteConfig.navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        setIsMenuOpen(false);
                        navigateToSection(item.href);
                      }}
                      className="text-2xl text-gray-700 hover:text-brand-600 font-display py-3 transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                
                {/* Mobile CTA Button - pushed to bottom */}
                <div>
                  <Button size="lg" className="w-full">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header