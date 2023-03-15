import { writable } from "svelte/store";
import type { Order } from "../models/Order.model";


export const orders = writable<Order[]>(null);

