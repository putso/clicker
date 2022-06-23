import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import styled from "styled-components";
import {
  selectObjectsClick,
  ObjectsClick,
  clickReducer,
  setObjects,
} from "../store/clickerSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import ClickList from "./ClickList";
import Score from "./Score";
const StyledClicker = styled.div`
  border: 1px solid #464646;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  user-select: none;
`;
const ClickArea = styled.div`
  flex-grow: 1;
  position: relative;
`;
const ClickItem = styled(motion.div)<ObjectsClick>`
  position: absolute;
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x}px`};
  width: 100px;
  height: 100px;
  background-color: black;
  border: 1px solid pink;
`;
const Clicker = () => {
  console.log("update");
  const dispatch = useAppDispatch();
  const clickItems = useAppSelector(selectObjectsClick);
  useEffect(() => {
    const size = 50;
    const initalObjectsClick: ObjectsClick[] = [1, 2, 3].map((el) => {
      return {
        id: nanoid(),
        type: "box",
        x: Math.floor(Math.random() * 50),
        y: Math.floor(Math.random() * 50),
        size,
      };
    });
    dispatch(setObjects(initalObjectsClick));
  }, []);
  return (
    <StyledClicker>
      <Score />
      <ClickArea id="123">
        <ClickList/>
      </ClickArea>
    </StyledClicker>
  );
};

export default Clicker;
