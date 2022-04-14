

export class Gift {
constructor(data) {
  this.id = data.id
    this.url = data.images.original.url
    this.title = data.title

}
    get Template(){
        return /*html*/`<div class="col-3">
        <div class="card selectable" onclick="app.myGifsController.saveGif('${this.id}')">
          <img class="m-2" src="${this.url}" alt="">
          <h3 class="text-center"></h3>
        </div>
      </div>`
    }

}