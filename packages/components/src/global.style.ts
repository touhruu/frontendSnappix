import { createGlobalStyle } from 'styled-components';
// @ts-ignore
import Balloo from '../public/fonts/baloo-cyrillic.ttf';

export const FontsGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Balloo';
    src: url(${Balloo});
    font-weight: normal;
    font-style: normal;
}`;
