import React from 'react'
import {Image} from 'antd'
import { WrapperSliderStyle } from './style';

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
        <WrapperSliderStyle {...settings}>
          {arrImage.map((image) => {
            return (
                <Image key={image} src={image} alt='slider' preview={false} style={{width: '100%'}} />
            )
          })}
        </WrapperSliderStyle>
      );
}

export default SliderComponent