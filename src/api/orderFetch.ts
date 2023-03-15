import type { ApiResponse } from "../models/ApiResponse.model";
import type { Order } from "../models/Order.model";

async function orderFetch (): Promise<Order[]>{
    const response = await fetch(`https://api-product.posiris.com/orders`, {
    method: 'GET',
    })
    const json: ApiResponse<Order> = await response.json()
    return Array.isArray(json.items) ? json.items : [json.items];
}

async function orderIdFetch (id: number): Promise<Order>{
    const response = await fetch(`https://api-product.posiris.com/orders/${id}`, {
    method: 'GET',
    })
    const json: ApiResponse<Order> = await response.json();
    return Array.isArray(json.items) ? json.items[0] : json.items;
}

async function lastOrders(): Promise<Order[]>{
    const response = await fetch(`https://api-product.posiris.com/lastOrders`, {
    method: 'GET',
    })
    const json: ApiResponse<Order> = await response.json();
    return Array.isArray(json.items) ? json.items : [json.items];
}


export { orderFetch, orderIdFetch, lastOrders }