import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@chakra-ui/react';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Box >
      <Slider {...settings}>
        <Box paddingLeft="30%" >
          <img src="https://wallpaperaccess.com/full/1496231.jpg" alt="" style={{ width: '70%', maxHeight: '600px', border:'10px solid black', margin:"20px" }} />
        </Box>
        <Box paddingLeft="30%">
          <img src="https://wallpaperaccess.com/full/1496231.jpg" alt="" style={{ width: '70%', maxHeight: '600px', border:'10px solid black' ,margin:"20px" }} />
        </Box>
        <Box paddingLeft="30%">
          <img src= "https://wallpaperaccess.com/full/1496231.jpg" alt="" style={{ width: '70%', maxHeight: '600px', border:'10px solid black',margin:"20px" }} />
        </Box>
      </Slider>
    </Box>
  );
};

export default Carousel;