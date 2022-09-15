import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let baseUrl = "http://127.0.0.1:8000"
@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private _http: HttpClient) { }
  //return all blogs
  public Allblogs() {
    return this._http.get(`${baseUrl}/`)
  }
  //Add blog
  public addBlog(blog: any) {
    return this._http.post(`${baseUrl}/`, blog);
  }
  public getBlogById(id: any) {
    return this._http.get(`${baseUrl}/${id}`);
  }

}
