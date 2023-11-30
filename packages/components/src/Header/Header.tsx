import { Avatar } from '@mui/material';
import { FC, ForwardRefExoticComponent, ReactElement } from 'react';
import {
  HeaderItem,
  HeaderItemWrapper,
  HeaderWrapper,
  LogoTitle,
  LogoWrapper,
  Picture,
  UserControlButton,
  UserControlPanel,
} from './Header.style';
import { FontsGlobalStyle } from '../global.style';

interface IHeaderProps {
  menuItem: ForwardRefExoticComponent<any>;
  menuItemList: { title: string; url: string }[];
}

export const Header: FC<IHeaderProps> = ({ menuItem, menuItemList }) => {
  const MenuItem = menuItem;
  return (
    <HeaderWrapper>
      <FontsGlobalStyle />
      {/* <HeaderItem>Пункт меню</HeaderItem> */}
      <HeaderItemWrapper>
        <LogoWrapper>
          <Picture src="/images/logo.svg"></Picture>
          <LogoTitle>Snappix</LogoTitle>
        </LogoWrapper>
      </HeaderItemWrapper>
      <HeaderItemWrapper>
        {menuItemList.map((item) => (
          <MenuItem to={item.url}>
            <HeaderItem>
              <Picture src="/images/home.svg"></Picture>
            </HeaderItem>
          </MenuItem>
        ))}
        {/* <HeaderItem>
          <Picture src="./images/home.svg"></Picture>
        </HeaderItem>
        <HeaderItem>
          <Picture src="./images/video.svg"></Picture>
        </HeaderItem>
        <HeaderItem>
          <Picture src="./images/store.svg"></Picture>
        </HeaderItem>
        <HeaderItem>
          <Picture src="./images/followers.svg"></Picture>
        </HeaderItem> */}
      </HeaderItemWrapper>
      <HeaderItemWrapper>
        <UserControlPanel>
          <UserControlButton>
            <Picture src="./images/menu.svg"></Picture>
          </UserControlButton>
          <UserControlButton>
            <Picture src="./images/message.svg"></Picture>
          </UserControlButton>
          <UserControlButton>
            <Picture src="./images/notification.svg"></Picture>
          </UserControlButton>
          <Avatar alt="Vikacus" src="./avatars/ava1.jpg" />
        </UserControlPanel>
      </HeaderItemWrapper>
    </HeaderWrapper>
  );
};
