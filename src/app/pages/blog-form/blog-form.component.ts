import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/class/blog';
import { BlogServiceService } from 'src/app/services/blog-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  public blog = new Blog();
  constructor(private blogSevice: BlogServiceService, private snack: MatSnackBar) { }
  ngOnInit(): void {
  }
  formSubmit() {
    if (this.blog.title == '' || this.blog.title == null) {

      this.snack.open('Mandatory ', 'ok', {
        duration: 3000,
        verticalPosition: 'top',
      });
      return;
    }
    this.blogSevice.addBlog(this.blog).subscribe(
      (data: any) => {
        //success
        console.log(data);
        //alert("success");
        Swal.fire('Blog added successfully', 'Id of the blog' + data.id, 'success')
      },
      (error) => {
        //error
        console.log(error);
        // alert('smthg went wrong');
        this.snack.open('Erreur', '', {
          duration: 3000,
          verticalPosition: 'top',
        })
      }
    );

  }

}
