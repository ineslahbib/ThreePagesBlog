import { ViewportScroller } from '@angular/common';
import { Component, OnInit, NgZone } from '@angular/core';
import { BlogServiceService } from 'src/app/services/blog-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})

export class BlogListComponent implements OnInit {
  blogs: any[] = []
  constructor(private _blog: BlogServiceService, private zone: NgZone) { }

  ngOnInit(): void {
    this._blog.Allblogs().subscribe(
      (data: any): void => {
        //css

        this.blogs = data;
        console.log(this.blogs)

      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Erreur', 'error');
      });
  }

}


