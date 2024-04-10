import { Box, Typography, useTheme } from '@mui/material';
import { WrapperBox } from '../WrapperBox/WrapperBox';
import { Avatar } from '../Avatar/Avatar';

export const StoriesPersonalPage = () => {
  const theme = useTheme();
  const usersStories = [0, 1, 2, 3, 4, 5];
  return (
    <WrapperBox minWidth={300} width={'100%'} bgcolor={'#1d1d24'}>
      <Typography
        fontSize={theme.typography.h3.fontSize}
        color={'white'}
        fontWeight={theme.typography.h3.fontWeight}
        pb={2}
        width={'100%'}
      >
        Stories
      </Typography>
      {usersStories.map((index) => (
        <Box display={'flex'} mb={2} key={index}>
          <Avatar miniature={true} />
          <Box display={'flex'} flexDirection={'column'} pl={2} width={'100%'}>
            <Typography color={'#fff'}>Karen Vikaryan</Typography>
            <Typography fontSize={10} color={'#9c9c9c'}>
              25 minutes ago
            </Typography>
          </Box>
        </Box>
      ))}
    </WrapperBox>
  );
};
