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
  // a  = "";
  // b = "";
  j1 = 0;
  j2 = 0;
  datanama = [];
  datap = [];
  j=0;

  constructor(private route : ActivatedRoute, public variabelglobal : GlobserService) {
    this.datanama = this.variabelglobal.getnamajurusan();
    this.datap = this.variabelglobal.getpenjelasanjurusan();
    this.j1 = this.variabelglobal.getjumlahnamajurusan();
    this.j2 = this.variabelglobal.getjumlahpenjelasanjurusan();
   }

  ngOnInit() {
  }

  Masukan(a,b){

      // this.datanama.push(a);
      // this.datap.push(b);
      // this.j+=1;

      this.namajurusan = a;
      this.penjelasanjurusan = b;

      this.variabelglobal.setnamajurusan(this.namajurusan);
      this.variabelglobal.setpenjelasanjurusan(this.penjelasanjurusan);
  }



}