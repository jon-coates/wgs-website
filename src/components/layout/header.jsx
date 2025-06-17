import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Button from '../ui/button'
import { siteConfig } from '../../config/siteConfig'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Main navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-display font-bold text-zinc-900">
              White Gloves Studio
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Navigation - Button + Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile CTA Button - visible on smaller screens */}
            <Button size="sm" className="text-sm px-3 py-2">
              Get Quote
            </Button>
            
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
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-brand-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header