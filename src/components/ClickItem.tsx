import { motion, useIsPresent, usePresence } from "framer-motion";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { ObjectsClick, clickReducer, updateScore } from "../store/clickerSlice";
import { useAppDispatch } from "../store/store";
import ScorePoint from "./ScorePoint";
const StyledClickItem = styled(motion.div)<ObjectsClick>`
  position: absolute;
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x}px`};
  width: 100px;
  height: 100px;
  background-color: black;
  border: 1px solid pink;
  user-select: none;
  z-index: 9;
`;
// const ScorePoint = styled(motion.div)<{ x: number; y: number }>`
//   position: absolute;
//   top: ${(props) => `${props.y}px`};
//   left: ${(props) => `${props.x + 25}px`};
//   z-index: 10;
// `;
const ClickItem: FC<ObjectsClick> = (value) => {
  const dispatch = useAppDispatch();
  const [isPresent,setPresent] = useState(true);
  const clickHandler = () => {
    console.log("click");
    if (isPresent) {
      dispatch(clickReducer(value.id));
      dispatch(updateScore(10));
      setPresent(false);
    }
  };
  return (
    <>
      <StyledClickItem
        {...value}
        key={value + "123123213"}
        onMouseDown={clickHandler}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ opacity: 0, scale: 1.1, background: "green", zIndex: -1 }}
        transition={{ duration: 0.5 }}
      ></StyledClickItem>
      <ScorePoint x={value.x} y={value.y} isPresent/>
      {/* <ScorePoint
          x={value.x}
          y={value.y}
          id= 'ScorePoint'
          initial={{ scale: 0, translateY: -50,opacity: 1 }}
          animate={{ scale: 0,  translateY: -50,opacity: 1 }}
          exit={{ translateY: -100, zIndex: 20,opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          +10
        </ScorePoint> */}
    </>
  );
};

export default ClickItem;
