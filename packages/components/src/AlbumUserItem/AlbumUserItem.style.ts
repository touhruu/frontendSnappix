import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperCardAlbum = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  width: 240px;
  height: 280px;
  overflow: hidden;
  border-radius: 12px;
`;

export const CardAlbum = styled.div`
  transition-duration: 1s;

  img {
    width: 240px;
    height: 280px;
    object-fit: cover;
  }
`;

export const CardShadow = styled.div`
  width: 240px;
  height: 280px;
  border-radius: 12px;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.3);
  transition-duration: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  &:hover {
    transition-duration: 1s;
    position: absolute;
    opacity: 0;
  }

  &:hover + div {
    transform: scale(1.1);
    transition-duration: 1s;
    z-index: 1;
  }
`;
