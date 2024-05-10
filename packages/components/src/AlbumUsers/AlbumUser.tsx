import { Box } from '@mui/material';
import { WrapperBox } from '../WrapperBox/WrapperBox';
import { AlbumUserItem } from '../AlbumUserItem/AlbumUserItem';

export const AlbumUser = () => {
  return (
    <Box pt={2} pb={2}>
      <WrapperBox width={'100'}>
        <AlbumUserItem />
      </WrapperBox>
    </Box>
  );
};
