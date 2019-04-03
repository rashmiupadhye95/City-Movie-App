import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentDoneComponent } from './payment.done/payment.done.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'forgot-password', component: ForgotPasswordComponent},
  { path:'list-movies', component: ListMoviesComponent},
  { path:'booking/:id', component: BookingComponent},
  { path:'payment', component: PaymentComponent},
  { path:'payment-done', component: PaymentDoneComponent},
  { path:'offers', component: OffersComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
