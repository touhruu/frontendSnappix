import { FC, useEffect, useRef, useState } from 'react';
import {
  SliderPicture,
  SliderPictureItem,
  Picture,
  LeftButton,
  RightButton,
  WrapperSliderPicture,
  PictureWrapper,
  BackgroundPictureItem,
  Dot,
  ActiveDot,
} from './SliderPicture.style';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box } from '@mui/material';

interface IArrPictureProps {
  arrPicture: string[];
}

export const Slider: FC<IArrPictureProps> = ({ arrPicture }) => {
  const sliderElement = useRef<HTMLDivElement>(null);
  const [currentSlideIndex, setCurrentSliderIndex] = useState(0);

  const swapLeft = () => {
    if (sliderElement.current && currentSlideIndex < 0) {
      setCurrentSliderIndex((prev) => prev + 1);
    }
  };

  const swapRight = () => {
    if (sliderElement.current && currentSlideIndex > -(arrPicture.length - 1)) {
      setCurrentSliderIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (sliderElement.current) {
      sliderElement.current.style.transform = `translateX(calc(${currentSlideIndex} * 100%))`;
    }
  }, [currentSlideIndex]);

  const switchSlide = (index: number) => () => {
    setCurrentSliderIndex(-index);
  };

  return (
    <WrapperSliderPicture>
      {currentSlideIndex !== 0 && (
        <LeftButton onClick={swapLeft} className="arrow">
          <ArrowBackIosNewIcon />
        </LeftButton>
      )}
      <SliderPicture>
        <SliderPictureItem ref={sliderElement}>
          {arrPicture.map((elem) => (
            <BackgroundPictureItem style={{ backgroundImage: `url(${elem})` }}>
              <PictureWrapper>
                <Picture src={elem} />
              </PictureWrapper>
            </BackgroundPictureItem>
          ))}
        </SliderPictureItem>
      </SliderPicture>
      {currentSlideIndex !== -(arrPicture.length - 1) && (
        <RightButton onClick={swapRight} className="arrow">
          <ArrowForwardIosIcon />
        </RightButton>
      )}
      <Box display="flex" flexDirection="row" alignItems="center" mt={2}>
        {arrPicture.map((_, index) =>
          index === -currentSlideIndex ? (
            <ActiveDot />
          ) : (
            <Dot onClick={switchSlide(index)} />
          ),
        )}
      </Box>
    </WrapperSliderPicture>
  );
};
