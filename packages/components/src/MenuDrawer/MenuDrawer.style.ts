import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 12%;
  height: 100vh;
  background-color: #1d1d24;
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: 1.5s;
  box-sizing: border-box;

  * {
    margin: 0px;
  }

  svg {
    filter: brightness(5);
  }
`;
