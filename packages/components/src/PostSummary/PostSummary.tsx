import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Slider } from '../SliderPicture/SliderPicture';
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
  colors,
} from '@mui/material';
import { theme } from '../theme';
import { MessagePost } from '../Images/MessagePost';
import { ReplyIcon } from '../Images/ReplyIcon';
import { Avatar } from '../Avatar/Avatar';
import { FC } from 'react';

const imagePost = [
  'https://gamefans.ru/uploads/posts/2022-09/tower-of-fantasy-information-ruin-a-01.jpg',
  'http://squarefaction.ru/files/game/17000/gallery/20220427150230_1a79b49f.jpg',
  'http://squarefaction.ru/files/game/17000/gallery/20220427150221_a41c3b5d.jpg',
];

interface PostSummaryProps {
  title: string;
  body: string;
}

export const PostSummary: FC<PostSummaryProps> = ({ title, body }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 300,
        maxWidth: 650,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '12px',
        border: '1px solid #343437',
        mb: 2,
      }}
    >
      <CardContent sx={{ alignItems: 'center', gap: 1, display: 'flex' }}>
        <Box position={'relative'}>
          <Avatar miniature={true} />
        </Box>
        <Typography fontWeight="lg" sx={{ color: '#cfcfcf' }}>
          {title}
        </Typography>
        <IconButton
          sx={{
            ml: 'auto',
            color: colors.grey[500],
            '&:hover': { backgroundColor: '#181820', color: colors.grey[500] },
          }}
        >
          <MoreHoriz />
        </IconButton>
      </CardContent>
      <Typography sx={{ color: '#cfcfcf', pr: 2, pl: 2, pb: 1 }}>
        {body}
      </Typography>
      <Box pr={2} pl={2}>
        <Slider arrPicture={imagePost} />
      </Box>
      <CardContent sx={{ display: 'flex', alignItems: 'center', mx: -1 }}>
        <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
          <IconButton
            sx={{
              '&:hover': { backgroundColor: '#181820' },
              width: 40,
              height: 40,
            }}
          >
            <Checkbox
              {...label}
              icon={<FavoriteBorder sx={{ color: colors.grey[500] }} />}
              checkedIcon={<Favorite sx={{ color: colors.red[500] }} />}
            />
          </IconButton>
          <IconButton
            sx={{
              '&:hover': { backgroundColor: '#181820' },
              width: 40,
              height: 40,
            }}
          >
            <MessagePost />
          </IconButton>
          <IconButton
            sx={{
              '&:hover': { backgroundColor: '#181820' },
              width: 40,
              height: 40,
            }}
          >
            <ReplyIcon />
          </IconButton>
        </Box>
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}
        />
        <Box sx={{ width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
          <IconButton
            sx={{
              '&:hover': { backgroundColor: '#181820' },
              width: 40,
              height: 40,
            }}
          >
            <Checkbox
              {...label}
              icon={<BookmarkBorderIcon sx={{ color: colors.grey[500] }} />}
              checkedIcon={<BookmarkIcon sx={{ color: colors.amber[800] }} />}
            />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
