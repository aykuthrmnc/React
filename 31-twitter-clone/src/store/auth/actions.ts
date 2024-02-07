import store from "~/store";
import { _setCurrentAccount } from "~/store/auth";

export const setCurrentAccount = (data: any) => store.dispatch(_setCurrentAccount(data));
