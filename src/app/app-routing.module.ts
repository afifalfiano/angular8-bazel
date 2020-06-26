import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {path: 'test', component: TestComponent, pathMatch: 'full'},
    { path: 'blog', loadChildren: () => import('./blog/blog.module.ngfactory').then(m => m.BlogModuleNgFactory) },
    // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), pathMatch: 'full' },
    // { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule), pathMatch: 'full' },
    // { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
