import store from "~/store";
import { _setBackgroundColor, _setColor, _setFontSize, _setBoxShadow } from "~/store/appearance";

export const setBackgroundColor = (data: any) => store.dispatch(_setBackgroundColor(data));
export const setColor = (data: any) => store.dispatch(_setColor(data));
export const setFontSize = (data: any) => store.dispatch(_setFontSize(data));
export const setBoxShadow = (data: any) => store.dispatch(_setBoxShadow(data));
