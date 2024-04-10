import styled from 'styled-components';
import { AvatarStyleProps } from './Avatar';
import { device } from '../DeviceSize/deviceSize';

export const AvatarGradientWrapper = styled.div<AvatarStyleProps>`
  /* width: ${({ miniature }) => (miniature ? 40 : 180)}px;
  height: ${({ miniature }) => (miniature ? 40 : 180)}px; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    width: ${({ miniature }) => (miniature ? 40 : 150)}px;
    height: ${({ miniature }) => (miniature ? 40 : 150)}px;
  }

  @media ${device.laptopL} {
    width: ${({ miniature }) => (miniature ? 40 : 180)}px;
    height: ${({ miniature }) => (miniature ? 40 : 180)}px;
  }

  &:before {
    content: '';
    position: absolute;
    /* width: ${({ miniature }) => (miniature ? 42 : 182)}px;
    height: ${({ miniature }) => (miniature ? 42 : 182)}px; */
    margin: -1px;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      #60ecfc 0%,
      #60ecfc 25%,
      #7951c0 50%,
      #7951c0 75%,
      #7951c0 100%
    );
    @media ${device.tablet} {
      width: ${({ miniature }) => (miniature ? 42 : 152)}px;
      height: ${({ miniature }) => (miniature ? 42 : 152)}px;
    }

    @media ${device.laptopL} {
      width: ${({ miniature }) => (miniature ? 42 : 182)}px;
      height: ${({ miniature }) => (miniature ? 42 : 182)}px;
    }
  }
`;

export const AvatarWrapper = styled.div<AvatarStyleProps>`
  position: absolute;
  border-radius: 50%;
  background-color: #212128;
  /* width: ${({ miniature }) => (miniature ? 38 : 178)}px;
  height: ${({ miniature }) => (miniature ? 38 : 178)}px; */

  @media ${device.tablet} {
    width: ${({ miniature }) => (miniature ? 38 : 148)}px;
    height: ${({ miniature }) => (miniature ? 38 : 148)}px;
  }

  @media ${device.laptopL} {
    width: ${({ miniature }) => (miniature ? 38 : 178)}px;
    height: ${({ miniature }) => (miniature ? 38 : 178)}px;
  }
`;
