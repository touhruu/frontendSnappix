//type and interface
import { IAuthData } from './types/auth';
import { IRegistrationData } from './types/registration';
//components
import { Header } from './Header/Header';
import { MenuDrawer } from './MenuDrawer/MenuDrawer';
import { PostSummary } from './PostSummary/PostSummary';
import { AuthForm } from './AuthForm/AuthForm';
//icons
import FollowersIcon from './Images/Followers';
import { FriendsIcon } from './Images/Friends';
import HomeIcon from './Images/Home';
import MenuIcon from './Images/Menu';
import MessageIcon from './Images/Message';
import NotificationIcon from './Images/Notification';
import StoreIcon from './Images/Store';
import VideoIcon from './Images/Video';
import { theme } from './theme';
import { LabTabs } from './LabTabs/LabTabs';
import { Avatar } from './Avatar/Avatar';
import { AboutMe } from './AboutMe/AboutMe';
import { WrapperBox } from './WrapperBox/WrapperBox';
import { StoriesPersonalPage } from './StoriesPersonalPage/StoriesPersonalPage';
import { CustomTabPanel } from './CustomTabPanel/CustomTabPanel';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';
import { AlbumUser } from './AlbumUsers/AlbumUser';

export {
  AuthForm,
  Header,
  PostSummary,
  HomeIcon,
  VideoIcon,
  StoreIcon,
  FollowersIcon,
  MenuIcon,
  MessageIcon,
  NotificationIcon,
  MenuDrawer,
  FriendsIcon,
  theme,
  LabTabs,
  Avatar,
  AboutMe,
  WrapperBox,
  StoriesPersonalPage,
  CustomTabPanel,
  ProfileHeader,
  AlbumUser,
};
export type { IAuthData, IRegistrationData };
