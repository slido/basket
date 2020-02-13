import { WordpressService } from './../../providers/word-press/word-press';
import { Component, OnInit } from '@angular/core';
import { LoaderService } from './../../providers/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  posts = [];
  page = 1;
  count = null;
  categories = [];
  categoryID = 0;
  postsPerCat = [];
  isFirst = false;
  first: boolean;
  postsPerCat1 = [];
  postsPerCat2 = [];
  postsPerCat3 = [];

  sliderConfig1 = {
    slidesPerView: 1
  };

  sliderConfig2 = {
    slidesPerView: 2
  };

  sliderConfig3 = {
    slidesPerView: 3
  };

  constructor(private wp: WordpressService, private loadingService: LoaderService) { }

  ngOnInit() {
    this.loadPosts();
    this.getPostByCategories1(653);
    this.getPostByCategories2(657);
    this.getPostByCategories3(658);
  }

  async loadPosts() {
    await this.loadingService.showLoading('ifOfLoading');

    this.wp.getPosts(this.page).subscribe(res => {
      this.count = this.wp.totalPosts;
      this.posts = res;
      this.loadingService.dismissLoader('ifOfLoading');
    });

  }

  async getPostByCategories1(id) {
    await this.loadingService.showLoading('ifOfLoading2');

    this.first = false;
    this.isFirst = false;
    this.wp.getPostsByCategory(id).subscribe(res => {
      this.postsPerCat1 = res;
      this.count = this.wp.totalPosts;
      console.log(this.postsPerCat1);
      //console.log(this.categories);
      this.loadingService.dismissLoader('ifOfLoading2');

    });
  }

  async getPostByCategories2(id) {
    await this.loadingService.showLoading('ifOfLoading3');

    this.first = false;
    this.isFirst = false;
    this.wp.getPostsByCategory(id).subscribe(res => {
      this.postsPerCat2 = res;
      //this.count = this.wp.totalPosts;
      console.log(this.postsPerCat2);
      //console.log(this.categories);
      this.loadingService.dismissLoader('ifOfLoading3');

    });
  }

  async getPostByCategories3(id) {
    await this.loadingService.showLoading('ifOfLoading4');

    this.first = false;
    this.isFirst = false;
    this.wp.getPostsByCategory(id).subscribe(res => {
      this.postsPerCat3 = res;
      //this.count = this.wp.totalPosts;
      console.log(this.postsPerCat3);
      //console.log(this.categories);
      this.loadingService.dismissLoader('ifOfLoading4');

    });
  }

}
