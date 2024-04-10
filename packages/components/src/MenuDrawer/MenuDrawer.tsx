import { Avatar, Box } from '@mui/material';
import { HeaderWrapper } from './MenuDrawer.style';
import { FC, ForwardRefExoticComponent, useState } from 'react';
// import MenuDrawerIcon from '../Images/MenuDrawer';

interface IMenuDrawerItemListProps {
  title: string;
  url: string;
  Image: () => React.ReactElement;
}

interface IMenuDrawerProps {
  menuItem: ForwardRefExoticComponent<any>;
  menuItemListDrawer: IMenuDrawerItemListProps[];
}

export const MenuDrawer: FC<IMenuDrawerProps> = ({
  menuItem,
  menuItemListDrawer,
}) => {
  const MenuItem = menuItem;
  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Box
        style={{
          transition: `${show ? '1.8s' : '1s'}`,
          width: `${show ? 'calc(16% - 10px)' : '70px'}`,
          position: 'static',
          // visibility: 'hidden',
          backgroundColor: '#1d1d24',
        }}
      ></Box>
      <Box
        style={{
          position: 'fixed',
          width: `${show ? '12%' : '70px'}`,
          transition: '1.5s',
        }}
      >
        <HeaderWrapper
          style={{
            width: `${show ? 'calc(100% + 20px)' : '70px'}`,
            transition: '1.5s',
            borderRight: '1px solid #343437',
          }}
        >
          <Box>
            {/* <Box display={'flex'} alignItems={'center'} pt={2}>
        <MenuDrawerIcon />
      </Box> */}
            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={`${show ? 'normal' : 'center'}`}
              height={77}
            >
              <Avatar alt="Vikacus" src="./avatars/ava1.jpg" />
              <p
                style={{
                  paddingLeft: `${show ? '15px' : '0px'}`,
                  color: 'white',
                  opacity: `${show ? 1 : 0}`,
                  transition: `${show ? '4s' : 'none'}`,
                  position: `${show ? 'static' : 'fixed'}`,
                  flexWrap: 'wrap',
                }}
              >
                Кусь
              </p>
            </Box>
            <Box display={'flex'} pt={1} flexDirection={'column'}>
              {menuItemListDrawer.map(({ url, Image, title }) => (
                <MenuItem
                  key={url}
                  to={url}
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: `${show ? 'normal' : 'center'}`,
                    transition: '2s',
                  }}
                >
                  <Box display={'flex'} alignItems={'center'} pt={1}>
                    <Box
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      width={40}
                      height={40}
                    >
                      <Image />
                    </Box>
                    <p
                      style={{
                        paddingLeft: `${show ? '15px' : '0px'}`,
                        color: 'white',
                        opacity: `${show ? 1 : 0}`,
                        transition: `${show ? '4s' : 'none'}`,
                        position: `${show ? 'static' : 'fixed'}`,
                        flexWrap: 'wrap',
                      }}
                    >
                      {title}
                    </p>
                  </Box>
                </MenuItem>
              ))}
            </Box>
          </Box>
          <Box
            width={40}
            height={40}
            borderRadius={50}
            bgcolor={'#1d1d24'}
            position={'absolute'}
            right={-20}
            top={'50%'}
            boxShadow={'0px 0px 10px 1px rgba(125, 50, 254, 0.2)'}
            onClick={onShow}
          ></Box>
        </HeaderWrapper>
      </Box>
    </>
  );
};
