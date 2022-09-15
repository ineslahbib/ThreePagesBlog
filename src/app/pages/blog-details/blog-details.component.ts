import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from 'src/app/services/blog-service.service';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})

export class BlogDetailsComponent implements OnInit {
  public blog = {
    id: '',
    title: '',
    content: '',
    author: '',
  };

  constructor(private _blog: BlogServiceService, private _route: ActivatedRoute) { }

  id: any;
  afficher: any;
  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this._blog.getBlogById(this.id).subscribe(
      (data) => {
        this.afficher = data;
        console.log(this.afficher)
      },
      (error) => { }
    )
  }
}
