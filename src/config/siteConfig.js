// src/config/siteConfig.js

export const siteConfig = {
    business: {
      name: 'White Gloves Studio',
      tagline: 'Preserving Your Memories with Care',
      description: 'Expert conservation, digitisation, and archival services for institutions, private collectors and family.',
      location: {
        city: 'Brisbane',
        state: 'Queensland',
        country: 'Australia'
      }
    },
  
    contact: {
      phone: '+61 0421 850 899',
      email: 'hello@whiteglovesstudio.com.au',
      address: {
        line1: '123 Heritage Street',
        line2: 'Brisbane, QLD 4000',
        country: 'Australia'
      },
    },
  
    navigation: [
      { name: 'Services', href: '#services' },
      { name: 'About', href: '#about' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Contact', href: '#contact' },
      { name: 'FAQ', href: '#faq' }
    ],
  
    socialLinks: [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/company/heritage-conservation',
        icon: 'LinkedIn'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/heritage_conservation',
        icon: 'Instagram'
      },
      {
        name: 'Facebook',
        url: 'https://facebook.com/heritage.conservation',
        icon: 'Facebook'
      }
    ],
  
    
  
    // Call-to-action text
    cta: {
      primary: 'Book a free consultation',
      secondary: 'Get Quote',
      contact: 'Contact Us Today'
    }
  }