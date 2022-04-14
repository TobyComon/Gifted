import { ProxyState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { giphyApi } from "./AxiosService.js";


let params = {
    api_key: "QPzPSIwi0HFdLvSMvbcIRGOIsfKuTHec",
    rating: 'pg',
    q: ''
}

class GiftsService {
    async getGifts() {
        const res = await giphyApi.get('search?', { params })
        console.log(res.data.data);
        ProxyState.gifts = res.data.data.map(g => new Gift(g))
        console.log(ProxyState.gifts);
        
    }

    async searchGifs(query) {
        params.q = query

    }
}




export const giftsService = new GiftsService()