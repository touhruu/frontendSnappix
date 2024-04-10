import { Box, Typography, useTheme } from '@mui/material';
import { WrapperBox } from '../WrapperBox/WrapperBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

export const AboutMe = () => {
  const theme = useTheme();
  return (
    <WrapperBox bgcolor={'#1d1d24'}>
      <Box
        fontSize={theme.typography.h3.fontSize}
        color={'white'}
        fontWeight={theme.typography.h3.fontWeight}
      >
        About Me
      </Box>
      <Box display={'flex'} color={'white'} pt={2}>
        <HomeIcon />
        <Typography pl={2}>Live in London</Typography>
      </Box>
      <Box display={'flex'} color={'white'} pt={2}>
        <FavoriteBorderIcon />
        <Typography pl={2}>2245k followers</Typography>
      </Box>
      <Box display={'flex'} color={'white'} pt={2}>
        <DynamicFeedIcon />
        <Typography pl={2}>515 posts</Typography>
      </Box>
    </WrapperBox>
  );
};
