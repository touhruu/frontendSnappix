import { Box } from '@mui/material';
import { LabTabs } from '../LabTabs/LabTabs';
import { Avatar } from '../Avatar/Avatar';
import { FC } from 'react';
import {
  AvatarWrapper,
  ProfileHeaderWrapper,
  TabsWrapper,
  UserNameWrapper,
} from './ProfileHeader.style';

interface tabProps {
  value: number;
  label: string;
}

interface ProfileHeaderProps {
  onTabSelected: (value: number) => void;
  tabs: tabProps[];
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({
  onTabSelected,
  tabs,
}) => {
  return (
    <>
      <ProfileHeaderWrapper>
        <AvatarWrapper>
          <Avatar />
          <UserNameWrapper>Victoria Pervomayskaya</UserNameWrapper>
        </AvatarWrapper>
      </ProfileHeaderWrapper>
      <TabsWrapper>
        <LabTabs onTabSelected={onTabSelected} tabs={tabs} />
      </TabsWrapper>
    </>
  );
};
