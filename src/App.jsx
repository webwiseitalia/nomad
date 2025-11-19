import Navbar from './components/Navbar'
import Home from './components/Home'
import ImageSlider1 from './components/ImageSlider1'
import ImageSlider2 from './components/ImageSlider2'
import ImageSlider3 from './components/ImageSlider3'
import About from './components/About'
import MyWorks from './components/MyWorks'
import CreateYourIdea from './components/CreateYourIdea'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Home Section - 1920x1080 */}
      <div id="home">
        <Home />
      </div>

      {/* First Image Slider - 1920x550 */}
      <ImageSlider1 />

      {/* About Section - 1920x2500 */}
      <div id="about">
        <About />
      </div>

      {/* Second Image Slider - 1920x550 */}
      <ImageSlider2 />

      {/* My Works Section - 1920x1300 */}
      <div id="lavori">
        <MyWorks />
      </div>

      {/* Third Image Slider - 1920x550 */}
      <ImageSlider3 />

      {/* Create Your Idea Section - 1920x1080 */}
      <div id="contatti">
        <CreateYourIdea />
      </div>

      {/* Footer - 1920x500 */}
      <Footer />
    </div>
  )
}

export default App
