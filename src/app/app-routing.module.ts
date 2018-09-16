import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { UsersComponent} from './components/users/users.component';
import { PostsComponent} from './components/posts/posts.component';
import { PostComponent} from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

//controller - routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostComponent }, 
  { path: '**', component: NotFoundComponent } 
];

//decorators are annontations
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  //declarations: []
})
export class AppRoutingModule { }

//add router module to app.component.html file -  <router-outlet></router-outlet>
