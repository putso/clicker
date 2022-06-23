import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { loadFromLocalStorage } from "./LocalStorage";
import { RootState } from "./store";

export interface ChangeStatus {
  id: string;
  completed: boolean;
}
export type ObjectsClick = {
  id: string;
  type: "circle" | "box";
  x: number;
  y: number;
  size: number;
};
interface ClickerState {
  objects: ObjectsClick[];
  score: number;
  window: {
    width: number;
    height: number;
  };
  radius: number;
}
const initialState: ClickerState = {
  objects: [],
  score: 0,
  window: {
    width: 600,
    height: 600,
  },
  radius: 400,
};
function getNewCords(state: ClickerState) {
  const center = state.window.width / 2;
  const r = state.radius;
  const randomCords = () => center + Math.floor((Math.random() - 0.5) * r);
  return { x: randomCords(), y: randomCords() };
}
const clickSlice = createSlice({
  name: "clicker",
  initialState: initialState,
  reducers: {
    setObjects(state, action: PayloadAction<ObjectsClick[]>) {
      state.objects = [...action.payload];
    },
    clickReducer(state, action: PayloadAction<string>) {
      const cords = getNewCords(state);
      state.objects = state.objects.filter((el) => el.id !== action.payload);
      state.objects.push({
        id: nanoid(),
        type: "box",
        ...cords,
        size: 20,
      });
    },
    updateScore(state, action: PayloadAction<number>) {
      state.score += action.payload;
    },
  },
});

export default clickSlice.reducer;
export const { setObjects, clickReducer, updateScore } = clickSlice.actions;
export const selectObjectsClick = (state: RootState) => state.cliker.objects;
export const selectScore = (state: RootState) => state.cliker.score;
