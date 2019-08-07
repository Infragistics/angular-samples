import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridFinjsComponent } from './grid-finjs/grid-finjs.component';
import { IgxTreeGridModule, IgxCheckboxModule, IgxButtonModule,
  IgxSwitchModule, IgxSliderModule, IgxExcelExporterService } from 'igniteui-angular';
import { LocalDataService } from './grid-finjs/localData.service';
import { TreeGridGroupingPipe } from './grid-finjs/tree-grid-grouping.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GridFinjsComponent,
    TreeGridGroupingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxTreeGridModule,
    IgxCheckboxModule,
    IgxButtonModule,
    IgxSwitchModule,
    IgxSliderModule
  ],
  providers: [LocalDataService, IgxExcelExporterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
