import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from 'src/app/services/blog-service.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  postId:any;
  post = {
    title: '',
    description: ''
  };
  constructor(private service:BlogServiceService,private route:ActivatedRoute,private router:Router){}
 
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.loadPost();
    });
  }
  loadPost() {
    this.service.getBlog(this.postId).subscribe((res)=>this.post=res)
  }
  updatePost(){
    this.service.updateBlog(this.postId,this.post).subscribe((res)=>{
      this.router.navigate(['/blog'])
    })
  }
}
