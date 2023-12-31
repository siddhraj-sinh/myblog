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
}
