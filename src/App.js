import VideoPlayer from './components/VideoPlayer'
import Bargraph from './components/Recharts/Bargraph'
import Piecharts from './components/Recharts/Piecharts'
import Carousel from './components/ReactSlick'
import ReactPopUp from './components/ReactPopup'
import './App.css'

const App = () => (
  <div text-align="center">
    <VideoPlayer />
    <Bargraph />
    <Piecharts />
    <Carousel />
    <ReactPopUp />
  </div>
)

export default App
