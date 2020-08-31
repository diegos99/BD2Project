import { Component } from '@angular/core';
import { ExternalService } from './external.service';
import { Comments } from './Comments';
import { Posts } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private external: ExternalService){}
  title = 'Sistema de fábrica';

  listcomments: Comments[];
  listposts: Posts[];
  objposts: Posts;
  ngOnInit() {
    this.external.getComments().subscribe(
      data=>{
        this.listcomments = data;
      }
    );

    var opost =  new Posts();
    opost.body = 'testbody';
    opost.title = 'testtitle';
    opost.userId = 6;

    this.external.post(opost).subscribe(
      data=>{
        this.objposts = data;
      }
    );
  }
}
