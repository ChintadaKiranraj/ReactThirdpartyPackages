// npm install react-slick
// npm install slick-carousel

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const Carousel = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const array = ['hai', 'kiranraj', 'kesava', 'prasanna', 'pentayya', 'bujji ']
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {array.map(each => (
          <div>
            <p>{each}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
