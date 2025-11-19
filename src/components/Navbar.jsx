import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-white tracking-wider hover:opacity-70 transition-opacity duration-300"
          >
            NOMAD
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 uppercase"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 uppercase"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('lavori')}
              className="text-white text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 uppercase"
            >
              Lavori
            </button>
            <button
              onClick={() => scrollToSection('contatti')}
              className="text-white text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 uppercase"
            >
              Contatti
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:opacity-70 transition-opacity duration-300"
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
                className="text-white text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 text-left uppercase"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 text-left uppercase"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('lavori')}
                className="text-white text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 text-left uppercase"
              >
                Lavori
              </button>
              <button
                onClick={() => scrollToSection('contatti')}
                className="text-white text-sm font-light tracking-wide hover:opacity-70 transition-opacity duration-300 text-left uppercase"
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
