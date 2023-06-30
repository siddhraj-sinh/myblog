import { Component } from '@angular/core';
import { BlogServiceService } from 'src/app/services/blog-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogs: any[] = [];
   constructor(private service:BlogServiceService,private router: Router){}
 

   ngOnInit(){
    this.loadAllBlogs();
   }

   loadAllBlogs(){

    this.service.getAllBlog().subscribe((res)=>this.blogs=res);

   }

   navigateToPostDetails(id:any){
    this.router.navigate(['/post', id]);
   }
}
