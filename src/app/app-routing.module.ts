import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{path:"home",component:DemoComponent},{path:"test",component:TestComponent}, { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
