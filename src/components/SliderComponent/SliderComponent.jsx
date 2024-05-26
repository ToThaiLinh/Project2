import React from 'react'
import Slider from "react-slick";
import {Image} from 'antd'

const SliderComponent = ({arrImage}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 1000
      };

    
      return (
        <Slider {...settings}>
          {arrImage.map((image) => {
            return (
                <Image key={image} src={image} alt='slider' preview={false} style={{width: '100%'}} />
            )
          })}
        </Slider>
      );
}

export default SliderComponent