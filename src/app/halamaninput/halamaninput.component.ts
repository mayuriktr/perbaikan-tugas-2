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
  j = 0;
  datanama = [];
  datap = [];

  constructor(private route : ActivatedRoute, public variabelglobal : GlobserService) {
    this.datanama = this.variabelglobal.getnamajurusan();
    this.datap = this.variabelglobal.getpenjelasanjurusan();
    this.j = this.variabelglobal.getjumlahnamajurusan();
   }

  ngOnInit() {
  }

  Masukan(a,b){

      this.datanama.push(a);
      this.datap.push(b);
      this.j+=1;
    // this.namajurusan = this.a;
    // this.penjelasanjurusan = this.b;

    // this.variabelglobal.setnamajurusan(this.namajurusan);
    // this.variabelglobal.setpenjelasanjurusan(this.penjelasanjurusan);
  }



}