import { writable } from "svelte/store";
import type { macTheme } from "../models/Params.model";


export const theme = writable<macTheme>(null);


