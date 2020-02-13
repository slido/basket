import { Component } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  constructor(private location: Location) { }

  deleteHystory() {
    localStorage.setItem('hystoryList', null);
  }

  deleteFavorites() {
    localStorage.setItem('favoriteList', null);
  }

  myBackButton() {
    this.location.back();
  }

}
