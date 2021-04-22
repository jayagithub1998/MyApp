import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TestComponent } from './test/test.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {StudentModule} from './student/student.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EditorComponent } from './editor/editor.component';
import { ProductComponent } from './product/product.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule} from 'ngx-pagination';
import { EmployeeComponent } from './employee/employee.component'


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TestComponent,
    CalculatorComponent,
    EditorComponent,
    ProductComponent,
    ItemlistComponent,
    EmployeeComponent,
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    StudentModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
