export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="w-full bg-black text-white" style={{ minHeight: '300px' }} id="footer">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4 tracking-wider">
              NOMAD
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Design minimalista e funzionale.
              Creiamo esperienze digitali che lasciano il segno.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold mb-6 tracking-wider uppercase">Navigazione</h4>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('lavori')}
                className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light"
              >
                I Miei Lavori
              </button>
              <button
                onClick={() => scrollToSection('contatti')}
                className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light"
              >
                Contatti
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-6 tracking-wider uppercase">Contatti</h4>
            <div className="space-y-3 text-sm font-light">
              <p className="text-gray-400">info@nomad.com</p>
              <p className="text-gray-400">+39 123 456 7890</p>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 border border-white/20 hover:border-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
                >
                  <span className="text-xs">IG</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-white/20 hover:border-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
                >
                  <span className="text-xs">LI</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-white/20 hover:border-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
                >
                  <span className="text-xs">BE</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
            <p>© 2024 NOMAD. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
