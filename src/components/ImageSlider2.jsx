import img1 from '../assets/fotoslider/469437446_18364663891140496_6167524299705907516_n..jpg'
import img2 from '../assets/fotoslider/469545060_18364663909140496_4271507713033841304_n..jpg'
import img3 from '../assets/fotoslider/474900607_18371400769140496_5087983246868062422_n..jpg'
import img4 from '../assets/fotoslider/475165124_18371400757140496_1990877748014053407_n..jpg'
import img5 from '../assets/fotoslider/475223776_18371400778140496_7721415002339422630_n..jpg'
import img6 from '../assets/fotoslider/495047471_18383272567140496_5155374556171832609_n..jpg'
import img7 from '../assets/fotoslider/495060736_18383272540140496_2681478873604958130_n..jpg'
import img8 from '../assets/fotoslider/495071918_18383272528140496_4781778677263471662_n..jpg'
import img9 from '../assets/fotoslider/495213870_18383272525140496_3996050961112801310_n..jpg'
import img10 from '../assets/fotoslider/495376425_18383272495140496_7234412305892772006_n..jpg'
import img11 from '../assets/fotoslider/525138238_18394144597140496_4654441934990698022_n..jpg'
import img12 from '../assets/fotoslider/525192705_18394144621140496_6377509599729244824_n..jpg'
import img13 from '../assets/fotoslider/525580767_18394144606140496_2789879464969360031_n..jpg'

export default function ImageSlider2() {
  const slides = [
    { id: 1, src: img13 },
    { id: 2, src: img8 },
    { id: 3, src: img3 },
    { id: 4, src: img11 },
    { id: 5, src: img6 },
    { id: 6, src: img1 },
    { id: 7, src: img9 },
    { id: 8, src: img4 },
    { id: 9, src: img12 },
    { id: 10, src: img7 },
    { id: 11, src: img2 },
    { id: 12, src: img10 },
    { id: 13, src: img5 },
  ]

  return (
    <section className="w-full bg-white overflow-hidden" style={{ height: '28.65vw', minHeight: '300px', maxHeight: '550px' }}>
      <div className="relative w-full h-full">
        <div className="flex h-full animate-scroll-2">
          {slides.map((slide) => (
            <div
              key={`first-${slide.id}`}
              className="flex-shrink-0 h-full"
              style={{ width: '600px' }}
            >
              <img
                src={slide.src}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {slides.map((slide) => (
            <div
              key={`second-${slide.id}`}
              className="flex-shrink-0 h-full"
              style={{ width: '600px' }}
            >
              <img
                src={slide.src}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-2 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-7800px);
          }
        }

        .animate-scroll-2 {
          animation: scroll-2 55s linear infinite;
        }
      `}</style>
    </section>
  )
}
