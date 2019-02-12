import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitre : String;

  @Input() postContenue : String;

  @Input() postDate : String;

  @Input() postLoveIt : number;

  constructor() { }

  ngOnInit() {
  }

  onAccepte(){
    this.postLoveIt++;
  }

  onRefuse(){
    this.postLoveIt--;
  }

}
