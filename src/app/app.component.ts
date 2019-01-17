import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts=[ {
    title: 'Post 1',
    content: 'première ppost de mon blog qui est un blog très visiter par ailleur',
    loveIts: 0,
    created_at: Date()
  },
  {
    title: 'Post 2',
    content: 'deuxième post de mon blog qui est un blog très visiter par ailleur',
    loveIts: 0,
    created_at: Date()
  },
  {
    title: 'Post 3',
    content: 'troisième post de mon blog qui est un blog très visiter par ailleur',
    loveIts: 0,
    created_at: Date()
  }
];
}
