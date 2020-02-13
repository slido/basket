import { WordpressService } from './../../providers/word-press/word-press';
import { Component } from '@angular/core';
import { LoaderService } from './../../providers/loader.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  posts: any = [];
  page = 1;
  count = null;
  poke = [];
  offset = 0;

  constructor(private wp: WordpressService, private loadingService: LoaderService) { }

  async loadPosts() {
    await this.loadingService.showLoading('ifOfLoading');

    this.wp.getPostsSearch().subscribe(res => {
      this.count = this.wp.totalPosts;
      this.posts = res;
      console.log(this.posts);
      this.loadingService.dismissLoader('ifOfLoading');
    });
  }

  async onSearchChange(e) {
    let value = e.detail.value;
    await this.loadingService.showLoading('ifOfLoading2');

    if (value == '') {
      this.offset = 0;
      this.loadPosts();
      return;
    }

    this.wp.findPost(value).subscribe(res => {
      this.posts = res;
      this.loadingService.dismissLoader('ifOfLoading2');
    }, err => {
      this.posts = [];
    });
  }

}
