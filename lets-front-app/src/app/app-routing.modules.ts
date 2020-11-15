import { Component, NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ErrorComponent } from './error/error.component';
import { ListClaimsComponent } from './list-claims/list-claims.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent },
    { path: 'welcome/:name', component: WelcomeComponent },
    { path: 'list-claims', component: ListClaimsComponent },
    { path: '**', component: ErrorComponent }
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }