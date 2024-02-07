import { useSelector } from "react-redux";
import { RootState } from "~/store";

export const useModal = () => useSelector((state: RootState) => state.modal.modal);
