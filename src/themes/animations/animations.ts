import { keyframes } from 'styled-components';

export const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ScaleAnimation = keyframes`  
  from {transform: scaleY(1); }
  to { transform: scaleY(1.1); }
`;
