import nomadlavori from '../assets/nomadlavori.png'

export default function MyWorks() {
  return (
    <section className="w-full bg-white relative" style={{ height: '67.71vw', minHeight: '600px', maxHeight: '1300px' }}>
      <img
        src={nomadlavori}
        alt="I miei lavori"
        className="w-full h-full object-cover"
      />
    </section>
  )
}
