import { ProxyState } from "../AppState.js";
import { Pop } from "../Utils/Pop.js";
import { giftsService } from "../Services/GiphyService.js"



function _drawGifts() {
    let template = ''
    ProxyState.gifts.forEach(g => template += g.Template)
    document.getElementById('gifts').innerHTML = template
}


export class GiftsController {
    constructor() {
        ProxyState.on('gifts', _drawGifts)
        _drawGifts()
       this.getGifts()
    }

    async getGifts() {
        try {
            await giftsService.getGifts()
        } catch (error) {
            Pop.toast(error.message, "error")
            console.log(error);
            
        }
    }

    async search() {
        try {
            window.event.preventDefault()
            /**@type {HTMLFormElement } */
            // @ts-ignore
            const formElem = window.event.target
            let query = {
                title: formElem["search-gif"].value
            }
            await giftsService.searchGifs(query)
            await giftsService.getGifts()
            
        } catch (error) {
            Pop.toast(error.message, "error")
            console.log(error);
        }
 
   }

   


}
