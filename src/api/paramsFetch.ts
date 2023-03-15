import type { ApiResponse } from "../models/ApiResponse.model";
import type { Params } from "../models/Params.model";

async function paramsFetch (macAdress: string): Promise<Params> {
    const response = await fetch(`https://api-product.posiris.com/parameters/${macAdress}`, {
    method: 'GET'
    });
    const json:ApiResponse<Params> = await response.json();
    return Array.isArray(json.items) ? json.items[0] : json.items;
}



export { paramsFetch };
