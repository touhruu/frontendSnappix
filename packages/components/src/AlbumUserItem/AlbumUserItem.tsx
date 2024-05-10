import { Box } from '@mui/material';
import {
  AlbumWrapper,
  Card,
  CardAlbum,
  CardShadow,
  WrapperCard,
  WrapperCardAlbum,
} from './AlbumUserItem.style';

export const AlbumUserItem = () => {
  return (
    <AlbumWrapper>
      <Box fontSize={32} color={'white'} fontWeight={'bold'} pt={1} pb={2}>
        Albums
      </Box>
      <WrapperCardAlbum>
        <WrapperCard>
          <Card>
            <CardShadow />
            <CardAlbum>
              <img src="https://i.redd.it/v1y1km8hyw5c1.jpeg" />
            </CardAlbum>
            <p>Название</p>
          </Card>
          <Box color={'#ffffffba'} fontSize={16} fontWeight={'bold'} pt={1}>
            Your album title
          </Box>
          <Box color={'#ffffff57'} fontSize={12} pt={0.5}>
            2.5k photos
          </Box>
        </WrapperCard>
      </WrapperCardAlbum>
    </AlbumWrapper>
  );
};
