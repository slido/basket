import { WordpressService } from './../../../providers/word-press/word-press';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { LoaderService } from './../../../providers/loader.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['post.page.scss'],
})
export class PostPage implements OnInit {
  post: any;
  user: any;
  category: any;
  posts: any;
  tagName: any;
  hystory:Array<Object> = [];
  favorites:Array<Object> = [];
  sliderConfig = {
    slidesPerView: 2
  };

  author: any;
  cat: any;
  tag: any;

  constructor(private route: ActivatedRoute, private wp: WordpressService, private location: Location, private loadingService: LoaderService) { }

  async ngOnInit() {

    await this.loadingService.showLoading('ifOfLoading');

    let id = this.route.snapshot.paramMap.get('id');
    this.wp.getPostContent(id).subscribe(res => {
      this.post = res;
      console.log(this.post);
      this.getUser(this.post.author);
      this.getCategory(this.post.categories[0]);
      this.loadPostsByTags(this.post.tags[0]);
      this.getTag(this.post.tags[0]);

      console.log(this.post);
      this.loadingService.dismissLoader('ifOfLoading');
    });
  }

  async getUser(id) {
    await this.wp.getUser(id).subscribe(res => {
      this.user = res;
    });
  }

  myBackButton() {
    this.location.back();
  }

  async getCategory(id) {
    //console.log(id);
    await this.wp.getCathegory(id).subscribe(res => {
      this.category = res;
    });
  }

  async getTag(id) {
    //console.log(id);
    await this.loadingService.showLoading('ifOfLoading2');
    await this.wp.getTagName(id).subscribe(res => {
      this.tagName = res;
      this.loadingService.dismissLoader('ifOfLoading2');
    });

  }

  openOriginal() {
    // Add InAppBrowser for app if want
    window.open(this.post.link, '_blank');
  }

  async loadPostsByTags(tagId) {

    this.wp.getPostsByTag(tagId).subscribe(res => {
      //  this.count = this.wp.totalPosts;
      this.posts = res;
    });
  }


  addToFavorites(id){
    this.wp.saveToFavorite(id).subscribe(res => {
      //  this.count = this.wp.totalPosts;
      this.favorites = res;
    });
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500);
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500);
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
