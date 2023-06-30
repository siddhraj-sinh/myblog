import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from 'src/app/services/blog-service.service';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  constructor(private service: BlogServiceService,private route: ActivatedRoute) {}
  post:any
  ngOnInit(){
    const postId = this.route.snapshot.params['id'];
    this.loadPost(postId);
  }
 
  loadPost(id:any){
    this.service.getBlog(id).subscribe((res)=>this.post=res)
  }
}
