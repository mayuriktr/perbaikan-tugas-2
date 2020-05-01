import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {GlobserService} from './globser.service';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Kevin Reynaldi';
  datadariglob : any;
  data : String;

  constructor(private router:Router, public variabelglobal : GlobserService){}
    Input(){
      this.router.navigate(['/halamaninput']);

    }

    List(){
      this.router.navigate(['/halamanlist']);
    }

    Edit(){
      this.router.navigate(['/halamanedit']);

    }
}
