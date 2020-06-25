import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {path: 'test', component: TestComponent, pathMatch: 'full'},
    // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), pathMatch: 'full' },
    // { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule), pathMatch: 'full' },
    // { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), pathMatch: 'full' }
    { path: 'home', loadChildren: './home/home.module#HomeModule', pathMatch: 'full' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfileModule', pathMatch: 'full' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
