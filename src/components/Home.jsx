import nomadbackhero from '../assets/nomadbackhero.png'
import nomadlogowhite from '../assets/nomadlogowhite.png'

export default function Home() {
  const scrollToContatti = () => {
    const element = document.getElementById('contatti')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full h-screen bg-white relative">
      <img
        src={nomadbackhero}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 gap-12">
        <img
          src={nomadlogowhite}
          alt="Nomad Logo"
          className="max-w-4xl h-auto object-contain"
        />
        <button
          onClick={scrollToContatti}
          className="bg-white text-black px-16 py-5 text-base font-extrabold uppercase tracking-widest hover:bg-black hover:text-white border-2 border-white transition-all duration-300 rounded-full shadow-lg hover:shadow-2xl hover:scale-105"
        >
          CREA
        </button>
      </div>
    </section>
  )
}
