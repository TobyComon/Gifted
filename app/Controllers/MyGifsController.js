import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { myGifsService } from "../Services/MyGifsService.js";

export class MyGifsController {

    
    async saveGif(id) {
        try {
            const myGifs = await myGifsService.saveGif(id)
        } catch (error) {
            Pop.toast(error.message, "error")
            console.log(error);
        }
    }
}