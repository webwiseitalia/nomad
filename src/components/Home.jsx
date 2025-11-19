import nomadbackhero from '../assets/nomadbackhero.png'

export default function Home() {
  return (
    <section className="w-full h-screen bg-white relative">
      <img
        src={nomadbackhero}
        alt="Background"
        className="w-full h-full object-cover"
      />
    </section>
  )
}
