import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';
import Datasnapshot = firebase.database.DataSnapshot;
import { post } from 'selenium-webdriver/http';

@Injectable()
export class postsService {

 posts: Post[] = [];

 P1 = new Post('Post 1','première ppost de mon blog qui est un blog très visiter par ailleur',0,Date());
 P2 = new Post('Post 2','deuxième post de mon blog qui est un blog très visiter par ailleur',0,Date());
 /* 
  posts=[ 
  {
    title: 'Post 3',
    content: 'troisième post de mon blog qui est un blog très visiter par ailleur',
    loveIts: 0,
    created_at: Date()
  }
];
*/

 postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
}

getPosts() {
  firebase.database().ref('/posts')
    .on('value', (data: Datasnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
    );
}


getSinglePosts(id: number) {
  return new Promise(
    (resolve, reject) => {
      firebase.database().ref('/posts/' + id).once('value').then(
        (data: Datasnapshot) => {
          resolve(data.val());
        }, (error) => {
          reject(error);
        }
      );
    }
  );
}

createNewPost(newPosts: Post) {
  this.posts.push(newPosts);
  this.savePosts();
  this.emitPosts();
}

removeBook(posts: Post) {
  const bookIndexToRemove = this.posts.findIndex(
    (postEl) => {
      if(postEl === posts) {
        return true;
      }
    }
  );
  this.posts.splice(bookIndexToRemove, 1);
  this.savePosts();
  this.emitPosts();
}

changePsitivePost(id : number){
  
}

}