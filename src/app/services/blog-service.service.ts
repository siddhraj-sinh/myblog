import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private http:HttpClient) { }
  url ="http://localhost:3000/blogs";
  getAllBlog():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  getBlog(id:any):Observable<any>{
   const url =`http://localhost:3000/blogs/${id}`;
   return this.http.get<any>(url);
  }

  addBlog(blog:any):Observable<any>{
   return this.http.post<any>(this.url,blog);
  }

  updateBlog(id:any,blog:any):Observable<any>{
    const url =`http://localhost:3000/blogs/${id}`;
   return this.http.put<any>(url,blog);
  }
}
