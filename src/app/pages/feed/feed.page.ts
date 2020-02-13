import { Component, OnInit } from '@angular/core';
import { WordpressService } from './../../providers/word-press/word-press';
import { LoaderService } from './../../providers/loader.service';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss']
})
export class FeedPage {

  categories = [];
  categoryID = 0;
  postsPerCat = [];
  page = 1;
  count = null;
  selectedIdx = 657;
  isFirst = false;
  first: boolean;

  constructor(private wp: WordpressService, private loadingService: LoaderService) { }

  ngOnInit() {
    this.getCategories();
  }

  async getCategories() {
    await this.loadingService.showLoading('ifOfLoading');

    return this.wp.getAllCategories().subscribe(res => {
      this.categories = res;
      console.log(this.categories);
      this.getPostByCategories(this.categories[0].id);
      this.loadingService.dismissLoader('ifOfLoading');
    });
  }

  async getCatByID(id) {
    await this.loadingService.showLoading('ifOfLoading2');

    this.wp.getCathegory(id).subscribe(res => {
      this.categories = res;
      console.log(this.categories);
      this.loadingService.dismissLoader('ifOfLoading2');
    });
  }

  async getPostByCategories(id) {
    await this.loadingService.showLoading('ifOfLoading3');

    this.first = false;
    this.isFirst = false;
    this.wp.getPostsByCategory(id).subscribe(res => {
      this.postsPerCat = res;
      this.count = this.wp.totalPosts;
      //console.log(this.postsPerCat);
      //console.log(this.categories);
      this.loadingService.dismissLoader('ifOfLoading3');

    });
  }

}
