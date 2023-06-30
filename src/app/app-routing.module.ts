import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'edit-post/:id', component: EditPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
