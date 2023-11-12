import styled from 'styled-components';

export const WrapperSliderPicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 500px;
  position: relative;

  &:hover {
    .arrow {
      opacity: 0.6;
      transition: opacity 0.5s ease-in-out;
      /* display: none; */
    }
  }
`;

export const SliderPicture = styled.div`
  display: flex;
  width: 100%;
  background-color: pink;
  overflow: hidden;
  border-radius: 12px;
`;

export const SliderPictureItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  transition: transform 1s ease-in-out;
`;

export const BackgroundPictureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  /* transition: none; */
  opacity: 0.999;
`;

export const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
  transition: none;
`;

export const Picture = styled.img`
  width: 100%;
  object-fit: scale-down;
  max-height: 500px;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #9e9e9e;
  margin-left: 2.5px;
  margin-right: 2.5px;
  opacity: 0.5;
  cursor: pointer;
`;

export const ActiveDot = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #9e9e9e;
  margin-left: 2.5px;
  margin-right: 2.5px;
  cursor: pointer;
`;

export const LeftButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
  font-size: 48px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: calc(50% - 30px);
  left: 15px;
  user-select: none;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
`;

export const RightButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
  font-size: 48px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: calc(50% - 30px);
  right: 15px;
  user-select: none;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
`;
