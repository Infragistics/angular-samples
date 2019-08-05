import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { ProductInMemDataService } from './product/product-in-mem-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { IgxButtonModule, IgxCheckboxModule, IgxDatePickerModule, IgxDialogModule, IgxGridModule, IgxInputGroupModule, IgxIconModule, IgxComboModule, IgxRippleModule } from 'igniteui-angular';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxGridModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxComboModule,
    IgxRippleModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductInMemDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
