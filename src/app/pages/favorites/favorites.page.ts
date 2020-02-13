import { Component } from '@angular/core';
import { WordpressService } from './../../providers/word-press/word-press';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss']
})
export class FavoritesPage {

  public favoriteList:Array<Object>;

  constructor(private wp: WordpressService) {}

  ionViewWillEnter(){
    this.load();
  }

  load() {
        if ( localStorage.getItem('favoriteList') !== null ) {
            this.favoriteList = JSON.parse(localStorage.getItem('favoriteList'));
            console.log(this.favoriteList);
        }
    }

 delete(){
   this.favoriteList = [];
   //localStorage.setItem('hystoryList', Object.values(this.hystoryList));
 }

}
