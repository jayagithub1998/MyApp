import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { TestComponent } from './test/test.component';
import { CalculatorComponent} from './calculator/calculator.component';
import { EditorComponent} from './editor/editor.component';
import { RegistrationComponent} from './student/registration/registration.component';
import { ShapesComponent} from './shapes/shapes.component';
import { ProductComponent} from './product/product.component';
import { ItemlistComponent} from './itemlist/itemlist.component'
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [{path:"item",component:ItemlistComponent},{path:"employee",component:EmployeeComponent},{path:"demo",component:DemoComponent},{path:"product",component:ProductComponent},{path:"calculator",component:CalculatorComponent},{path:"editor",component:EditorComponent},{path:"shape",component:ShapesComponent},{path:"registration",component:RegistrationComponent},{path:"test",component:TestComponent}, { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
