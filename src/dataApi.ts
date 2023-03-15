import { paramsFetch } from "./api/paramsFetch";
import type { macTheme } from "./models/Params.model";

export default class DataApi {
    static mac: string = "d8:a3:5c:e6:97:46";

    // static macList: string[] = [
    //     "d8:a3:5c:e6:97:46",
    //     "d8:a3:5c:e6:98:62",
    //     "d8:a3:5c:e6:97:6a"
    // ]

    static getMacTheme = async (): Promise<macTheme> => {
        let themeR : macTheme;
        const theme = await paramsFetch(this.mac);
        themeR = { ...themeR, ...theme };
        themeR.macAdress = this.mac ;
        return themeR;
    }

}