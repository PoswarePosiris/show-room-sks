import type { Order } from "../models/Order.model";

const getFullQte = (order : Order): number => {
    return order.list.reduce((acc, product) => {
        return Number(acc) + Number(product.quantity);
    }, 0);
}

export { getFullQte };