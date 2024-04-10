import { Avatar } from '@mui/material';
import React, { FC, ForwardRefExoticComponent, useMemo } from 'react';
import {
  HeaderItem,
  HeaderItemWrapper,
  HeaderWrapper,
  LogoTitle,
  LogoWrapper,
  UserControlButton,
  UserControlPanel,
  WrapperIconSize,
} from './Header.style';
import { FontsGlobalStyle } from '../global.style';
import Logo from '../Images/Logo';

interface IMenuItemListProps {
  title: string;
  url: string;
  Image: () => React.ReactElement;
  selectSideMenu: string;
}

interface IHeaderProps {
  menuItem: ForwardRefExoticComponent<any>; //может принимать ref и передавать его дочернему компоненту
  menuItemList: IMenuItemListProps[];
}

export const Header: FC<IHeaderProps> = ({ menuItem, menuItemList }) => {
  const MenuItem = menuItem;

  const centerSideMenu = useMemo(
    () => menuItemList.filter((item) => item.selectSideMenu === 'center'),
    [menuItemList],
  );

  const rightSideCenter = useMemo(
    () => menuItemList.filter((item) => item.selectSideMenu === 'right'),
    [menuItemList],
  );

  return (
    <HeaderWrapper>
      <FontsGlobalStyle />
      <HeaderItemWrapper>
        <LogoWrapper>
          <WrapperIconSize>
            <Logo />
          </WrapperIconSize>
          <LogoTitle>Snappix</LogoTitle>
        </LogoWrapper>
      </HeaderItemWrapper>
      <HeaderItemWrapper>
        {centerSideMenu.map(({ url, Image }) => (
          <HeaderItem key={url}>
            <MenuItem to={url}>
              <Image></Image>
            </MenuItem>
          </HeaderItem>
        ))}
      </HeaderItemWrapper>
      <HeaderItemWrapper>
        <UserControlPanel>
          {rightSideCenter.map(({ url, Image }) => (
            <UserControlButton key={url}>
              <MenuItem to={url}>
                <Image />
              </MenuItem>
            </UserControlButton>
          ))}
          <Avatar alt="Vikacus" src="./avatars/ava1.jpg" />
        </UserControlPanel>
      </HeaderItemWrapper>
    </HeaderWrapper>
  );
};
