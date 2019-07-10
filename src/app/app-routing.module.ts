import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookPageComponent } from './book/book-page/book-page.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

const routes: Routes = [
    { path: 'books', component: BookPageComponent },
    { path: 'user/:id', component: UserDetailsComponent },
    { path: '**', redirectTo: 'books' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
