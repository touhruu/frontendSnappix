import { FC } from 'react';
import { AvatarGradientWrapper, AvatarWrapper } from './Avatar.style';

export interface AvatarProps {
  miniature?: boolean;
}

export interface AvatarStyleProps {
  miniature?: boolean;
}

export const Avatar: FC<AvatarProps> = ({ miniature = false }) => {
  return (
    <AvatarGradientWrapper miniature={miniature}>
      <AvatarWrapper miniature={miniature} />
    </AvatarGradientWrapper>
  );
};
