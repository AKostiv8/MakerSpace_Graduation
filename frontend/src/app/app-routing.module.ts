/**
 * Created by Anastasiia on 10.03.2018.
 */

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OutviewComponent } from './components/outview/outview.component';
import { MainComponent } from './components/main/main.component';



const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'one',
    component: OutviewComponent,
  }

  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
