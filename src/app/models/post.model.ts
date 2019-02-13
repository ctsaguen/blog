export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: string;
    constructor(title: string, content: string, loveIts: number, created_at: string ) {
    }

    setLoveIts(loveIts: number){
      this.loveIts = loveIts;
    }
  }