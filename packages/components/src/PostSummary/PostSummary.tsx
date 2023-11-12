import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Slider } from '../SliderPicture/SliderPicture';
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { colors } from '@mui/material';
import { MessageIcon } from '../MessageIcon/MessageIcon';
import { ReplyIcon } from '../ReplyIcon/ReplyIcon';

const imagePost = [
  'https://gamefans.ru/uploads/posts/2022-09/tower-of-fantasy-information-ruin-a-01.jpg',
  'http://squarefaction.ru/files/game/17000/gallery/20220427150230_1a79b49f.jpg',
  'http://squarefaction.ru/files/game/17000/gallery/20220427150221_a41c3b5d.jpg',
];

export function PostSummary() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 300,
        maxWidth: 650,
        backgroundColor: '#1f1f27',
        borderRadius: '12px',
        border: '1px solid #343437',
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <CardContent
        orientation="horizontal"
        sx={{ alignItems: 'center', gap: 1 }}
      >
        <Box
          sx={{
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              m: '-2px',
              borderRadius: '50%',
              background:
                'linear-gradient(45deg, #60ecfc 0%,#60ecfc 25%,#7951c0 50%,#7951c0 75%,#7951c0 100%)',
            },
          }}
        >
          <Avatar
            size="sm"
            src="/static/logo.png"
            sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
          />
        </Box>
        <Typography fontWeight="lg" sx={{ color: '#cfcfcf' }}>
          Snappix
        </Typography>
        <IconButton
          variant="plain"
          color="neutral"
          size="sm"
          sx={{
            ml: 'auto',
            color: colors.grey[500],
            '&:hover': { backgroundColor: '#181820', color: colors.grey[500] },
          }}
        >
          <MoreHoriz />
        </IconButton>
      </CardContent>
      <Typography sx={{ color: '#cfcfcf' }}>
        My first post in Snappix...
      </Typography>
      <Slider arrPicture={imagePost} />
      <CardContent
        orientation="horizontal"
        sx={{ alignItems: 'center', mx: -1 }}
      >
        <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
          <IconButton
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ '&:hover': { backgroundColor: '#181820' } }}
          >
            <Checkbox
              {...label}
              icon={<FavoriteBorder sx={{ color: colors.grey[500] }} />}
              checkedIcon={<Favorite sx={{ color: colors.red[500] }} />}
            />
          </IconButton>
          <IconButton
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ '&:hover': { backgroundColor: '#181820' } }}
          >
            <MessageIcon />
          </IconButton>
          <IconButton
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ '&:hover': { backgroundColor: '#181820' } }}
          >
            <ReplyIcon />
          </IconButton>
        </Box>
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}
        />
        <Box sx={{ width: 0, display: 'flex', flexDirection: 'row-reverse' }}>
          <IconButton
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ '&:hover': { backgroundColor: '#181820' } }}
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
}
