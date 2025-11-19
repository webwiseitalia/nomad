import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      // Se lo scroll supera l'altezza della finestra (home), cambia colore
      setIsScrolled(scrollPosition > windowHeight - 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 backdrop-blur-lg z-50 border-b shadow-lg transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 border-black/10'
        : 'bg-white/10 border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className={`text-2xl font-bold tracking-wider hover:opacity-70 transition-all duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            NOMAD
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-bold tracking-wide hover:opacity-70 transition-all duration-300 uppercase ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-bold tracking-wide hover:opacity-70 transition-all duration-300 uppercase ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('lavori')}
              className={`text-sm font-bold tracking-wide hover:opacity-70 transition-all duration-300 uppercase ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Lavori
            </button>
            <button
              onClick={() => scrollToSection('contatti')}
              className={`text-sm font-bold tracking-wide hover:opacity-70 transition-all duration-300 uppercase ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Contatti
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden hover:opacity-70 transition-all duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-bold tracking-wide hover:opacity-70 transition-all duration-300 text-left uppercase ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-bold tracking-wide hover:opacity-70 transition-all duration-300 text-left uppercase ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('lavori')}
                className={`text-sm font-bold tracking-wide hover:opacity-70 transition-all duration-300 text-left uppercase ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                Lavori
              </button>
              <button
                onClick={() => scrollToSection('contatti')}
                className={`text-sm font-bold tracking-wide hover:opacity-70 transition-all duration-300 text-left uppercase ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                Contatti
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
