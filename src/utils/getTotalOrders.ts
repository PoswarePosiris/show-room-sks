import type { Order } from "../models/Order.model";

const getTotal = (price: number, quantity: number): number => {
    return price * quantity;
}
const getFullTotal = (order : Order): number => {
    return order.list.reduce((acc, product) => {
        return acc + getTotal(parseFloat(parseFloat(product.price).toFixed(2)), product.quantity);
    }, 0);
}

export { getTotal, getFullTotal };