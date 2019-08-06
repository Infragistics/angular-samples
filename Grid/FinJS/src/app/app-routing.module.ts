import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridFinjsComponent } from './grid-finjs/grid-finjs.component';

const routes: Routes = [
  { path: '', redirectTo: '/grid-finjs', pathMatch: 'full' },
  { path: 'grid-finjs', component: GridFinjsComponent, data: { text: 'grid-finjs' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
