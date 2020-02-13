import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  url = `https://www.basketballnetwork.net//wp-json/wp/v2/`;
  totalPosts = null;
  pages: any;
  tag: any;
  pagesWithTags: any;
  cats: any;
  page: any = 1;

  public hystory: Array<Object>;
  public favorite: Array<Object>;

  constructor(private http: HttpClient) { }

  getPosts(page): Observable<any[]> {

    let options = {
      observe: "response" as 'body',
      params: {
        per_page: '5',
        page: '' + page
      }
    };

    return this.http.get<any[]>(`${this.url}posts?_embed`, options).pipe(
      map(resp => {
        this.pages = resp['headers'].get('x-wp-totalpages');
        this.totalPosts = resp['headers'].get('x-wp-total');

        let data = resp['body'];

        for (let post of data) {
          post.media_url = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
        }
        return data;
      })
    )
  }

  getPostsSearch(): Observable<any[]> {
    let options = {
      observe: "response" as 'body',
      params: {}
    };

    return this.http.get<any[]>(`${this.url}posts?_embed`, options).pipe(
      map(resp => {
        this.pages = resp['headers'].get('x-wp-totalpages');
        this.totalPosts = resp['headers'].get('x-wp-total');

        let data = resp['body'];

        for (let post of data) {
          post.media_url = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
        }
        return data;
      })
    )
  }

  saveToFavorite(id) {
    return this.http.get(`${this.url}posts/${id}?_embed`).pipe(
      map(post => {
        post['media_url'] = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;

        if (this.favorite === undefined) {
          this.favorite = JSON.parse(localStorage.getItem('favoriteList'));
          if (this.favorite === null) {
            this.favorite = [];
          }
        }
        //console.log(this.favorite);
        let target = this.favorite.find((temp: any) => temp.id == id);
        if (!target) {
          this.favorite.push(post);
          localStorage.setItem('favoriteList', JSON.stringify(this.favorite));
        }
        else {
          //console.log("its in allready")
        }

        return this.favorite;
      })
    );
  }


  getPostContent(id) {
    return this.http.get(`${this.url}posts/${id}?_embed`).pipe(
      map(post => {
        post['media_url'] = post['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;

        if (this.hystory === undefined) {
          this.hystory = JSON.parse(localStorage.getItem('hystoryList'));
          if (this.hystory === null) {
            this.hystory = [];
          }
        }

        this.hystory.push(post);

        this.setStorage(JSON.stringify(this.hystory));
        return post;
      })
    );
  }

  findPost(search) {

    return this.http.get(`${this.url}posts?search=${search}`).pipe(
      map(resp => {
        let data = resp;

        return data;
      })
    );
  }

  getUser(id): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}users/?search=${id}`).pipe(
      map(resp => {
        let data = resp[0];
        return data;
      })
    )
  }

  getCathegory(id): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}categories/${id}`).pipe(
      map(resp => {
        let data = resp;
        return data;
      })
    )
  }

  getTagName(id): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}tags/${id}`).pipe(
      map(resp => {
        let data = resp;
        return data;
      })
    )
  }

  getPostsByTag(tag): Observable<any[]> {

    return this.http.get<any[]>(`${this.url}posts?tags=${tag}`).pipe(
      map(resp => {
        let data = resp;
        return data;
      })
    )
  }


  getAllCategories(): Observable<any[]> {

    return this.http.get<any[]>(`${this.url}categories`).pipe(
      map(resp => {
        //this.pagesWithTags = resp['headers'].get('x-wp-totalpages');
        //this.totalPosts = resp['headers'].get('x-wp-total');

        let data = resp;
        return data;
      })
    )
  }

  getPostsByCategory(cat): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}posts?categories=${cat}&per_page=10`).pipe(
      map(resp => {

        let data = resp;
        for (let post of data) {
          post.media_url = post.fimg_url;
        }
        return data;
      })
    )
  }


  ///// Storage

  public setStorage(value) {

    let filteredValue = JSON.parse(value);

    if (this.hystory.indexOf(filteredValue) == -1) {
      localStorage.setItem('hystoryList', JSON.stringify(this.hystory));
    }

  }


  public load() {
    console.log(localStorage.getItem('hystoryList'));
    if (localStorage.getItem('hystoryList') !== null) {
      return this.hystory = JSON.parse(localStorage.getItem('hystoryList'));
    }
  }


}
