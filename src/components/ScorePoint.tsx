import { motion, useIsPresent, usePresence } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";
const StyledScorePoint = styled(motion.div)<{ x: number; y: number }>`
  position: absolute;
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x + 25}px`};
  z-index: 10;
`;
const ScorePoint: FC<{ x: number; y: number,isPresent:boolean }> = ({ x, y, }) => {
    const isPresent = useIsPresent();
    console.log('isPresent', isPresent);
    
    const animate = {
        initial: 'hidden',
        animate: isPresent? 'hidden': 'out',
        variants: {
            hidden: { scale: 1, opacity: 1,display: 'none'},
            out: { translateY: -100, zIndex: 20, opacity: 0, display: 'block'},
          },
          transition:{ duration: 1 }
    }
  return (
    <StyledScorePoint
      x={x}
      y={y}
      id="ScorePoint"
      {...animate}
    >
      +10
    </StyledScorePoint>
  );
};

export default ScorePoint;
