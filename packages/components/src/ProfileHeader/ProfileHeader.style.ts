import styled from 'styled-components';
import { device } from '../DeviceSize/deviceSize';

export const ProfileHeaderWrapper = styled.div`
  background-color: #1d1d24;
  width: 100%;
  border-radius: 12px 12px 0px 0px;
  height: 300px;
  position: relative;
`;

export const TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 80px;
  border-radius: 0 0 12px 12px;
  border: 3px solid #1d1d24;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  left: 65px;
  bottom: -50px;
`;

export const UserNameWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 26px;
  font-weight: bold;
  padding-left: 48px;
`;
