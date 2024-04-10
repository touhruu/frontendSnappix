import { Box } from '@mui/material';
import { FC } from 'react';

interface WrapperBoxProps {
  children?: React.ReactNode;
  width?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  height?: string | number;
  bgcolor?: string;
}

export const WrapperBox: FC<WrapperBoxProps> = ({
  children,
  width,
  height,
  bgcolor,
  maxWidth,
  minWidth,
}) => {
  return (
    <Box
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      height={height}
      bgcolor={bgcolor}
      borderRadius={'12px'}
      border={'1px solid #343437'}
      p={2}
    >
      {children}
    </Box>
  );
};
