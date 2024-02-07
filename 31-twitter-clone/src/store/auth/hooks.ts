import { useSelector } from "react-redux";
import { RootState } from "~/store";

export const useAccount = () =>
  useSelector((state: RootState) => state.auth.currentAccount);
export const useAccounts = () =>
  useSelector((state: RootState) => state.auth.accounts);
