import { useSelector } from "react-redux";
import { RootState } from "~/store";

export const useAppearance = () => useSelector((state: RootState) => state.appearance);
