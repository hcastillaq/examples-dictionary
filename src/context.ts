import { createContext } from "react";
import { AppContext } from "./interfaces";

export const appContext = createContext<AppContext>({
	query: "",
	sound: "",
	phonetic: "",
});
