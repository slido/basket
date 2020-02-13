import { Component } from '@angular/core';
import { WordpressService } from './../../providers/word-press/word-press';

@Component({
  selector: 'app-history',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss']
})
export class HistoryPage {

  public hystoryList: Array<Object>;

  constructor(private wp: WordpressService) { }

  ionViewWillEnter() {
    this.load();
  }

  load() {
    if (localStorage.getItem('hystoryList') !== null) {
      this.hystoryList = JSON.parse(localStorage.getItem('hystoryList'));
      console.log(this.hystoryList);
    }
  }

  delete() {
    this.hystoryList = [];
  }

}
