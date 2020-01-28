import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MdvComponent } from './mdv/mdv.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: MdvComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
