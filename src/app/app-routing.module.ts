import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthorizationComponent } from './authorization/authorization.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent },
  {path: 'auth', component: AuthorizationComponent},
  {path: 'user-page', component: UserPageComponent, canActivate: [AuthGuard]},
  {path: 'sign-up-page', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
