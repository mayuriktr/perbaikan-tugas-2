import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HalamaneditComponent } from './halamanedit/halamanedit.component';
import { HalamaninputComponent } from './halamaninput/halamaninput.component';
import { HalamanlistComponent } from './halamanlist/halamanlist.component';
import {Routes, RouterModule} from '@angular/router';
import { GlobserService } from './globser.service';

const ROUTES:Routes=[
{
 path:'halamanedit',component : HalamaneditComponent
},
{
 path:'halamaninput',component : HalamaninputComponent
},
{
 path:'halamanlist',component : HalamanlistComponent
},
]

@NgModule({
  imports:      [ 
  BrowserModule,
  FormsModule,
   RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, HalamaneditComponent, HalamaninputComponent, HalamanlistComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobserService]
})
export class AppModule { }
