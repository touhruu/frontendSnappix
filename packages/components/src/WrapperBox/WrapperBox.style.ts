import styled from 'styled-components';
import { WrapperBoxProps } from './WrapperBox';

export const CustomBox = styled.div<WrapperBoxProps>`
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};
  max-width: ${({ maxWidth }) =>
    typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`};
  min-width: ${({ minWidth }) =>
    typeof minWidth === 'string' ? minWidth : `${minWidth}px`};
  height: height;
  background-color: bgcolor;
  border-radius: 12px;
  border: '1px solid #343437';
  padding: 16px;
`;
