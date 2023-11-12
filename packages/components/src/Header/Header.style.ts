import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #1d1d24;
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
`;

export const HeaderItemWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LogoTitle = styled.p`
  font-family: 'Balloo';
  margin-left: 5px;
  font-size: 22px;
  color: #7951c0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #673ab7;
`;

export const HeaderItem = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #673ab7;
  padding: 5px 12px 5px 12px;
  filter: brightness(5);
  box-sizing: border-box;
  border: 2px solid transparent;

  &:hover {
    filter: none;
    border-bottom: 2px solid #7951c0;
  }
`;

export const Picture = styled.img`
  width: 28px;
  color: white;
`;

export const UserControlPanel = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
`;

export const UserControlButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333339;
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    max-width: 20px;
  }
`;
