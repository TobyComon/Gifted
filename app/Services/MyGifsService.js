import { ProxyState } from "../AppState.js";
import { MyGifsController } from "../Controllers/MyGifsController.js";
import { Gift } from "../Models/Gift.js";


class MyGifsService {
     saveGif(id) {
        const foundGif = ProxyState.gifts.find(g => g.id == id)

        ProxyState.myGifs = [...ProxyState.myGifs, foundGif(id)]
        console.log(ProxyState.myGifs);
    }
}








export const myGifsService = new MyGifsService()