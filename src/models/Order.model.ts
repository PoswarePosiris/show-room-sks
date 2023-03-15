export interface Order {
    id:  string;
    ticketNumber: string;
    kioskName: string;
    mac: string;
    date: string;
    list: ProductsList[];
}

export interface ProductsList {
    name: string,
    ref: string,
    price: string,
    quantity: number,
}
