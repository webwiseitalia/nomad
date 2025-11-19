import nomadabout from '../assets/nomadabout.png'

export default function About() {
  return (
    <section className="w-full bg-white relative" style={{ height: '130.21vw', minHeight: '800px', maxHeight: '2500px' }}>
      <img
        src={nomadabout}
        alt="About"
        className="w-full h-full object-cover"
      />
    </section>
  )
}
