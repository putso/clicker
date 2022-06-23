import { AnimatePresence } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { selectObjectsClick } from "../store/clickerSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import ClickItem from "./ClickItem";
const ClickArea = styled.div`
  flex-grow: 1;
  position: relative;
`;
const ClickList = () => {
  const dispatch = useAppDispatch();
  const clickObjects = useAppSelector(selectObjectsClick);
  return (
    <ClickArea>
      <AnimatePresence>
        {clickObjects.map((el) => {
          return <ClickItem key={el.id} {...el}></ClickItem>;
        })}
      </AnimatePresence>
    </ClickArea>
  );
};

export default ClickList;
