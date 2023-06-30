import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogServiceService } from 'src/app/services/blog-service.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  post = {
    title: '',
    description: ''
  };

  constructor(private service:BlogServiceService,private router:Router) { }

  createPost() {
    this.service.addBlog(this.post)
      .subscribe(() => {
        this.router.navigate(['/blog']);
      });
  }
}
