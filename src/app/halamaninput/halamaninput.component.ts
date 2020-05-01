import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import appComponentHtml from '../app.component.html';
import { GlobserService } from '../globser.service';


@Component({
  selector: 'app-halamaninput',
  templateUrl: './halamaninput.component.html',
  styleUrls: ['./halamaninput.component.css']
})
export class HalamaninputComponent implements OnInit {

  namajurusan = "";
  penjelasanjurusan="";
  a  = "";
  b = "";

  constructor(private route : ActivatedRoute, public variabelglobal : GlobserService) { }

  ngOnInit() {
  }

  Masukan(){
    this.namajurusan = this.a;
    this.penjelasanjurusan = this.b;

    this.variabelglobal.setnamajurusan(this.namajurusan);
    this.variabelglobal.setpenjelasanjurusan(this.penjelasanjurusan);

    
  
  }



}