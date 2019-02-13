import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  constructor() { }
  
  @Input() postTitre : String;

  @Input() postContenue : String;

  @Input() postDate : String;

  @Input() postLoveIt : number;

  ngOnInit() {
  }

  onAccepte(){
    this.postLoveIt++;
  }

  onRefuse(){
    this.postLoveIt--;
  }

}
