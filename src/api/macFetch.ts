import type { ApiResponse } from "../models/ApiResponse.model";
import type { Mac } from "../models/Mac.model";

async function macFetch (): Promise<Mac | Mac[]>{
    const response = await fetch(`https://api-product.posiris.com/api/mac.php`, {
    method: 'GET',
    })
    const json: ApiResponse<Mac> = await response.json();
    return json.items;
}


export { macFetch}