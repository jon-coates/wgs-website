import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Button from '../ui/button'
import { siteConfig } from '../../config/siteConfig'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b-1 border-zinc-200 sticky top-0 z-50">
      {/* Main navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-base md:text-2xl font-display font-bold text-zinc-900">
              White Gloves Studio
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 font-display">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand-600 font-medium transition-colors"
              >
                {item.name}
              </a>
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
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <div className="text-2xl font-display font-bold text-zinc-900">
                  White Gloves Studio
                </div>
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-2xl text-gray-700 hover:text-brand-600 font-display py-3 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
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