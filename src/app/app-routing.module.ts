import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookPageComponent } from './book/book-page/book-page.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { CanOpenUserGuard } from './guards/can-open-user.guard';

const routes: Routes = [
    { path: 'books', component: BookPageComponent },
    { path: 'user/:id', component: UserDetailsComponent, canActivate: [CanOpenUserGuard], },
    { path: '**', redirectTo: 'books' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
