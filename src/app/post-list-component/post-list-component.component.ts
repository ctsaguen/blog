import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

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
