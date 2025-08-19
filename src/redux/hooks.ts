import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: <TSelected>(
  selector: (state: RootState) => TSelected
) => TSelected = useSelector;
