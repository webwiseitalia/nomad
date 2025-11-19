import Home from './components/Home'
import ImageSlider from './components/ImageSlider'
import About from './components/About'
import MyWorks from './components/MyWorks'
import CreateYourIdea from './components/CreateYourIdea'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Home Section - 1920x1080 */}
      <Home />

      {/* First Image Slider - 1920x550 */}
      <ImageSlider />

      {/* About Section - 1920x2500 */}
      <About />

      {/* Second Image Slider - 1920x550 */}
      <ImageSlider autoPlay={true} interval={5000} />

      {/* My Works Section - 1920x1300 */}
      <MyWorks />

      {/* Third Image Slider - 1920x550 */}
      <ImageSlider autoPlay={true} interval={6000} />

      {/* Create Your Idea Section - 1920x1080 */}
      <CreateYourIdea />

      {/* Footer - 1920x500 */}
      <Footer />
    </div>
  )
}

export default App
