import nomadbackhero from '../assets/nomadbackhero.png'
import nomadlogowhite from '../assets/nomadlogowhite.png'

export default function Home() {
  return (
    <section className="w-full h-screen bg-white relative">
      <img
        src={nomadbackhero}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <img
          src={nomadlogowhite}
          alt="Nomad Logo"
          className="max-w-4xl h-auto object-contain"
        />
      </div>
    </section>
  )
}
